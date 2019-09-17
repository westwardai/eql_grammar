grammar EQL;
import EQLTokens;

eql_query:
		base_query (PIPE_SYMBOL pipe_command)*
;

pipe_command:
		pipe_name pipe_arguments?
;

pipe_arguments:
		expressions
	|	atom atom*
;

pipe_name:
		COUNT
	|	UNIQUE
	|	FILTER
	|	UNIQUE_COUNT
	|	HEAD
	|	TAIL
	|	SORT
;

base_query:
		sequence
	|	join
	|	event_query
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
		function_name LPAREN expressions* RPAREN
;

function_name:
		ADD
	|	ARRAY_CONTAINS
	|	ARRAY_SEARCH
	|	ARRAY_COUNT
	|	CONCAT
	|	DIVIDE
	|	ENDS_WITH
	|	LENGTH
	|	INDEX_OF
	|	MODULO
	|	MULTIPLY
	|	NUMBER
	|	STARTS_WITH
	|	STRING
	|	STRING_CONTAINS
	|	SUBSTRING
	|	SUBTRACT
	|	WILDCARD
;

named_subquery:
		CHILD OF subquery
	|	DESCENDANT OF subquery
	|	EVENT OF subquery
;

check_paren:
		LPAREN expression RPAREN
;

atom:
		literal
	|	bool
	|	field
;

field:
		field DOT IDENT
	|	field LB integer RB
	|	IDENT
;

bool:
		TRUE
	|	FALSE
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

string:
		SINGLE_Q_STRING
	|	DOUBLE_Q_STRING
;

raw_string:
		SINGLE_Q_RAW_STRING
	|	DOUBLE_Q_RAW_STRING
;
