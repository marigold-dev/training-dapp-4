import { Contract, ContractsService } from '@dipdup/tzkt-api';
import { MichelCodecPacker, TezosToolkit } from '@taquito/taquito';
import { BigNumber } from "bignumber.js";
import { useState } from 'react';
import './App.css';
import ConnectButton from './ConnectWallet';
import DisconnectButton from './DisconnectWallet'; 
import { ProxyWalletType } from './proxy.types';
import { Storage  as ProxyStorage} from './proxy.types';
import { PokeGameWalletType, Storage  as ContractStorage} from './pokeGame.types';
import { address, BigMap, bytes, nat } from './type-aliases';
import { PackDataResponse } from "@taquito/rpc";


function App() {
  
  const [Tezos, setTezos] = useState<TezosToolkit>(new TezosToolkit("https://ghostnet.tezos.marigold.dev"));
  const [wallet, setWallet] = useState<any>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);

  const [contractToPoke, setContractToPoke] = useState<string>("");
  
  //tzkt
  const contractsService = new ContractsService( {baseUrl: "https://api.ghostnet.tzkt.io" , version : "", withCredentials : false});
  const [contracts, setContracts] = useState<Array<Contract>>([]);  
  const [contractStorages, setContractStorages] = useState<Map<string,ProxyStorage&ContractStorage>>(new Map());  
  
  
  const fetchContracts = () => {
    (async () => {
      const tzktcontracts : Array<Contract>=  await contractsService.getSimilar({address: process.env["REACT_APP_CONTRACT_ADDRESS"]!, includeStorage:true, sort:{desc:"id"}});
      setContracts(tzktcontracts);
      const taquitoContracts : Array<ProxyWalletType> = await Promise.all(tzktcontracts.map(async (tzktcontract) => await Tezos.wallet.at(tzktcontract.address!) as ProxyWalletType));
      const map = new Map<string,ProxyStorage&ContractStorage>();   
      for(const c of taquitoContracts){
        const s : ProxyStorage =  await c.storage();
        let firstEp :  {addr: address;method: string;} | undefined  = await s.entrypoints.get("Poke"); 
        let underlyingContract : PokeGameWalletType = await Tezos.wallet.at(""+firstEp!.addr);
        map.set(c.address,{...s , ...await underlyingContract.storage()});
      }
      setContractStorages(map);      
    })();
  }
  
  //poke
  const poke = async (e :  React.MouseEvent<HTMLButtonElement>, contract : Contract) => {  
    e.preventDefault(); 
    let c : ProxyWalletType = await Tezos.wallet.at(""+contract.address);
    try {
      console.log("contractToPoke",contractToPoke);

      const p = new MichelCodecPacker(); 
      let contractToPokeBytes: PackDataResponse = await p.packData({
        data: { string: contractToPoke },
        type: { prim: "address" }
      });
      console.log("packed",contractToPokeBytes.packed);

      const op = await c.methods.call("PokeAndGetFeedback",contractToPokeBytes.packed as bytes).send();
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
      let c : ProxyWalletType = await Tezos.wallet.at(""+contract.address);
      try {
        console.log("contractToPoke",contractToPoke);
        const p = new MichelCodecPacker(); 
        let initBytes: PackDataResponse = await p.packData({
          data: { prim : "Pair" , args : [{string: userAddress},{int:"1"}]  },
          type: { prim : "Pair" , args : [{prim: "address"},{prim : "nat"}]  }
        });
        const op = await c.methods.call("Init",initBytes.packed as bytes).send();
        await op.confirmation();
        alert("Tx done");
      } catch (error : any) {
        console.log(error);
        console.table(`Error: ${JSON.stringify(error, null, 2)}`);
      }
    };
  
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
      <td style={{borderStyle: "dotted"}}>{(contractStorages.get(contract.address!) !== undefined && (contractStorages.get(contract.address!)!.pokeTraces))?Array.from(contractStorages.get(contract.address!)!.pokeTraces.entries()).map( (e)=>e[1].receiver+" "+e[1].feedback+" "+e[0]+","):""}</td>
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