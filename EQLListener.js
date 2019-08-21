// Generated from EQL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by EQLParser.
function EQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

EQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
EQLListener.prototype.constructor = EQLListener;

// Enter a parse tree produced by EQLParser#base_query.
EQLListener.prototype.enterBase_query = function(ctx) {
};

// Exit a parse tree produced by EQLParser#base_query.
EQLListener.prototype.exitBase_query = function(ctx) {
};


// Enter a parse tree produced by EQLParser#sequence.
EQLListener.prototype.enterSequence = function(ctx) {
};

// Exit a parse tree produced by EQLParser#sequence.
EQLListener.prototype.exitSequence = function(ctx) {
};


// Enter a parse tree produced by EQLParser#event_query.
EQLListener.prototype.enterEvent_query = function(ctx) {
};

// Exit a parse tree produced by EQLParser#event_query.
EQLListener.prototype.exitEvent_query = function(ctx) {
};


// Enter a parse tree produced by EQLParser#join.
EQLListener.prototype.enterJoin = function(ctx) {
};

// Exit a parse tree produced by EQLParser#join.
EQLListener.prototype.exitJoin = function(ctx) {
};


// Enter a parse tree produced by EQLParser#event_type.
EQLListener.prototype.enterEvent_type = function(ctx) {
};

// Exit a parse tree produced by EQLParser#event_type.
EQLListener.prototype.exitEvent_type = function(ctx) {
};


// Enter a parse tree produced by EQLParser#expression.
EQLListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by EQLParser#expression.
EQLListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by EQLParser#and_expr.
EQLListener.prototype.enterAnd_expr = function(ctx) {
};

// Exit a parse tree produced by EQLParser#and_expr.
EQLListener.prototype.exitAnd_expr = function(ctx) {
};


// Enter a parse tree produced by EQLParser#or_expr.
EQLListener.prototype.enterOr_expr = function(ctx) {
};

// Exit a parse tree produced by EQLParser#or_expr.
EQLListener.prototype.exitOr_expr = function(ctx) {
};


// Enter a parse tree produced by EQLParser#subexpression.
EQLListener.prototype.enterSubexpression = function(ctx) {
};

// Exit a parse tree produced by EQLParser#subexpression.
EQLListener.prototype.exitSubexpression = function(ctx) {
};


// Enter a parse tree produced by EQLParser#term.
EQLListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by EQLParser#term.
EQLListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by EQLParser#not_term.
EQLListener.prototype.enterNot_term = function(ctx) {
};

// Exit a parse tree produced by EQLParser#not_term.
EQLListener.prototype.exitNot_term = function(ctx) {
};


// Enter a parse tree produced by EQLParser#sub_term.
EQLListener.prototype.enterSub_term = function(ctx) {
};

// Exit a parse tree produced by EQLParser#sub_term.
EQLListener.prototype.exitSub_term = function(ctx) {
};


// Enter a parse tree produced by EQLParser#comparison.
EQLListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by EQLParser#comparison.
EQLListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by EQLParser#comparator.
EQLListener.prototype.enterComparator = function(ctx) {
};

// Exit a parse tree produced by EQLParser#comparator.
EQLListener.prototype.exitComparator = function(ctx) {
};


// Enter a parse tree produced by EQLParser#equals.
EQLListener.prototype.enterEquals = function(ctx) {
};

// Exit a parse tree produced by EQLParser#equals.
EQLListener.prototype.exitEquals = function(ctx) {
};


// Enter a parse tree produced by EQLParser#in_set.
EQLListener.prototype.enterIn_set = function(ctx) {
};

// Exit a parse tree produced by EQLParser#in_set.
EQLListener.prototype.exitIn_set = function(ctx) {
};


// Enter a parse tree produced by EQLParser#set.
EQLListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by EQLParser#set.
EQLListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by EQLParser#value.
EQLListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by EQLParser#value.
EQLListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by EQLParser#function_call.
EQLListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by EQLParser#function_call.
EQLListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by EQLParser#named_subquery.
EQLListener.prototype.enterNamed_subquery = function(ctx) {
};

// Exit a parse tree produced by EQLParser#named_subquery.
EQLListener.prototype.exitNamed_subquery = function(ctx) {
};


// Enter a parse tree produced by EQLParser#subquery.
EQLListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by EQLParser#subquery.
EQLListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by EQLParser#check_paren.
EQLListener.prototype.enterCheck_paren = function(ctx) {
};

// Exit a parse tree produced by EQLParser#check_paren.
EQLListener.prototype.exitCheck_paren = function(ctx) {
};


// Enter a parse tree produced by EQLParser#atom.
EQLListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by EQLParser#atom.
EQLListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by EQLParser#field.
EQLListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by EQLParser#field.
EQLListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by EQLParser#bool.
EQLListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by EQLParser#bool.
EQLListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by EQLParser#sub_field.
EQLListener.prototype.enterSub_field = function(ctx) {
};

// Exit a parse tree produced by EQLParser#sub_field.
EQLListener.prototype.exitSub_field = function(ctx) {
};


// Enter a parse tree produced by EQLParser#literal.
EQLListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by EQLParser#literal.
EQLListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by EQLParser#decimal.
EQLListener.prototype.enterDecimal = function(ctx) {
};

// Exit a parse tree produced by EQLParser#decimal.
EQLListener.prototype.exitDecimal = function(ctx) {
};


// Enter a parse tree produced by EQLParser#integer.
EQLListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by EQLParser#integer.
EQLListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by EQLParser#unsigned_integer.
EQLListener.prototype.enterUnsigned_integer = function(ctx) {
};

// Exit a parse tree produced by EQLParser#unsigned_integer.
EQLListener.prototype.exitUnsigned_integer = function(ctx) {
};


// Enter a parse tree produced by EQLParser#string.
EQLListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by EQLParser#string.
EQLListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by EQLParser#raw_string.
EQLListener.prototype.enterRaw_string = function(ctx) {
};

// Exit a parse tree produced by EQLParser#raw_string.
EQLListener.prototype.exitRaw_string = function(ctx) {
};



exports.EQLListener = EQLListener;