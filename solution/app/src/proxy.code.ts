
export const ProxyCode: { __type: 'ProxyCode', protocol: string, code: object[] } = {
    __type: 'ProxyCode',
    protocol: 'PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"pair","annots":["%callContract"],"args":[{"prim":"string","annots":["%entrypointName"]},{"prim":"bytes","annots":["%payload"]}]},{"prim":"pair","annots":["%upgrade"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"option","annots":["%entrypoint"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%addr"]},{"prim":"string","annots":["%method"]}]}]},{"prim":"bool","annots":["%isRemoved"]}]},{"prim":"string","annots":["%name"]}]}]},{"prim":"option","args":[{"prim":"pair","args":[{"prim":"address","annots":["%newAddr"]},{"prim":"address","annots":["%oldAddr"]}]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"big_map","annots":["%entrypoints"],"args":[{"prim":"string"},{"prim":"pair","args":[{"prim":"address","annots":["%addr"]},{"prim":"string","annots":["%method"]}]}]},{"prim":"address","annots":["%governance"]}]}]},{"prim":"code","args":[[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"IF_LEFT","args":[[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"No entrypoint found"}]},{"prim":"FAILWITH"}],[{"prim":"DUP"},{"prim":"CAR"},{"prim":"CONTRACT","args":[{"prim":"pair","args":[{"prim":"string","annots":["%entrypointName"]},{"prim":"bytes","annots":["%payload"]}]}]},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"No contract found at this address"}]},{"prim":"FAILWITH"}],[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"AMOUNT"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"},{"prim":"PAIR"}]]}]]}],[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CDR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Permission denied"}]},{"prim":"FAILWITH"}],[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CAR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"LEFT","args":[{"prim":"big_map","args":[{"prim":"string"},{"prim":"pair","args":[{"prim":"address"},{"prim":"string"}]}]}]},{"prim":"LOOP_LEFT","args":[[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"IF_CONS","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"CDR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"string"}]}]},{"prim":"SWAP"},{"prim":"UPDATE"}],[{"prim":"DROP"},{"prim":"SWAP"}]]}],[{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"CDR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"IF_NONE","args":[[{"prim":"DROP"},{"prim":"SWAP"}],[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"UPDATE"}]]}],[{"prim":"DROP"},{"prim":"SWAP"}]]}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"LEFT","args":[{"prim":"big_map","args":[{"prim":"string"},{"prim":"pair","args":[{"prim":"address"},{"prim":"string"}]}]}]}],[{"prim":"RIGHT","args":[{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"option","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"string"}]}]},{"prim":"bool"}]},{"prim":"string"}]}]},{"prim":"big_map","args":[{"prim":"string"},{"prim":"pair","args":[{"prim":"address"},{"prim":"string"}]}]}]}]}]]}]]},{"prim":"SWAP"},{"prim":"IF_NONE","args":[[{"prim":"UPDATE","args":[{"int":"1"}]},{"prim":"NIL","args":[{"prim":"operation"}]}],[{"prim":"DUP"},{"prim":"CDR"},{"prim":"CONTRACT","args":[{"prim":"pair","args":[{"prim":"string","annots":["%entrypointName"]},{"prim":"bytes","annots":["%payload"]}]}]},{"prim":"IF_NONE","args":[[{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"No contract found at this address"}]},{"prim":"FAILWITH"}],[{"prim":"AMOUNT"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"PACK"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"changeVersion"}]},{"prim":"PAIR"},{"prim":"TRANSFER_TOKENS"}]]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"UPDATE","args":[{"int":"1"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CONS"}]]},{"prim":"PAIR"}]]}]]}]]}]`)
};
