
import { ContractAbstractionFromContractType, WalletContractAbstractionFromContractType } from './type-utils';
import {  } from './type-aliases';

export type Storage = {
    
};

type Methods = {
    
};

type MethodsObject = {
    
};

type contractTypes = { methods: Methods, methodsObject: MethodsObject, storage: Storage, code: { __type: 'ProxyParameterInitProxyWithV1Code', protocol: string, code: object[] } };
export type ProxyParameterInitProxyWithV1ContractType = ContractAbstractionFromContractType<contractTypes>;
export type ProxyParameterInitProxyWithV1WalletType = WalletContractAbstractionFromContractType<contractTypes>;
