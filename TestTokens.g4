lexer grammar TestTokens;


PROCESS: 'process';
WHERE: 'where';
TRUE: 'true';

NEWLINE: '\r'? '\n' -> skip;
WS: (' ' | '\t' | '\n' | '\r')+ -> channel(HIDDEN);