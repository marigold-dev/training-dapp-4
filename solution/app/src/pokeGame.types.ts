
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from './type-utils';
import { address, bytes, MMap, nat, ticket } from './type-aliases';

export type Storage = {
    feedback: string;
    pokeTraces: MMap<address, {
        feedback: string;
        receiver: address;
    }>;
    ticketOwnership: MMap<address, ticket>;
    tzip18: {
        contractNext: {Some: address} | null;
        contractPrevious: {Some: address} | null;
        proxy: address;
        version: nat;
    };
};

type Methods = {
    default: (
        entrypointName: string,
        payload: bytes,
    ) => Promise<void>;
};

type MethodsObject = {
    default: (params: {
        entrypointName: string,
        payload: bytes,
    }) => Promise<void>;
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'PokeGameCode', protocol: string, code: object[] } };
export type PokeGameContractType = ContractAbstractionFromContractType<contractTypes>;
export type PokeGameWalletType = WalletContractAbstractionFromContractType<contractTypes>;
