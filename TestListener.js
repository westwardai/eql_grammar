// Generated from Test.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TestParser.
function TestListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TestListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TestListener.prototype.constructor = TestListener;

// Enter a parse tree produced by TestParser#query.
TestListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by TestParser#query.
TestListener.prototype.exitQuery = function(ctx) {
};



exports.TestListener = TestListener;