
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from './type-utils';
import { address, MMap, nat, ticket } from './type-aliases';

export type Storage = {
    feedback: string;
    pokeTraces: MMap<address, {
        feedback: string;
        receiver: address;
    }>;
    ticketOwnership: MMap<address, ticket>;
    tzip18: {
        contractNext?: address;
        contractPrevious?: address;
        proxy: address;
        version: nat;
    };
};

type Methods = {
    
};

type MethodsObject = {
    
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'PokeGameCode', protocol: string, code: object[] } };
export type PokeGameContractType = ContractAbstractionFromContractType<contractTypes>;
export type PokeGameWalletType = WalletContractAbstractionFromContractType<contractTypes>;
