lexer grammar EQLTokens;

WHERE: 'where';
SEQUENCE: 'sequence';
UNTIL: 'until';

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
SECURITY: 'security';


// EQL Functions
ADD: 'add';
ARRAY_CONTAINS: 'arrayContains';
ARRAY_SEARCH: 'arraySearch';
ARRAY_COUNT: 'arrayCount';
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

// pipe commands
COUNT: 'count';
UNIQUE_COUNT: 'unique_count';
UNIQUE: 'unique';
FILTER: 'filter';
HEAD: 'head';
TAIL: 'tail';
SORT: 'sort';

CHILD: 'child';
DESCENDANT: 'descendant';
EVENT: 'event';

WITH: 'with';

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
PIPE_SYMBOL: '|';

EQUALS: '=';
DOUBLE_EQUALS: '==';
NOT_EQUALS: '!=';
COMMA: ',';

SEQ: 'seq';
JOIN: 'join';

OR: 'or';
NOT: 'not';
AND: 'and';

ANY: 'any';

IN: 'in';
OF: 'of';
BY: 'by';

INTEGER: ([+\-])?[0-9]+;
DECIMAL: ([+-])?([0-9]+'.'[0-9]*|[0-9]*'.'[0-9]+)([Ee][-+]?[0-9]+)?;
UNSIGNED_INTEGER: [0-9]+;

SINGLE_Q_STRING: '\'' ('\\'[btnfr"'\\]|~[\r\n"\\])* '\'';
DOUBLE_Q_STRING: '"' ('\\'[btnfr"'\\]|~[\r\n"\\])* '"';

SINGLE_Q_RAW_STRING: '?\'' ('\\'|~['])* '\'';
DOUBLE_Q_RAW_STRING: '?"' ('\\"'|~["])* '"';
IDENT: [a-zA-Z][a-zA-Z0-9_]*;
DOT: '.';


NEWLINE: '\r'? '\n' -> skip;
WS: (' ' | '\t' | '\n' | '\r')+ -> channel(HIDDEN);