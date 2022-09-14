import { Contract, ContractsService } from '@dipdup/tzkt-api';
import { PackDataResponse } from "@taquito/rpc";
import { MichelCodecPacker, MichelsonMap, TezosToolkit, WalletContract } from '@taquito/taquito';
import { useState } from 'react';
import './App.css';
import ConnectButton from './ConnectWallet';
import DisconnectButton from './DisconnectWallet';

type entrypointType = {
  method  : string,
  addr    : string
};

type storage = {
  governance : string, //admins
  entrypoints : MichelsonMap<string,entrypointType> //interface schema map
};

type pokeMessage = {
  receiver : string,
  feedback : string
};

type callContract = { 
  entrypointName : string, 
  payload         : string //hexadecimal
};

function App() {
  
  const [Tezos, setTezos] = useState<TezosToolkit>(new TezosToolkit("https://jakartanet.tezos.marigold.dev"));
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);

  const [contractToPoke, setContractToPoke] = useState<string>("");
  
  Tezos.setPackerProvider(new MichelCodecPacker());


  //tzkt
  const contractsService = new ContractsService( {baseUrl: "https://api.jakartanet.tzkt.io" , version : "", withCredentials : false});
  const [contracts, setContracts] = useState<Array<Contract>>([]);
  
  const fetchContracts = () => {
    (async () => {
      let contracts = (await contractsService.getSimilar({address:"KT1VYjTExoE5EHJkT6mBWWoW7BcsHqnJBdgp" , includeStorage:true, sort:{desc:"id"}}));
      contracts = await Promise.all(contracts.map(async (c:Contract) => await extractContractStorage(c)));
      console.log("contracts",contracts);
      
      setContracts(contracts);
    })();
  }
  
  //poke
  const poke = async (e :  React.MouseEvent<HTMLButtonElement>, contract : Contract) => {  
    e.preventDefault(); 
    let c : WalletContract = await Tezos.wallet.at(""+contract.address);
    try {
      console.log("contractToPoke",contractToPoke);
      const p = new MichelCodecPacker(); 
      let contractToPokeBytes: PackDataResponse = await p.packData({
        data: { string: contractToPoke },
        type: { prim: "address" }
      });
      console.log("packed",contractToPokeBytes.packed);

      const op = await c.methods.call("PokeAndGetFeedback",contractToPokeBytes.packed).send();
      await op.confirmation();
      alert("Tx done");
    } catch (error : any) {
      console.log(error);
      console.table(`Error: ${JSON.stringify(error, null, 2)}`);
    }
  };

    //mint
    const mint = async (e :  React.MouseEvent<HTMLButtonElement>, contract : Contract) => {  
      e.preventDefault(); 
      let c : WalletContract = await Tezos.wallet.at(""+contract.address);
      try {
        console.log("contractToPoke",contractToPoke);
        
        const p = new MichelCodecPacker(); 
        let initBytes: PackDataResponse = await p.packData({
          data: { prim : "Pair" , args : [{string: userAddress},{int:"1"}]  },
          type: { prim : "Pair" , args : [{prim: "address"},{prim : "nat"}]  }
        });
        const op = await c.methods.call("Init",initBytes.packed).send();

        await op.confirmation();
        alert("Tx done");
      } catch (error : any) {
        console.log(error);
        console.table(`Error: ${JSON.stringify(error, null, 2)}`);
      }
    };
  
    //alter proxy to add underlying storage
  const extractContractStorage = async (proxy : Contract) : Promise<Contract> => {
    //get contract address from first entrypoint
    let taquitocontract = await Tezos.wallet.at(""+proxy.address);
    const taquitoStorage : storage = await taquitocontract.storage() as storage;    
    let firstEp : entrypointType | undefined  = await taquitoStorage.entrypoints.get("Poke"); 
    let underlyingContract : WalletContract = await Tezos.wallet.at(""+firstEp!.addr);
    proxy.storage.underlyingContract = await underlyingContract.storage();
    //console.log("underlyingContract",proxy.storage.underlyingContract);
    return new Promise((resolve,reject)=>resolve(proxy));
  }
  
  return (
    <div className="App">
    <header className="App-header">
    
    <ConnectButton
    Tezos={Tezos}
    setWallet={setWallet}
    setUserAddress={setUserAddress}
    setUserBalance={setUserBalance}
    wallet={wallet}
    />
    
    <DisconnectButton
    wallet={wallet}
    setUserAddress={setUserAddress}
    setUserBalance={setUserBalance}
    setWallet={setWallet}
    />

    
    <div>
    I am {userAddress} with {userBalance} mutez
    </div>
    
    
    <br />
    <div>
    <button onClick={fetchContracts}>Fetch contracts</button>
    <table><thead><tr><th>address</th><th>trace "contract - feedback - user"</th><th>action</th></tr></thead><tbody>
    {contracts.map((contract) => <tr>
      <td style={{borderStyle: "dotted"}}>{contract.address}</td>
      <td style={{borderStyle: "dotted"}}>{(contract.storage !== null && contract.storage.underlyingContract.pokeTraces !== null 
        && contract.storage.underlyingContract.pokeTraces.size > 0)?
        Array.from((contract.storage.underlyingContract.pokeTraces as MichelsonMap<string,pokeMessage>).keys()).map((k : string)=>contract.storage.underlyingContract.pokeTraces.get(k).receiver+" "+contract.storage.underlyingContract.pokeTraces.get(k).feedback+" "+k+",")
        :""}</td>
      <td style={{borderStyle: "dotted"}}><input type="text" onChange={e=>{console.log("e",e.currentTarget.value);setContractToPoke(e.currentTarget.value)}} placeholder='enter contract address here' />
                                          <button onClick={(e) =>poke(e,contract)}>Poke</button>
                                          <button onClick={(e)=>mint(e,contract)}>Mint 1 ticket</button></td>
                              </tr>)}
    </tbody></table>
    </div>
    
    
    </header>
    </div>
    );
  }
  
  export default App;
  