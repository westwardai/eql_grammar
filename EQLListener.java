// Generated from EQL.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link EQLParser}.
 */
public interface EQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link EQLParser#base_query}.
	 * @param ctx the parse tree
	 */
	void enterBase_query(EQLParser.Base_queryContext ctx);
	/**
	 * Exit a parse tree produced by {@link EQLParser#base_query}.
	 * @param ctx the parse tree
	 */
	void exitBase_query(EQLParser.Base_queryContext ctx);
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