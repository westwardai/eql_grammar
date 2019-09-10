// Generated from Test.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007.\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0005\u0005\"\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0006\u0006)\n\u0006\r\u0006\u000e\u0006*\u0003\u0006",
    "\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\u0003\u0002\u0003\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002/\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002",
    "\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002",
    "\u0002\u0002\t!\u0003\u0002\u0002\u0002\u000b(\u0003\u0002\u0002\u0002",
    "\r\u000e\u0007r\u0002\u0002\u000e\u000f\u0007t\u0002\u0002\u000f\u0010",
    "\u0007q\u0002\u0002\u0010\u0011\u0007e\u0002\u0002\u0011\u0012\u0007",
    "g\u0002\u0002\u0012\u0013\u0007u\u0002\u0002\u0013\u0014\u0007u\u0002",
    "\u0002\u0014\u0004\u0003\u0002\u0002\u0002\u0015\u0016\u0007y\u0002",
    "\u0002\u0016\u0017\u0007j\u0002\u0002\u0017\u0018\u0007g\u0002\u0002",
    "\u0018\u0019\u0007t\u0002\u0002\u0019\u001a\u0007g\u0002\u0002\u001a",
    "\u0006\u0003\u0002\u0002\u0002\u001b\u001c\u0007v\u0002\u0002\u001c",
    "\u001d\u0007t\u0002\u0002\u001d\u001e\u0007w\u0002\u0002\u001e\u001f",
    "\u0007g\u0002\u0002\u001f\b\u0003\u0002\u0002\u0002 \"\u0007\u000f\u0002",
    "\u0002! \u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#$\u0007\f\u0002\u0002$%\u0003\u0002\u0002\u0002%",
    "&\b\u0005\u0002\u0002&\n\u0003\u0002\u0002\u0002\')\t\u0002\u0002\u0002",
    "(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\b",
    "\u0006\u0003\u0002-\f\u0003\u0002\u0002\u0002\u0005\u0002!*\u0004\b",
    "\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TestLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TestLexer.prototype = Object.create(antlr4.Lexer.prototype);
TestLexer.prototype.constructor = TestLexer;

Object.defineProperty(TestLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

TestLexer.EOF = antlr4.Token.EOF;
TestLexer.PROCESS = 1;
TestLexer.WHERE = 2;
TestLexer.TRUE = 3;
TestLexer.NEWLINE = 4;
TestLexer.WS = 5;

TestLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

TestLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

TestLexer.prototype.literalNames = [ null, "'process'", "'where'", "'true'" ];

TestLexer.prototype.symbolicNames = [ null, "PROCESS", "WHERE", "TRUE", 
                                      "NEWLINE", "WS" ];

TestLexer.prototype.ruleNames = [ "PROCESS", "WHERE", "TRUE", "NEWLINE", 
                                  "WS" ];

TestLexer.prototype.grammarFileName = "Test.g4";



exports.TestLexer = TestLexer;

