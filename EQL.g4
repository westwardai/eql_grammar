grammar EQL;
import EQLTokens;

eql_query:
				(event_query (PIPE_SYMBOL pipe_command)*)
			|	join
			|	sequence
		
;

pipe_command:
		COUNT (expressions)?
	|	UNIQUE
	|	FILTER expressions
	|	UNIQUE_COUNT
	|	HEAD INTEGER
	|	TAIL INTEGER
	|	SORT expression
;

sequence:
	SEQUENCE 
		(by_values (WITH named_params)? | WITH named_params (by_values)?)?
		subquery_by (subquery_by)* 
		(until_clause)?
;

by_values:
		BY expressions
;

named_params:
		(named_param)+
;

named_param:
		IDENT (equals (time_unit | atom))?
;

time_unit:
		(decimal | integer) IDENT
;

expressions:
		argument (COMMA argument)* COMMA?
;

argument:
		expression
;

until_clause:
		UNTIL subquery_by
;

event_query:
		event_type where expression
;

subquery_by:
		subquery (named_params)? (by_values)?
;

subquery:
		LB event_query RB
;

join:
	JOIN (by_values)? subquery_by (subquery_by)* until_clause?
;

where:
	WHERE
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
	|	ANY
	|	SECURITY
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
	LPAREN expression (COMMA expression)* COMMA* RPAREN
;

value:
		function_call
	|	named_subquery
	|	check_paren
	|	atom
;

function_call:
		ADD LPAREN INTEGER COMMA RPAREN
	|	ARRAY_CONTAINS LPAREN IDENT COMMA string RPAREN
	|	ARRAY_SEARCH LPAREN IDENT COMMA IDENT COMMA expression RPAREN
	|	CONCAT LPAREN expression (COMMA expression)* COMMA? RPAREN
	|	DIVIDE LPAREN INTEGER COMMA INTEGER RPAREN
	|	ENDS_WITH LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	LENGTH LPAREN expression RPAREN
	|	MODULO LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	MULTIPLY LPAREN INTEGER COMMA INTEGER RPAREN
	|	NUMBER LPAREN string (COMMA INTEGER)* RPAREN
	|	STARTS_WITH LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	STRING LPAREN value RPAREN
	|	STRING_CONTAINS LPAREN (string | IDENT) COMMA (string | IDENT) RPAREN
	|	SUBSTRING LPAREN expression COMMA integer COMMA integer RPAREN
	|	SUBTRACT LPAREN (INTEGER | IDENT) COMMA (INTEGER | IDENT) RPAREN
	|	WILDCARD LPAREN IDENT COMMA STRING (COMMA string)* RPAREN
;

named_subquery:
		IDENT OF subquery
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
