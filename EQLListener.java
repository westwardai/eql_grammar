// Generated from EQL.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link EQLParser}.
 */
public interface EQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link EQLParser#eql_query}.
	 * @param ctx the parse tree
	 */
	void enterEql_query(EQLParser.Eql_queryContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#eql_query}.
	 * @param ctx the parse tree
	 */
	void exitEql_query(EQLParser.Eql_queryContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#pipe_command}.
	 * @param ctx the parse tree
	 */
	void enterPipe_command(EQLParser.Pipe_commandContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#pipe_command}.
	 * @param ctx the parse tree
	 */
	void exitPipe_command(EQLParser.Pipe_commandContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#sequence}.
	 * @param ctx the parse tree
	 */
	void enterSequence(EQLParser.SequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#sequence}.
	 * @param ctx the parse tree
	 */
	void exitSequence(EQLParser.SequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#by_values}.
	 * @param ctx the parse tree
	 */
	void enterBy_values(EQLParser.By_valuesContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#by_values}.
	 * @param ctx the parse tree
	 */
	void exitBy_values(EQLParser.By_valuesContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#named_params}.
	 * @param ctx the parse tree
	 */
	void enterNamed_params(EQLParser.Named_paramsContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#named_params}.
	 * @param ctx the parse tree
	 */
	void exitNamed_params(EQLParser.Named_paramsContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#named_param}.
	 * @param ctx the parse tree
	 */
	void enterNamed_param(EQLParser.Named_paramContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#named_param}.
	 * @param ctx the parse tree
	 */
	void exitNamed_param(EQLParser.Named_paramContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#time_unit}.
	 * @param ctx the parse tree
	 */
	void enterTime_unit(EQLParser.Time_unitContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#time_unit}.
	 * @param ctx the parse tree
	 */
	void exitTime_unit(EQLParser.Time_unitContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#expressions}.
	 * @param ctx the parse tree
	 */
	void enterExpressions(EQLParser.ExpressionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#expressions}.
	 * @param ctx the parse tree
	 */
	void exitExpressions(EQLParser.ExpressionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#argument}.
	 * @param ctx the parse tree
	 */
	void enterArgument(EQLParser.ArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#argument}.
	 * @param ctx the parse tree
	 */
	void exitArgument(EQLParser.ArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#until_clause}.
	 * @param ctx the parse tree
	 */
	void enterUntil_clause(EQLParser.Until_clauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#until_clause}.
	 * @param ctx the parse tree
	 */
	void exitUntil_clause(EQLParser.Until_clauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#event_query}.
	 * @param ctx the parse tree
	 */
	void enterEvent_query(EQLParser.Event_queryContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#event_query}.
	 * @param ctx the parse tree
	 */
	void exitEvent_query(EQLParser.Event_queryContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#subquery_by}.
	 * @param ctx the parse tree
	 */
	void enterSubquery_by(EQLParser.Subquery_byContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#subquery_by}.
	 * @param ctx the parse tree
	 */
	void exitSubquery_by(EQLParser.Subquery_byContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#subquery}.
	 * @param ctx the parse tree
	 */
	void enterSubquery(EQLParser.SubqueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#subquery}.
	 * @param ctx the parse tree
	 */
	void exitSubquery(EQLParser.SubqueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#join}.
	 * @param ctx the parse tree
	 */
	void enterJoin(EQLParser.JoinContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#join}.
	 * @param ctx the parse tree
	 */
	void exitJoin(EQLParser.JoinContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#where}.
	 * @param ctx the parse tree
	 */
	void enterWhere(EQLParser.WhereContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#where}.
	 * @param ctx the parse tree
	 */
	void exitWhere(EQLParser.WhereContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#event_type}.
	 * @param ctx the parse tree
	 */
	void enterEvent_type(EQLParser.Event_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#event_type}.
	 * @param ctx the parse tree
	 */
	void exitEvent_type(EQLParser.Event_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(EQLParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(EQLParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#and_expr}.
	 * @param ctx the parse tree
	 */
	void enterAnd_expr(EQLParser.And_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#and_expr}.
	 * @param ctx the parse tree
	 */
	void exitAnd_expr(EQLParser.And_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#or_expr}.
	 * @param ctx the parse tree
	 */
	void enterOr_expr(EQLParser.Or_exprContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#or_expr}.
	 * @param ctx the parse tree
	 */
	void exitOr_expr(EQLParser.Or_exprContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#subexpression}.
	 * @param ctx the parse tree
	 */
	void enterSubexpression(EQLParser.SubexpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#subexpression}.
	 * @param ctx the parse tree
	 */
	void exitSubexpression(EQLParser.SubexpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(EQLParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(EQLParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#not_term}.
	 * @param ctx the parse tree
	 */
	void enterNot_term(EQLParser.Not_termContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#not_term}.
	 * @param ctx the parse tree
	 */
	void exitNot_term(EQLParser.Not_termContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#sub_term}.
	 * @param ctx the parse tree
	 */
	void enterSub_term(EQLParser.Sub_termContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#sub_term}.
	 * @param ctx the parse tree
	 */
	void exitSub_term(EQLParser.Sub_termContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#comparison}.
	 * @param ctx the parse tree
	 */
	void enterComparison(EQLParser.ComparisonContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#comparison}.
	 * @param ctx the parse tree
	 */
	void exitComparison(EQLParser.ComparisonContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#comparator}.
	 * @param ctx the parse tree
	 */
	void enterComparator(EQLParser.ComparatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#comparator}.
	 * @param ctx the parse tree
	 */
	void exitComparator(EQLParser.ComparatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#equals}.
	 * @param ctx the parse tree
	 */
	void enterEquals(EQLParser.EqualsContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#equals}.
	 * @param ctx the parse tree
	 */
	void exitEquals(EQLParser.EqualsContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#in_set}.
	 * @param ctx the parse tree
	 */
	void enterIn_set(EQLParser.In_setContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#in_set}.
	 * @param ctx the parse tree
	 */
	void exitIn_set(EQLParser.In_setContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#set}.
	 * @param ctx the parse tree
	 */
	void enterSet(EQLParser.SetContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#set}.
	 * @param ctx the parse tree
	 */
	void exitSet(EQLParser.SetContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(EQLParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(EQLParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#function_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_call(EQLParser.Function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#function_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_call(EQLParser.Function_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#named_subquery}.
	 * @param ctx the parse tree
	 */
	void enterNamed_subquery(EQLParser.Named_subqueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#named_subquery}.
	 * @param ctx the parse tree
	 */
	void exitNamed_subquery(EQLParser.Named_subqueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#check_paren}.
	 * @param ctx the parse tree
	 */
	void enterCheck_paren(EQLParser.Check_parenContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#check_paren}.
	 * @param ctx the parse tree
	 */
	void exitCheck_paren(EQLParser.Check_parenContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterAtom(EQLParser.AtomContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitAtom(EQLParser.AtomContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(EQLParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(EQLParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#bool}.
	 * @param ctx the parse tree
	 */
	void enterBool(EQLParser.BoolContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#bool}.
	 * @param ctx the parse tree
	 */
	void exitBool(EQLParser.BoolContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#sub_field}.
	 * @param ctx the parse tree
	 */
	void enterSub_field(EQLParser.Sub_fieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#sub_field}.
	 * @param ctx the parse tree
	 */
	void exitSub_field(EQLParser.Sub_fieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(EQLParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(EQLParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#decimal}.
	 * @param ctx the parse tree
	 */
	void enterDecimal(EQLParser.DecimalContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#decimal}.
	 * @param ctx the parse tree
	 */
	void exitDecimal(EQLParser.DecimalContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#integer}.
	 * @param ctx the parse tree
	 */
	void enterInteger(EQLParser.IntegerContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#integer}.
	 * @param ctx the parse tree
	 */
	void exitInteger(EQLParser.IntegerContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#unsigned_integer}.
	 * @param ctx the parse tree
	 */
	void enterUnsigned_integer(EQLParser.Unsigned_integerContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#unsigned_integer}.
	 * @param ctx the parse tree
	 */
	void exitUnsigned_integer(EQLParser.Unsigned_integerContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(EQLParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(EQLParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link EQLParser#raw_string}.
	 * @param ctx the parse tree
	 */
	void enterRaw_string(EQLParser.Raw_stringContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#raw_string}.
	 * @param ctx the parse tree
	 */
	void exitRaw_string(EQLParser.Raw_stringContext ctx);
}