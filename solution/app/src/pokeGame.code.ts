
export const PokeGameCode: { __type: 'PokeGameCode', protocol: string, code: object[] } = {
    __type: 'PokeGameCode',
    protocol: 'PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"pair","args":[{"prim":"string","annots":["%entrypointName"]},{"prim":"bytes","annots":["%payload"]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"string","annots":["%feedback"]},{"prim":"map","annots":["%pokeTraces"],"args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"string","annots":["%feedback"]},{"prim":"address","annots":["%receiver"]}]}]}]},{"prim":"map","annots":["%ticketOwnership"],"args":[{"prim":"address"},{"prim":"ticket","args":[{"prim":"string"}]}]},{"prim":"pair","annots":["%tzip18"],"args":[{"prim":"pair","args":[{"prim":"option","annots":["%contractNext"],"args":[{"prim":"address"}]},{"prim":"option","annots":["%contractPrevious"],"args":[{"prim":"address"}]}]},{"prim":"address","annots":["%proxy"]},{"prim":"nat","annots":["%version"]}]}]}]},{"prim":"code","args":[[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"DIG","args":[{"int":"2"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"CAR"},{"prim":"CAR"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]}],[{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]}],[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]}]]}]]},{"prim":"NOT"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"AND"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"5"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Only the proxy or contractNext can call this contract"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Poke"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"CAR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"ticket","args":[{"prim":"string"}]}]},{"prim":"SOURCE"},{"prim":"GET_AND_UPDATE"},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"User does not have tickets => not allowed"}]},{"prim":"FAILWITH"}],[{"prim":"DROP"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SELF_ADDRESS"},{"prim":"PUSH","args":[{"prim":"string"},{"string":""}]},{"prim":"PAIR"},{"prim":"SOURCE"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"PokeAndGetFeedback"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"CAR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"UNPACK","args":[{"prim":"address"}]},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Cannot find the address parameter for PokeAndGetFeedback"}]},{"prim":"FAILWITH"}],[{"prim":"SWAP"},{"prim":"NONE","args":[{"prim":"ticket","args":[{"prim":"string"}]}]},{"prim":"SOURCE"},{"prim":"GET_AND_UPDATE"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"PUSH","args":[{"prim":"string"},{"string":"feedback"}]},{"prim":"VIEW","args":[{"string":"getView"},{"prim":"bytes"}]},{"prim":"SWAP"},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"6"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"User does not have tickets => not allowed"}]},{"prim":"FAILWITH"}],[{"prim":"DROP"},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"5"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Cannot find view feedback on given oracle address"}]},{"prim":"FAILWITH"}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"UNPACK","args":[{"prim":"string"}]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"option is None"}]},{"prim":"FAILWITH"}],[]]},{"prim":"PAIR"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SOURCE"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]}]]}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Init"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"CAR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"UNPACK","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Cannot find the address parameter for changeVersion"}]},{"prim":"FAILWITH"}],[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"2"}]}],[{"prim":"DUG","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"can_poke"}]},{"prim":"TICKET"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"}]]},{"prim":"PAIR"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"changeVersion"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"CAR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"UNPACK","args":[{"prim":"address"}]},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Cannot find the address parameter for changeVersion"}]},{"prim":"FAILWITH"}],[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SOME"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],[{"prim":"DROP","args":[{"int":"5"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Non-existant method"}]},{"prim":"FAILWITH"}]]}]]}]]}]]}]]}]]},{"prim":"view","args":[{"string":"getView"},{"prim":"string"},{"prim":"bytes"},[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"PUSH","args":[{"prim":"string"},{"string":"feedback"}]},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PACK"}],[{"prim":"SWAP"},{"prim":"DROP"},{"prim":"PUSH","args":[{"prim":"string"},{"string":" not found on this contract"}]},{"prim":"SWAP"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"View "}]},{"prim":"CONCAT"},{"prim":"CONCAT"},{"prim":"FAILWITH"}]]}]]}]`)
};
