lexer grammar EQLTokens;


WHERE: 'where';

// event types
PROCESS_CREATE: 'process_create';
FILE: 'file';
NETWORK: 'network';
SYSMON_SERVICE_STATE_CHANGED: 'sysmon_service_state_changed';
PROCESS: 'process';
DRIVER_LOAD: 'driver_load';
MODULE_LOAD: 'module_load';
REMOTE_THREAD: 'remote_thread';
RAW_ACCESS_READ: 'raw_access_read';
PROCESS_ACCESS: 'process_access';
REGISTRY: 'registry';
PIPE: 'pipe';
WMI: 'wmi';
DOMAIN: 'domain';


// EQL Functions
ADD: 'add';
ARRAY_CONTAINS: 'arrayContains';
ARRAY_SEARCH: 'arraySearch';
CONCAT: 'concat';
DIVIDE: 'divide';
ENDS_WITH: 'endsWith';
INDEX_OF: 'indexOf';
LENGTH: 'length';
MODULO: 'modulo';
MULTIPLY: 'multiply';
NUMBER: 'number';
STARTS_WITH: 'startsWith';
STRING: 'string';
STRING_CONTAINS: 'stringContains';
SUBSTRING: 'substring';
SUBTRACT: 'subtract';
WILDCARD: 'wildcard';

TRUE: 'true';
FALSE: 'false';

LPAREN: '(';
RPAREN: ')';
LTE: '<=';
LT: '<';
GTE: '>=';
GT: '>';
LB: '[';
RB: ']';

EQUALS: '=';
DOUBLE_EQUALS: '==';
NOT_EQUALS: '!=';
COMMA: ',';

SEQ: 'seq';
JOIN: 'join';

OR: 'or';
NOT: 'not';
AND: 'and';

IN: 'in';
OF: 'of';


IDENT: [a-zA-Z][a-zA-Z0-9_]*;


DECIMAL: [+-]?([0-9]+'.'[0-9]*|[0-9]*'.'[0-9]+)([Ee][-+]?[0-9]+)?;
UNSIGNED_INTEGER: [0-9]+;
INTEGER: [+-]?[0-9]+;

SINGLE_Q_STRING: '\'' ('\\'[btnfr"'\\]|~[\r\n"\\])* '\'';
DOUBLE_Q_STRING: '"' ('\\'[btnfr"'\\]|~[\r\n"\\])* '"';



SINGLE_Q_RAW_STRING: '?\'' ('\\'|~['])* '\'';
DOUBLE_Q_RAW_STRING: '?"' ('\\"'|~["])* '"';

DOT: '.';


NEWLINE: '\r'? '\n' -> skip;
WS: (' ' | '\t' | '\n' | '\r')+ -> channel(HIDDEN);