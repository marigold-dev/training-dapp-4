
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from './type-utils';
import {  } from './type-aliases';

export type Storage = {
    
};

type Methods = {
    
};

type MethodsObject = {
    
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'ProxyDefaultStorageCode', protocol: string, code: object[] } };
export type ProxyDefaultStorageContractType = ContractAbstractionFromContractType<contractTypes>;
export type ProxyDefaultStorageWalletType = WalletContractAbstractionFromContractType<contractTypes>;
