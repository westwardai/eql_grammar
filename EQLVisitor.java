// Generated from EQL.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link EQLParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface EQLVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link EQLParser#eql_query}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEql_query(EQLParser.Eql_queryContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#pipe_command}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPipe_command(EQLParser.Pipe_commandContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#sequence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSequence(EQLParser.SequenceContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#by_values}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBy_values(EQLParser.By_valuesContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#named_params}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_params(EQLParser.Named_paramsContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#named_param}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_param(EQLParser.Named_paramContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#time_unit}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTime_unit(EQLParser.Time_unitContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#expressions}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressions(EQLParser.ExpressionsContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#argument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgument(EQLParser.ArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#until_clause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUntil_clause(EQLParser.Until_clauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#event_query}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEvent_query(EQLParser.Event_queryContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#subquery_by}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubquery_by(EQLParser.Subquery_byContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#subquery}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubquery(EQLParser.SubqueryContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#join}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJoin(EQLParser.JoinContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#where}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhere(EQLParser.WhereContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#event_type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEvent_type(EQLParser.Event_typeContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(EQLParser.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#and_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnd_expr(EQLParser.And_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#or_expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOr_expr(EQLParser.Or_exprContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#subexpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubexpression(EQLParser.SubexpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#term}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTerm(EQLParser.TermContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#not_term}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNot_term(EQLParser.Not_termContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#sub_term}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSub_term(EQLParser.Sub_termContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#relationship}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRelationship(EQLParser.RelationshipContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#comparison}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparison(EQLParser.ComparisonContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#comparator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparator(EQLParser.ComparatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#equals}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEquals(EQLParser.EqualsContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#in_set}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIn_set(EQLParser.In_setContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#set}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSet(EQLParser.SetContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#value}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValue(EQLParser.ValueContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#function_call}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunction_call(EQLParser.Function_callContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#named_subquery}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamed_subquery(EQLParser.Named_subqueryContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#check_paren}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCheck_paren(EQLParser.Check_parenContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#atom}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAtom(EQLParser.AtomContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#field}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitField(EQLParser.FieldContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#bool}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBool(EQLParser.BoolContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#sub_field}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSub_field(EQLParser.Sub_fieldContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(EQLParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#decimal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDecimal(EQLParser.DecimalContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#integer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInteger(EQLParser.IntegerContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#unsigned_integer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnsigned_integer(EQLParser.Unsigned_integerContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#string}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitString(EQLParser.StringContext ctx);
	/**
	 * Visit a parse tree produced by {@link EQLParser#raw_string}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRaw_string(EQLParser.Raw_stringContext ctx);
}