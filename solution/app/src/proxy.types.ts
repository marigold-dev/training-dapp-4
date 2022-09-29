
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from './type-utils';
import { address, BigMap, bytes } from './type-aliases';

export type Storage = {
    entrypoints: BigMap<string, {
        addr: address;
        method: string;
    }>;
    governance: address;
};

type Methods = {
    call: (
        entrypointName: string,
        payload: bytes,
    ) => Promise<void>;
    upgrade: (
        _0: Array<{
            entrypoint?: {
                addr: address;
                method: string;
            };
            isRemoved: boolean;
            name: string;
        }>,
        newAddr: address,
        oldAddr: address,
    ) => Promise<void>;
};

type MethodsObject = {
    call: (params: {
        entrypointName: string,
        payload: bytes,
    }) => Promise<void>;
    upgrade: (params: {
        0: Array<{
            entrypoint?: {
                addr: address;
                method: string;
            };
            isRemoved: boolean;
            name: string;
        }>,
        newAddr: address,
        oldAddr: address,
    }) => Promise<void>;
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'ProxyCode', protocol: string, code: object[] } };
export type ProxyContractType = ContractAbstractionFromContractType<contractTypes>;
export type ProxyWalletType = WalletContractAbstractionFromContractType<contractTypes>;
