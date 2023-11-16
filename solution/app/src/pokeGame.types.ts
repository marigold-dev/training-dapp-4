
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from './type-utils';
import { address, BigMap, bytes, Instruction, MMap, nat, ticket } from './type-aliases';

export type Storage = {
    storage: {
        pokeTraces: MMap<address, {
            receiver: address;
            feedback: string;
        }>;
        feedback: string;
        ticketOwnership: MMap<address, ticket>;
    };
    dynamic_entrypoints: BigMap<nat, bytes>;
};

type Methods = {
    poke: () => Promise<void>;
    setPoke: (param: Instruction[]) => Promise<void>;
    init: (
        _0: address,
        _1: nat,
    ) => Promise<void>;
};

type MethodsObject = {
    poke: () => Promise<void>;
    setPoke: (param: Instruction[]) => Promise<void>;
    init: (params: {
        0: address,
        1: nat,
    }) => Promise<void>;
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'PokeGameCode', protocol: string, code: object[] } };
export type PokeGameContractType = ContractAbstractionFromContractType<contractTypes>;
export type PokeGameWalletType = WalletContractAbstractionFromContractType<contractTypes>;
