// Generated from Test.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TestListener = require('./TestListener').TestListener;
var grammarFileName = "Test.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\t\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002",
    "\u0005\u0006\u0007\u0004\u0002\u0002\u0006\u0007\u0007\u0005\u0002\u0002",
    "\u0007\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'process'", "'where'", "'true'" ];

var symbolicNames = [ null, "PROCESS", "WHERE", "TRUE", "NEWLINE", "WS" ];

var ruleNames =  [ "query" ];

function TestParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TestParser.prototype = Object.create(antlr4.Parser.prototype);
TestParser.prototype.constructor = TestParser;

Object.defineProperty(TestParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TestParser.EOF = antlr4.Token.EOF;
TestParser.PROCESS = 1;
TestParser.WHERE = 2;
TestParser.TRUE = 3;
TestParser.NEWLINE = 4;
TestParser.WS = 5;

TestParser.RULE_query = 0;


function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TestParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.PROCESS = function() {
    return this.getToken(TestParser.PROCESS, 0);
};

QueryContext.prototype.WHERE = function() {
    return this.getToken(TestParser.WHERE, 0);
};

QueryContext.prototype.TRUE = function() {
    return this.getToken(TestParser.TRUE, 0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof TestListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof TestListener ) {
        listener.exitQuery(this);
	}
};




TestParser.QueryContext = QueryContext;

TestParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TestParser.RULE_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(TestParser.PROCESS);
        this.state = 3;
        this.match(TestParser.WHERE);
        this.state = 4;
        this.match(TestParser.TRUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TestParser = TestParser;
