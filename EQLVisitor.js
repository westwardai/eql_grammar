// Generated from EQL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by EQLParser.

function EQLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

EQLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
EQLVisitor.prototype.constructor = EQLVisitor;

// Visit a parse tree produced by EQLParser#eql_query.
EQLVisitor.prototype.visitEql_query = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#pipe_command.
EQLVisitor.prototype.visitPipe_command = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#sequence.
EQLVisitor.prototype.visitSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#by_values.
EQLVisitor.prototype.visitBy_values = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#named_params.
EQLVisitor.prototype.visitNamed_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#named_param.
EQLVisitor.prototype.visitNamed_param = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#time_unit.
EQLVisitor.prototype.visitTime_unit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#expressions.
EQLVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#argument.
EQLVisitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#until_clause.
EQLVisitor.prototype.visitUntil_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#event_query.
EQLVisitor.prototype.visitEvent_query = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#subquery_by.
EQLVisitor.prototype.visitSubquery_by = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#subquery.
EQLVisitor.prototype.visitSubquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#join.
EQLVisitor.prototype.visitJoin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#where.
EQLVisitor.prototype.visitWhere = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#event_type.
EQLVisitor.prototype.visitEvent_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#expression.
EQLVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#and_expr.
EQLVisitor.prototype.visitAnd_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#or_expr.
EQLVisitor.prototype.visitOr_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#subexpression.
EQLVisitor.prototype.visitSubexpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#term.
EQLVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#not_term.
EQLVisitor.prototype.visitNot_term = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#sub_term.
EQLVisitor.prototype.visitSub_term = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#relationship.
EQLVisitor.prototype.visitRelationship = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#comparison.
EQLVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#comparator.
EQLVisitor.prototype.visitComparator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#equals.
EQLVisitor.prototype.visitEquals = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#in_set.
EQLVisitor.prototype.visitIn_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#set.
EQLVisitor.prototype.visitSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#value.
EQLVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#function_call.
EQLVisitor.prototype.visitFunction_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#named_subquery.
EQLVisitor.prototype.visitNamed_subquery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#check_paren.
EQLVisitor.prototype.visitCheck_paren = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#atom.
EQLVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#field.
EQLVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#bool.
EQLVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#sub_field.
EQLVisitor.prototype.visitSub_field = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#literal.
EQLVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#decimal.
EQLVisitor.prototype.visitDecimal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#integer.
EQLVisitor.prototype.visitInteger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#unsigned_integer.
EQLVisitor.prototype.visitUnsigned_integer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#string.
EQLVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by EQLParser#raw_string.
EQLVisitor.prototype.visitRaw_string = function(ctx) {
  return this.visitChildren(ctx);
};



exports.EQLVisitor = EQLVisitor;