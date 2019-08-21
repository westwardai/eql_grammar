grammar EQL;
import EQLTokens;

base_query:
		sequence
	|	event_query
	|	join
;

sequence:
;
event_query:
	event_type WHERE expression
;

join:
	JOIN 
;

event_type:
		PROCESS_CREATE
	|	FILE
	|	NETWORK
	|	SYSMON_SERVICE_STATE_CHANGED
	|	PROCESS
	|	DRIVER_LOAD
	|	MODULE_LOAD
	|	REMOTE_THREAD
	|	RAW_ACCESS_READ
	|	PROCESS_ACCESS
	|	REGISTRY
	|	PIPE
	|	WMI
	|	DOMAIN
;

expression:
		or_expr
	|	subexpression
;

and_expr:
		term (AND term)+
;

or_expr: 
	subexpression (OR subexpression)+
;
	
subexpression:
		and_expr
	|	term
;

term:
		not_term
	|	sub_term
;

not_term:
		NOT term
;

sub_term:
		comparison
	|	in_set
	|	value
;

comparison:
		value comparator value
;

comparator:
		LTE
	|	LT
	|	equals
	|	NOT_EQUALS
	|	GTE
	|	GT
;

equals:
		EQUALS
	|	DOUBLE_EQUALS
;

in_set:
		value IN set
;

set:
	LPAREN expression RPAREN
;

value:
		function_call
	|	named_subquery
	|	check_paren
;

function_call:
		ADD LPAREN INTEGER COMMA RPAREN
	|	ARRAY_CONTAINS LPAREN IDENT COMMA string RPAREN
	|	ARRAY_SEARCH LPAREN IDENT COMMA IDENT COMMA expression RPAREN
	|	CONCAT LPAREN (string | IDENT) (COMMA string | IDENT)* RPAREN
	|	DIVIDE LPAREN INTEGER COMMA INTEGER RPAREN
	|	ENDS_WITH LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	LENGTH LPAREN (string | IDENT) RPAREN
	|	MODULO LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	MULTIPLY LPAREN INTEGER COMMA INTEGER RPAREN
	|	NUMBER LPAREN string (COMMA INTEGER)* RPAREN
	|	STARTS_WITH LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	STRING LPAREN value RPAREN
	|	STRING_CONTAINS LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	SUBTRACT LPAREN (INTEGER | IDENT) COMMA (INTEGER | IDENT) RPAREN
	|	WILDCARD LPAREN IDENT COMMA STRING (COMMA string)* RPAREN
;

named_subquery:
		IDENT OF subquery
;

subquery:
		LB event_query RB
;

check_paren:
		LPAREN expression RPAREN
	|	atom
;

atom:
		literal
	|	bool
	|	field
;

field:
		IDENT sub_field?
;

bool:
		TRUE
	|	FALSE
;

sub_field:
		DOT IDENT
	|	LB unsigned_integer RB
;

literal:
		decimal
	|	integer
	|	string
	|	raw_string
;

decimal:
		DECIMAL
;

integer:
		INTEGER
;

unsigned_integer:
		UNSIGNED_INTEGER
;

string:
		SINGLE_Q_STRING
	|	DOUBLE_Q_STRING
;

raw_string:
		SINGLE_Q_RAW_STRING
	|	DOUBLE_Q_RAW_STRING
;
