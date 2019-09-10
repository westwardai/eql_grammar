// Generated from EQL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var EQLListener = require('./EQLListener').EQLListener;
var EQLVisitor = require('./EQLVisitor').EQLVisitor;

var grammarFileName = "EQL.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003P\u01de\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002Z\n\u0002\f\u0002\u000e\u0002",
    "]\u000b\u0002\u0003\u0002\u0003\u0002\u0005\u0002a\n\u0002\u0003\u0003",
    "\u0003\u0003\u0005\u0003e\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003q\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004w\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004|\n\u0004\u0005\u0004~\n\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004\u0082\n\u0004\f\u0004\u000e\u0004\u0085\u000b\u0004\u0003\u0004",
    "\u0005\u0004\u0088\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0006\u0006\u008e\n\u0006\r\u0006\u000e\u0006\u008f\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0096\n\u0007\u0005",
    "\u0007\u0098\n\u0007\u0003\b\u0003\b\u0005\b\u009c\n\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0007\t\u00a3\n\t\f\t\u000e\t\u00a6\u000b",
    "\t\u0003\t\u0005\t\u00a9\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r",
    "\u00b6\n\r\u0003\r\u0005\r\u00b9\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00c1\n\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u00c5\n\u000f\f\u000f\u000e\u000f\u00c8",
    "\u000b\u000f\u0003\u000f\u0005\u000f\u00cb\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005\u0012\u00d3",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u00d8\n\u0013",
    "\r\u0013\u000e\u0013\u00d9\u0003\u0014\u0003\u0014\u0003\u0014\u0006",
    "\u0014\u00df\n\u0014\r\u0014\u000e\u0014\u00e0\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u00e5\n\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00e9",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u00f1\n\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u00fd\n\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0007\u001d\u0109\n\u001d\f\u001d\u000e\u001d",
    "\u010c\u000b\u001d\u0003\u001d\u0007\u001d\u010f\n\u001d\f\u001d\u000e",
    "\u001d\u0112\u000b\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u011a\n\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0007\u001f\u0136\n\u001f\f\u001f\u000e\u001f\u0139\u000b\u001f",
    "\u0003\u001f\u0005\u001f\u013c\n\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u014a\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u014f\n\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u015b\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0160\n\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u016e\n\u001f\f\u001f\u000e\u001f\u0171\u000b\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f",
    "\u0179\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u017e",
    "\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f",
    "\u018a\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u018f",
    "\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u01a8\n\u001f\f\u001f\u000e\u001f\u01ab\u000b\u001f\u0003",
    "\u001f\u0005\u001f\u01ae\n\u001f\u0003 \u0003 \u0003 \u0003 \u0003!",
    "\u0003!\u0003!\u0003!\u0003!\u0005!\u01b9\n!\u0003\"\u0003\"\u0003\"",
    "\u0005\"\u01be\n\"\u0003#\u0003#\u0005#\u01c2\n#\u0003$\u0003$\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u01cc\n%\u0003&\u0003&\u0003",
    "&\u0003&\u0005&\u01d2\n&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003",
    ")\u0003*\u0003*\u0003+\u0003+\u0003+\u0002\u0002,\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDFHJLNPRT\u0002\b\u0004\u0002\u0006\u0014BB\u0003\u0002",
    "9:\u0004\u0002FFMM\u0003\u0002./\u0003\u0002IJ\u0003\u0002KL\u0002\u0202",
    "\u0002`\u0003\u0002\u0002\u0002\u0004p\u0003\u0002\u0002\u0002\u0006",
    "r\u0003\u0002\u0002\u0002\b\u0089\u0003\u0002\u0002\u0002\n\u008d\u0003",
    "\u0002\u0002\u0002\f\u0091\u0003\u0002\u0002\u0002\u000e\u009b\u0003",
    "\u0002\u0002\u0002\u0010\u009f\u0003\u0002\u0002\u0002\u0012\u00aa\u0003",
    "\u0002\u0002\u0002\u0014\u00ac\u0003\u0002\u0002\u0002\u0016\u00af\u0003",
    "\u0002\u0002\u0002\u0018\u00b3\u0003\u0002\u0002\u0002\u001a\u00ba\u0003",
    "\u0002\u0002\u0002\u001c\u00be\u0003\u0002\u0002\u0002\u001e\u00cc\u0003",
    "\u0002\u0002\u0002 \u00ce\u0003\u0002\u0002\u0002\"\u00d2\u0003\u0002",
    "\u0002\u0002$\u00d4\u0003\u0002\u0002\u0002&\u00db\u0003\u0002\u0002",
    "\u0002(\u00e4\u0003\u0002\u0002\u0002*\u00e8\u0003\u0002\u0002\u0002",
    ",\u00ea\u0003\u0002\u0002\u0002.\u00f0\u0003\u0002\u0002\u00020\u00f2",
    "\u0003\u0002\u0002\u00022\u00fc\u0003\u0002\u0002\u00024\u00fe\u0003",
    "\u0002\u0002\u00026\u0100\u0003\u0002\u0002\u00028\u0104\u0003\u0002",
    "\u0002\u0002:\u0119\u0003\u0002\u0002\u0002<\u01ad\u0003\u0002\u0002",
    "\u0002>\u01af\u0003\u0002\u0002\u0002@\u01b8\u0003\u0002\u0002\u0002",
    "B\u01bd\u0003\u0002\u0002\u0002D\u01bf\u0003\u0002\u0002\u0002F\u01c3",
    "\u0003\u0002\u0002\u0002H\u01cb\u0003\u0002\u0002\u0002J\u01d1\u0003",
    "\u0002\u0002\u0002L\u01d3\u0003\u0002\u0002\u0002N\u01d5\u0003\u0002",
    "\u0002\u0002P\u01d7\u0003\u0002\u0002\u0002R\u01d9\u0003\u0002\u0002",
    "\u0002T\u01db\u0003\u0002\u0002\u0002V[\u0005\u0016\f\u0002WX\u0007",
    "8\u0002\u0002XZ\u0005\u0004\u0003\u0002YW\u0003\u0002\u0002\u0002Z]",
    "\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002",
    "\u0002\\a\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^a\u0005",
    "\u001c\u000f\u0002_a\u0005\u0006\u0004\u0002`V\u0003\u0002\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002`_\u0003\u0002\u0002\u0002a\u0003\u0003\u0002",
    "\u0002\u0002bd\u0007&\u0002\u0002ce\u0005\u0010\t\u0002dc\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002eq\u0003\u0002\u0002\u0002fq\u0007",
    "(\u0002\u0002gh\u0007)\u0002\u0002hq\u0005\u0010\t\u0002iq\u0007\'\u0002",
    "\u0002jk\u0007*\u0002\u0002kq\u0007F\u0002\u0002lm\u0007+\u0002\u0002",
    "mq\u0007F\u0002\u0002no\u0007,\u0002\u0002oq\u0005\"\u0012\u0002pb\u0003",
    "\u0002\u0002\u0002pf\u0003\u0002\u0002\u0002pg\u0003\u0002\u0002\u0002",
    "pi\u0003\u0002\u0002\u0002pj\u0003\u0002\u0002\u0002pl\u0003\u0002\u0002",
    "\u0002pn\u0003\u0002\u0002\u0002q\u0005\u0003\u0002\u0002\u0002r}\u0007",
    "\u0004\u0002\u0002sv\u0005\b\u0005\u0002tu\u0007-\u0002\u0002uw\u0005",
    "\n\u0006\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w",
    "~\u0003\u0002\u0002\u0002xy\u0007-\u0002\u0002y{\u0005\n\u0006\u0002",
    "z|\u0005\b\u0005\u0002{z\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|~\u0003\u0002\u0002\u0002}s\u0003\u0002\u0002\u0002}x\u0003\u0002",
    "\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002",
    "\u007f\u0083\u0005\u0018\r\u0002\u0080\u0082\u0005\u0018\r\u0002\u0081",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083",
    "\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084",
    "\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086",
    "\u0088\u0005\u0014\u000b\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0003\u0002\u0002\u0002\u0088\u0007\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0007E\u0002\u0002\u008a\u008b\u0005\u0010\t\u0002\u008b\t\u0003",
    "\u0002\u0002\u0002\u008c\u008e\u0005\f\u0007\u0002\u008d\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u008d\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u000b\u0003",
    "\u0002\u0002\u0002\u0091\u0097\u0007M\u0002\u0002\u0092\u0095\u0005",
    "4\u001b\u0002\u0093\u0096\u0005\u000e\b\u0002\u0094\u0096\u0005B\"\u0002",
    "\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002",
    "\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0003\u0002\u0002\u0002\u0098\r\u0003\u0002\u0002\u0002",
    "\u0099\u009c\u0005L\'\u0002\u009a\u009c\u0005N(\u0002\u009b\u0099\u0003",
    "\u0002\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0007M\u0002\u0002\u009e\u000f\u0003",
    "\u0002\u0002\u0002\u009f\u00a4\u0005\u0012\n\u0002\u00a0\u00a1\u0007",
    "<\u0002\u0002\u00a1\u00a3\u0005\u0012\n\u0002\u00a2\u00a0\u0003\u0002",
    "\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002",
    "\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007<",
    "\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002",
    "\u0002\u0002\u00a9\u0011\u0003\u0002\u0002\u0002\u00aa\u00ab\u0005\"",
    "\u0012\u0002\u00ab\u0013\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u0005",
    "\u0002\u0002\u00ad\u00ae\u0005\u0018\r\u0002\u00ae\u0015\u0003\u0002",
    "\u0002\u0002\u00af\u00b0\u0005 \u0011\u0002\u00b0\u00b1\u0005\u001e",
    "\u0010\u0002\u00b1\u00b2\u0005\"\u0012\u0002\u00b2\u0017\u0003\u0002",
    "\u0002\u0002\u00b3\u00b5\u0005\u001a\u000e\u0002\u00b4\u00b6\u0005\n",
    "\u0006\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002",
    "\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002\u00b7\u00b9\u0005\b",
    "\u0005\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002",
    "\u0002\u0002\u00b9\u0019\u0003\u0002\u0002\u0002\u00ba\u00bb\u00076",
    "\u0002\u0002\u00bb\u00bc\u0005\u0016\f\u0002\u00bc\u00bd\u00077\u0002",
    "\u0002\u00bd\u001b\u0003\u0002\u0002\u0002\u00be\u00c0\u0007>\u0002",
    "\u0002\u00bf\u00c1\u0005\b\u0005\u0002\u00c0\u00bf\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002",
    "\u0002\u00c2\u00c6\u0005\u0018\r\u0002\u00c3\u00c5\u0005\u0018\r\u0002",
    "\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002",
    "\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002",
    "\u00c7\u00ca\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002",
    "\u00c9\u00cb\u0005\u0014\u000b\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002",
    "\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u001d\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0007\u0003\u0002\u0002\u00cd\u001f\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\t\u0002\u0002\u0002\u00cf!\u0003\u0002\u0002\u0002\u00d0",
    "\u00d3\u0005&\u0014\u0002\u00d1\u00d3\u0005(\u0015\u0002\u00d2\u00d0",
    "\u0003\u0002\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d3#",
    "\u0003\u0002\u0002\u0002\u00d4\u00d7\u0005*\u0016\u0002\u00d5\u00d6",
    "\u0007A\u0002\u0002\u00d6\u00d8\u0005*\u0016\u0002\u00d7\u00d5\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da%\u0003",
    "\u0002\u0002\u0002\u00db\u00de\u0005(\u0015\u0002\u00dc\u00dd\u0007",
    "?\u0002\u0002\u00dd\u00df\u0005(\u0015\u0002\u00de\u00dc\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00de\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\'\u0003\u0002",
    "\u0002\u0002\u00e2\u00e5\u0005$\u0013\u0002\u00e3\u00e5\u0005*\u0016",
    "\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e3\u0003\u0002\u0002",
    "\u0002\u00e5)\u0003\u0002\u0002\u0002\u00e6\u00e9\u0005,\u0017\u0002",
    "\u00e7\u00e9\u0005.\u0018\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002",
    "\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9+\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0007@\u0002\u0002\u00eb\u00ec\u0005*\u0016\u0002\u00ec",
    "-\u0003\u0002\u0002\u0002\u00ed\u00f1\u00050\u0019\u0002\u00ee\u00f1",
    "\u00056\u001c\u0002\u00ef\u00f1\u0005:\u001e\u0002\u00f0\u00ed\u0003",
    "\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00ef\u0003",
    "\u0002\u0002\u0002\u00f1/\u0003\u0002\u0002\u0002\u00f2\u00f3\u0005",
    ":\u001e\u0002\u00f3\u00f4\u00052\u001a\u0002\u00f4\u00f5\u0005:\u001e",
    "\u0002\u00f51\u0003\u0002\u0002\u0002\u00f6\u00fd\u00072\u0002\u0002",
    "\u00f7\u00fd\u00073\u0002\u0002\u00f8\u00fd\u00054\u001b\u0002\u00f9",
    "\u00fd\u0007;\u0002\u0002\u00fa\u00fd\u00074\u0002\u0002\u00fb\u00fd",
    "\u00075\u0002\u0002\u00fc\u00f6\u0003\u0002\u0002\u0002\u00fc\u00f7",
    "\u0003\u0002\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002\u00fc\u00f9",
    "\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fb",
    "\u0003\u0002\u0002\u0002\u00fd3\u0003\u0002\u0002\u0002\u00fe\u00ff",
    "\t\u0003\u0002\u0002\u00ff5\u0003\u0002\u0002\u0002\u0100\u0101\u0005",
    ":\u001e\u0002\u0101\u0102\u0007C\u0002\u0002\u0102\u0103\u00058\u001d",
    "\u0002\u01037\u0003\u0002\u0002\u0002\u0104\u0105\u00070\u0002\u0002",
    "\u0105\u010a\u0005\"\u0012\u0002\u0106\u0107\u0007<\u0002\u0002\u0107",
    "\u0109\u0005\"\u0012\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109",
    "\u010c\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a",
    "\u010b\u0003\u0002\u0002\u0002\u010b\u0110\u0003\u0002\u0002\u0002\u010c",
    "\u010a\u0003\u0002\u0002\u0002\u010d\u010f\u0007<\u0002\u0002\u010e",
    "\u010d\u0003\u0002\u0002\u0002\u010f\u0112\u0003\u0002\u0002\u0002\u0110",
    "\u010e\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111",
    "\u0113\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u00071\u0002\u0002\u01149\u0003\u0002\u0002\u0002\u0115\u011a",
    "\u0005<\u001f\u0002\u0116\u011a\u0005> \u0002\u0117\u011a\u0005@!\u0002",
    "\u0118\u011a\u0005B\"\u0002\u0119\u0115\u0003\u0002\u0002\u0002\u0119",
    "\u0116\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119",
    "\u0118\u0003\u0002\u0002\u0002\u011a;\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0007\u0015\u0002\u0002\u011c\u011d\u00070\u0002\u0002\u011d",
    "\u011e\u0007F\u0002\u0002\u011e\u011f\u0007<\u0002\u0002\u011f\u01ae",
    "\u00071\u0002\u0002\u0120\u0121\u0007\u0016\u0002\u0002\u0121\u0122",
    "\u00070\u0002\u0002\u0122\u0123\u0007M\u0002\u0002\u0123\u0124\u0007",
    "<\u0002\u0002\u0124\u0125\u0005R*\u0002\u0125\u0126\u00071\u0002\u0002",
    "\u0126\u01ae\u0003\u0002\u0002\u0002\u0127\u0128\u0007\u0017\u0002\u0002",
    "\u0128\u0129\u00070\u0002\u0002\u0129\u012a\u0007M\u0002\u0002\u012a",
    "\u012b\u0007<\u0002\u0002\u012b\u012c\u0007M\u0002\u0002\u012c\u012d",
    "\u0007<\u0002\u0002\u012d\u012e\u0005\"\u0012\u0002\u012e\u012f\u0007",
    "1\u0002\u0002\u012f\u01ae\u0003\u0002\u0002\u0002\u0130\u0131\u0007",
    "\u0018\u0002\u0002\u0131\u0132\u00070\u0002\u0002\u0132\u0137\u0005",
    "\"\u0012\u0002\u0133\u0134\u0007<\u0002\u0002\u0134\u0136\u0005\"\u0012",
    "\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0136\u0139\u0003\u0002\u0002",
    "\u0002\u0137\u0135\u0003\u0002\u0002\u0002\u0137\u0138\u0003\u0002\u0002",
    "\u0002\u0138\u013b\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002",
    "\u0002\u013a\u013c\u0007<\u0002\u0002\u013b\u013a\u0003\u0002\u0002",
    "\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002",
    "\u0002\u013d\u013e\u00071\u0002\u0002\u013e\u01ae\u0003\u0002\u0002",
    "\u0002\u013f\u0140\u0007\u0019\u0002\u0002\u0140\u0141\u00070\u0002",
    "\u0002\u0141\u0142\u0007F\u0002\u0002\u0142\u0143\u0007<\u0002\u0002",
    "\u0143\u0144\u0007F\u0002\u0002\u0144\u01ae\u00071\u0002\u0002\u0145",
    "\u0146\u0007\u001a\u0002\u0002\u0146\u0149\u00070\u0002\u0002\u0147",
    "\u014a\u0005R*\u0002\u0148\u014a\u0007M\u0002\u0002\u0149\u0147\u0003",
    "\u0002\u0002\u0002\u0149\u0148\u0003\u0002\u0002\u0002\u014a\u014b\u0003",
    "\u0002\u0002\u0002\u014b\u014e\u0007<\u0002\u0002\u014c\u014f\u0005",
    "R*\u0002\u014d\u014f\u0007M\u0002\u0002\u014e\u014c\u0003\u0002\u0002",
    "\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002",
    "\u0002\u0150\u01ae\u00071\u0002\u0002\u0151\u0152\u0007\u001c\u0002",
    "\u0002\u0152\u0153\u00070\u0002\u0002\u0153\u0154\u0005\"\u0012\u0002",
    "\u0154\u0155\u00071\u0002\u0002\u0155\u01ae\u0003\u0002\u0002\u0002",
    "\u0156\u0157\u0007\u001d\u0002\u0002\u0157\u015a\u00070\u0002\u0002",
    "\u0158\u015b\u0005R*\u0002\u0159\u015b\u0007M\u0002\u0002\u015a\u0158",
    "\u0003\u0002\u0002\u0002\u015a\u0159\u0003\u0002\u0002\u0002\u015b\u015c",
    "\u0003\u0002\u0002\u0002\u015c\u015f\u0007<\u0002\u0002\u015d\u0160",
    "\u0005R*\u0002\u015e\u0160\u0007M\u0002\u0002\u015f\u015d\u0003\u0002",
    "\u0002\u0002\u015f\u015e\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002",
    "\u0002\u0002\u0161\u01ae\u00071\u0002\u0002\u0162\u0163\u0007\u001e",
    "\u0002\u0002\u0163\u0164\u00070\u0002\u0002\u0164\u0165\u0007F\u0002",
    "\u0002\u0165\u0166\u0007<\u0002\u0002\u0166\u0167\u0007F\u0002\u0002",
    "\u0167\u01ae\u00071\u0002\u0002\u0168\u0169\u0007\u001f\u0002\u0002",
    "\u0169\u016a\u00070\u0002\u0002\u016a\u016f\u0005R*\u0002\u016b\u016c",
    "\u0007<\u0002\u0002\u016c\u016e\u0007F\u0002\u0002\u016d\u016b\u0003",
    "\u0002\u0002\u0002\u016e\u0171\u0003\u0002\u0002\u0002\u016f\u016d\u0003",
    "\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170\u0172\u0003",
    "\u0002\u0002\u0002\u0171\u016f\u0003\u0002\u0002\u0002\u0172\u0173\u0007",
    "1\u0002\u0002\u0173\u01ae\u0003\u0002\u0002\u0002\u0174\u0175\u0007",
    " \u0002\u0002\u0175\u0178\u00070\u0002\u0002\u0176\u0179\u0005R*\u0002",
    "\u0177\u0179\u0007M\u0002\u0002\u0178\u0176\u0003\u0002\u0002\u0002",
    "\u0178\u0177\u0003\u0002\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002",
    "\u017a\u017d\u0007<\u0002\u0002\u017b\u017e\u0005R*\u0002\u017c\u017e",
    "\u0007M\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017c",
    "\u0003\u0002\u0002\u0002\u017e\u017f\u0003\u0002\u0002\u0002\u017f\u01ae",
    "\u00071\u0002\u0002\u0180\u0181\u0007!\u0002\u0002\u0181\u0182\u0007",
    "0\u0002\u0002\u0182\u0183\u0005:\u001e\u0002\u0183\u0184\u00071\u0002",
    "\u0002\u0184\u01ae\u0003\u0002\u0002\u0002\u0185\u0186\u0007\"\u0002",
    "\u0002\u0186\u0189\u00070\u0002\u0002\u0187\u018a\u0005R*\u0002\u0188",
    "\u018a\u0007M\u0002\u0002\u0189\u0187\u0003\u0002\u0002\u0002\u0189",
    "\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b",
    "\u018e\u0007<\u0002\u0002\u018c\u018f\u0005R*\u0002\u018d\u018f\u0007",
    "M\u0002\u0002\u018e\u018c\u0003\u0002\u0002\u0002\u018e\u018d\u0003",
    "\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190\u01ae\u0007",
    "1\u0002\u0002\u0191\u0192\u0007#\u0002\u0002\u0192\u0193\u00070\u0002",
    "\u0002\u0193\u0194\u0005\"\u0012\u0002\u0194\u0195\u0007<\u0002\u0002",
    "\u0195\u0196\u0005N(\u0002\u0196\u0197\u0007<\u0002\u0002\u0197\u0198",
    "\u0005N(\u0002\u0198\u0199\u00071\u0002\u0002\u0199\u01ae\u0003\u0002",
    "\u0002\u0002\u019a\u019b\u0007$\u0002\u0002\u019b\u019c\u00070\u0002",
    "\u0002\u019c\u019d\t\u0004\u0002\u0002\u019d\u019e\u0007<\u0002\u0002",
    "\u019e\u019f\t\u0004\u0002\u0002\u019f\u01ae\u00071\u0002\u0002\u01a0",
    "\u01a1\u0007%\u0002\u0002\u01a1\u01a2\u00070\u0002\u0002\u01a2\u01a3",
    "\u0007M\u0002\u0002\u01a3\u01a4\u0007<\u0002\u0002\u01a4\u01a9\u0007",
    "!\u0002\u0002\u01a5\u01a6\u0007<\u0002\u0002\u01a6\u01a8\u0005R*\u0002",
    "\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002",
    "\u01a9\u01a7\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002",
    "\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002",
    "\u01ac\u01ae\u00071\u0002\u0002\u01ad\u011b\u0003\u0002\u0002\u0002",
    "\u01ad\u0120\u0003\u0002\u0002\u0002\u01ad\u0127\u0003\u0002\u0002\u0002",
    "\u01ad\u0130\u0003\u0002\u0002\u0002\u01ad\u013f\u0003\u0002\u0002\u0002",
    "\u01ad\u0145\u0003\u0002\u0002\u0002\u01ad\u0151\u0003\u0002\u0002\u0002",
    "\u01ad\u0156\u0003\u0002\u0002\u0002\u01ad\u0162\u0003\u0002\u0002\u0002",
    "\u01ad\u0168\u0003\u0002\u0002\u0002\u01ad\u0174\u0003\u0002\u0002\u0002",
    "\u01ad\u0180\u0003\u0002\u0002\u0002\u01ad\u0185\u0003\u0002\u0002\u0002",
    "\u01ad\u0191\u0003\u0002\u0002\u0002\u01ad\u019a\u0003\u0002\u0002\u0002",
    "\u01ad\u01a0\u0003\u0002\u0002\u0002\u01ae=\u0003\u0002\u0002\u0002",
    "\u01af\u01b0\u0007M\u0002\u0002\u01b0\u01b1\u0007D\u0002\u0002\u01b1",
    "\u01b2\u0005\u001a\u000e\u0002\u01b2?\u0003\u0002\u0002\u0002\u01b3",
    "\u01b4\u00070\u0002\u0002\u01b4\u01b5\u0005\"\u0012\u0002\u01b5\u01b6",
    "\u00071\u0002\u0002\u01b6\u01b9\u0003\u0002\u0002\u0002\u01b7\u01b9",
    "\u0005B\"\u0002\u01b8\u01b3\u0003\u0002\u0002\u0002\u01b8\u01b7\u0003",
    "\u0002\u0002\u0002\u01b9A\u0003\u0002\u0002\u0002\u01ba\u01be\u0005",
    "J&\u0002\u01bb\u01be\u0005F$\u0002\u01bc\u01be\u0005D#\u0002\u01bd\u01ba",
    "\u0003\u0002\u0002\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002\u01bd\u01bc",
    "\u0003\u0002\u0002\u0002\u01beC\u0003\u0002\u0002\u0002\u01bf\u01c1",
    "\u0007M\u0002\u0002\u01c0\u01c2\u0005H%\u0002\u01c1\u01c0\u0003\u0002",
    "\u0002\u0002\u01c1\u01c2\u0003\u0002\u0002\u0002\u01c2E\u0003\u0002",
    "\u0002\u0002\u01c3\u01c4\t\u0005\u0002\u0002\u01c4G\u0003\u0002\u0002",
    "\u0002\u01c5\u01c6\u0007N\u0002\u0002\u01c6\u01cc\u0007M\u0002\u0002",
    "\u01c7\u01c8\u00076\u0002\u0002\u01c8\u01c9\u0005P)\u0002\u01c9\u01ca",
    "\u00077\u0002\u0002\u01ca\u01cc\u0003\u0002\u0002\u0002\u01cb\u01c5",
    "\u0003\u0002\u0002\u0002\u01cb\u01c7\u0003\u0002\u0002\u0002\u01ccI",
    "\u0003\u0002\u0002\u0002\u01cd\u01d2\u0005L\'\u0002\u01ce\u01d2\u0005",
    "N(\u0002\u01cf\u01d2\u0005R*\u0002\u01d0\u01d2\u0005T+\u0002\u01d1\u01cd",
    "\u0003\u0002\u0002\u0002\u01d1\u01ce\u0003\u0002\u0002\u0002\u01d1\u01cf",
    "\u0003\u0002\u0002\u0002\u01d1\u01d0\u0003\u0002\u0002\u0002\u01d2K",
    "\u0003\u0002\u0002\u0002\u01d3\u01d4\u0007G\u0002\u0002\u01d4M\u0003",
    "\u0002\u0002\u0002\u01d5\u01d6\u0007F\u0002\u0002\u01d6O\u0003\u0002",
    "\u0002\u0002\u01d7\u01d8\u0007H\u0002\u0002\u01d8Q\u0003\u0002\u0002",
    "\u0002\u01d9\u01da\t\u0006\u0002\u0002\u01daS\u0003\u0002\u0002\u0002",
    "\u01db\u01dc\t\u0007\u0002\u0002\u01dcU\u0003\u0002\u0002\u00022[`d",
    "pv{}\u0083\u0087\u008f\u0095\u0097\u009b\u00a4\u00a8\u00b5\u00b8\u00c0",
    "\u00c6\u00ca\u00d2\u00d9\u00e0\u00e4\u00e8\u00f0\u00fc\u010a\u0110\u0119",
    "\u0137\u013b\u0149\u014e\u015a\u015f\u016f\u0178\u017d\u0189\u018e\u01a9",
    "\u01ad\u01b8\u01bd\u01c1\u01cb\u01d1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'where'", "'sequence'", "'until'", "'process_create'", 
                     "'file'", "'network'", "'sysmon_service_state_changed'", 
                     "'process'", "'driver_load'", "'module_load'", "'remote_thread'", 
                     "'raw_access_read'", "'process_access'", "'registry'", 
                     "'pipe'", "'wmi'", "'domain'", "'security'", "'add'", 
                     "'arrayContains'", "'arraySearch'", "'concat'", "'divide'", 
                     "'endsWith'", "'indexOf'", "'length'", "'modulo'", 
                     "'multiply'", "'number'", "'startsWith'", "'string'", 
                     "'stringContains'", "'substring'", "'subtract'", "'wildcard'", 
                     "'count'", "'unique_count'", "'unique'", "'filter'", 
                     "'head'", "'tail'", "'sort'", "'with'", "'true'", "'false'", 
                     "'('", "')'", "'<='", "'<'", "'>='", "'>'", "'['", 
                     "']'", "'|'", "'='", "'=='", "'!='", "','", "'seq'", 
                     "'join'", "'or'", "'not'", "'and'", "'any'", "'in'", 
                     "'of'", "'by'", null, null, null, null, null, null, 
                     null, null, "'.'" ];

var symbolicNames = [ null, "WHERE", "SEQUENCE", "UNTIL", "PROCESS_CREATE", 
                      "FILE", "NETWORK", "SYSMON_SERVICE_STATE_CHANGED", 
                      "PROCESS", "DRIVER_LOAD", "MODULE_LOAD", "REMOTE_THREAD", 
                      "RAW_ACCESS_READ", "PROCESS_ACCESS", "REGISTRY", "PIPE", 
                      "WMI", "DOMAIN", "SECURITY", "ADD", "ARRAY_CONTAINS", 
                      "ARRAY_SEARCH", "CONCAT", "DIVIDE", "ENDS_WITH", "INDEX_OF", 
                      "LENGTH", "MODULO", "MULTIPLY", "NUMBER", "STARTS_WITH", 
                      "STRING", "STRING_CONTAINS", "SUBSTRING", "SUBTRACT", 
                      "WILDCARD", "COUNT", "UNIQUE_COUNT", "UNIQUE", "FILTER", 
                      "HEAD", "TAIL", "SORT", "WITH", "TRUE", "FALSE", "LPAREN", 
                      "RPAREN", "LTE", "LT", "GTE", "GT", "LB", "RB", "PIPE_SYMBOL", 
                      "EQUALS", "DOUBLE_EQUALS", "NOT_EQUALS", "COMMA", 
                      "SEQ", "JOIN", "OR", "NOT", "AND", "ANY", "IN", "OF", 
                      "BY", "INTEGER", "DECIMAL", "UNSIGNED_INTEGER", "SINGLE_Q_STRING", 
                      "DOUBLE_Q_STRING", "SINGLE_Q_RAW_STRING", "DOUBLE_Q_RAW_STRING", 
                      "IDENT", "DOT", "NEWLINE", "WS" ];

var ruleNames =  [ "eql_query", "pipe_command", "sequence", "by_values", 
                   "named_params", "named_param", "time_unit", "expressions", 
                   "argument", "until_clause", "event_query", "subquery_by", 
                   "subquery", "join", "where", "event_type", "expression", 
                   "and_expr", "or_expr", "subexpression", "term", "not_term", 
                   "sub_term", "comparison", "comparator", "equals", "in_set", 
                   "set", "value", "function_call", "named_subquery", "check_paren", 
                   "atom", "field", "bool", "sub_field", "literal", "decimal", 
                   "integer", "unsigned_integer", "string", "raw_string" ];

function EQLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

EQLParser.prototype = Object.create(antlr4.Parser.prototype);
EQLParser.prototype.constructor = EQLParser;

Object.defineProperty(EQLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

EQLParser.EOF = antlr4.Token.EOF;
EQLParser.WHERE = 1;
EQLParser.SEQUENCE = 2;
EQLParser.UNTIL = 3;
EQLParser.PROCESS_CREATE = 4;
EQLParser.FILE = 5;
EQLParser.NETWORK = 6;
EQLParser.SYSMON_SERVICE_STATE_CHANGED = 7;
EQLParser.PROCESS = 8;
EQLParser.DRIVER_LOAD = 9;
EQLParser.MODULE_LOAD = 10;
EQLParser.REMOTE_THREAD = 11;
EQLParser.RAW_ACCESS_READ = 12;
EQLParser.PROCESS_ACCESS = 13;
EQLParser.REGISTRY = 14;
EQLParser.PIPE = 15;
EQLParser.WMI = 16;
EQLParser.DOMAIN = 17;
EQLParser.SECURITY = 18;
EQLParser.ADD = 19;
EQLParser.ARRAY_CONTAINS = 20;
EQLParser.ARRAY_SEARCH = 21;
EQLParser.CONCAT = 22;
EQLParser.DIVIDE = 23;
EQLParser.ENDS_WITH = 24;
EQLParser.INDEX_OF = 25;
EQLParser.LENGTH = 26;
EQLParser.MODULO = 27;
EQLParser.MULTIPLY = 28;
EQLParser.NUMBER = 29;
EQLParser.STARTS_WITH = 30;
EQLParser.STRING = 31;
EQLParser.STRING_CONTAINS = 32;
EQLParser.SUBSTRING = 33;
EQLParser.SUBTRACT = 34;
EQLParser.WILDCARD = 35;
EQLParser.COUNT = 36;
EQLParser.UNIQUE_COUNT = 37;
EQLParser.UNIQUE = 38;
EQLParser.FILTER = 39;
EQLParser.HEAD = 40;
EQLParser.TAIL = 41;
EQLParser.SORT = 42;
EQLParser.WITH = 43;
EQLParser.TRUE = 44;
EQLParser.FALSE = 45;
EQLParser.LPAREN = 46;
EQLParser.RPAREN = 47;
EQLParser.LTE = 48;
EQLParser.LT = 49;
EQLParser.GTE = 50;
EQLParser.GT = 51;
EQLParser.LB = 52;
EQLParser.RB = 53;
EQLParser.PIPE_SYMBOL = 54;
EQLParser.EQUALS = 55;
EQLParser.DOUBLE_EQUALS = 56;
EQLParser.NOT_EQUALS = 57;
EQLParser.COMMA = 58;
EQLParser.SEQ = 59;
EQLParser.JOIN = 60;
EQLParser.OR = 61;
EQLParser.NOT = 62;
EQLParser.AND = 63;
EQLParser.ANY = 64;
EQLParser.IN = 65;
EQLParser.OF = 66;
EQLParser.BY = 67;
EQLParser.INTEGER = 68;
EQLParser.DECIMAL = 69;
EQLParser.UNSIGNED_INTEGER = 70;
EQLParser.SINGLE_Q_STRING = 71;
EQLParser.DOUBLE_Q_STRING = 72;
EQLParser.SINGLE_Q_RAW_STRING = 73;
EQLParser.DOUBLE_Q_RAW_STRING = 74;
EQLParser.IDENT = 75;
EQLParser.DOT = 76;
EQLParser.NEWLINE = 77;
EQLParser.WS = 78;

EQLParser.RULE_eql_query = 0;
EQLParser.RULE_pipe_command = 1;
EQLParser.RULE_sequence = 2;
EQLParser.RULE_by_values = 3;
EQLParser.RULE_named_params = 4;
EQLParser.RULE_named_param = 5;
EQLParser.RULE_time_unit = 6;
EQLParser.RULE_expressions = 7;
EQLParser.RULE_argument = 8;
EQLParser.RULE_until_clause = 9;
EQLParser.RULE_event_query = 10;
EQLParser.RULE_subquery_by = 11;
EQLParser.RULE_subquery = 12;
EQLParser.RULE_join = 13;
EQLParser.RULE_where = 14;
EQLParser.RULE_event_type = 15;
EQLParser.RULE_expression = 16;
EQLParser.RULE_and_expr = 17;
EQLParser.RULE_or_expr = 18;
EQLParser.RULE_subexpression = 19;
EQLParser.RULE_term = 20;
EQLParser.RULE_not_term = 21;
EQLParser.RULE_sub_term = 22;
EQLParser.RULE_comparison = 23;
EQLParser.RULE_comparator = 24;
EQLParser.RULE_equals = 25;
EQLParser.RULE_in_set = 26;
EQLParser.RULE_set = 27;
EQLParser.RULE_value = 28;
EQLParser.RULE_function_call = 29;
EQLParser.RULE_named_subquery = 30;
EQLParser.RULE_check_paren = 31;
EQLParser.RULE_atom = 32;
EQLParser.RULE_field = 33;
EQLParser.RULE_bool = 34;
EQLParser.RULE_sub_field = 35;
EQLParser.RULE_literal = 36;
EQLParser.RULE_decimal = 37;
EQLParser.RULE_integer = 38;
EQLParser.RULE_unsigned_integer = 39;
EQLParser.RULE_string = 40;
EQLParser.RULE_raw_string = 41;


function Eql_queryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_eql_query;
    return this;
}

Eql_queryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Eql_queryContext.prototype.constructor = Eql_queryContext;

Eql_queryContext.prototype.event_query = function() {
    return this.getTypedRuleContext(Event_queryContext,0);
};

Eql_queryContext.prototype.PIPE_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.PIPE_SYMBOL);
    } else {
        return this.getToken(EQLParser.PIPE_SYMBOL, i);
    }
};


Eql_queryContext.prototype.pipe_command = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Pipe_commandContext);
    } else {
        return this.getTypedRuleContext(Pipe_commandContext,i);
    }
};

Eql_queryContext.prototype.join = function() {
    return this.getTypedRuleContext(JoinContext,0);
};

Eql_queryContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

Eql_queryContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterEql_query(this);
	}
};

Eql_queryContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitEql_query(this);
	}
};

Eql_queryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitEql_query(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Eql_queryContext = Eql_queryContext;

EQLParser.prototype.eql_query = function() {

    var localctx = new Eql_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, EQLParser.RULE_eql_query);
    var _la = 0; // Token type
    try {
        this.state = 94;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.PROCESS_CREATE:
        case EQLParser.FILE:
        case EQLParser.NETWORK:
        case EQLParser.SYSMON_SERVICE_STATE_CHANGED:
        case EQLParser.PROCESS:
        case EQLParser.DRIVER_LOAD:
        case EQLParser.MODULE_LOAD:
        case EQLParser.REMOTE_THREAD:
        case EQLParser.RAW_ACCESS_READ:
        case EQLParser.PROCESS_ACCESS:
        case EQLParser.REGISTRY:
        case EQLParser.PIPE:
        case EQLParser.WMI:
        case EQLParser.DOMAIN:
        case EQLParser.SECURITY:
        case EQLParser.ANY:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.event_query();
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===EQLParser.PIPE_SYMBOL) {
                this.state = 85;
                this.match(EQLParser.PIPE_SYMBOL);
                this.state = 86;
                this.pipe_command();
                this.state = 91;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case EQLParser.JOIN:
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
            this.join();
            break;
        case EQLParser.SEQUENCE:
            this.enterOuterAlt(localctx, 3);
            this.state = 93;
            this.sequence();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function Pipe_commandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_pipe_command;
    return this;
}

Pipe_commandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pipe_commandContext.prototype.constructor = Pipe_commandContext;

Pipe_commandContext.prototype.COUNT = function() {
    return this.getToken(EQLParser.COUNT, 0);
};

Pipe_commandContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

Pipe_commandContext.prototype.UNIQUE = function() {
    return this.getToken(EQLParser.UNIQUE, 0);
};

Pipe_commandContext.prototype.FILTER = function() {
    return this.getToken(EQLParser.FILTER, 0);
};

Pipe_commandContext.prototype.UNIQUE_COUNT = function() {
    return this.getToken(EQLParser.UNIQUE_COUNT, 0);
};

Pipe_commandContext.prototype.HEAD = function() {
    return this.getToken(EQLParser.HEAD, 0);
};

Pipe_commandContext.prototype.INTEGER = function() {
    return this.getToken(EQLParser.INTEGER, 0);
};

Pipe_commandContext.prototype.TAIL = function() {
    return this.getToken(EQLParser.TAIL, 0);
};

Pipe_commandContext.prototype.SORT = function() {
    return this.getToken(EQLParser.SORT, 0);
};

Pipe_commandContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Pipe_commandContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterPipe_command(this);
	}
};

Pipe_commandContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitPipe_command(this);
	}
};

Pipe_commandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitPipe_command(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Pipe_commandContext = Pipe_commandContext;

EQLParser.prototype.pipe_command = function() {

    var localctx = new Pipe_commandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, EQLParser.RULE_pipe_command);
    var _la = 0; // Token type
    try {
        this.state = 110;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.COUNT:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.match(EQLParser.COUNT);
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (EQLParser.ADD - 19)) | (1 << (EQLParser.ARRAY_CONTAINS - 19)) | (1 << (EQLParser.ARRAY_SEARCH - 19)) | (1 << (EQLParser.CONCAT - 19)) | (1 << (EQLParser.DIVIDE - 19)) | (1 << (EQLParser.ENDS_WITH - 19)) | (1 << (EQLParser.LENGTH - 19)) | (1 << (EQLParser.MODULO - 19)) | (1 << (EQLParser.MULTIPLY - 19)) | (1 << (EQLParser.NUMBER - 19)) | (1 << (EQLParser.STARTS_WITH - 19)) | (1 << (EQLParser.STRING - 19)) | (1 << (EQLParser.STRING_CONTAINS - 19)) | (1 << (EQLParser.SUBSTRING - 19)) | (1 << (EQLParser.SUBTRACT - 19)) | (1 << (EQLParser.WILDCARD - 19)) | (1 << (EQLParser.TRUE - 19)) | (1 << (EQLParser.FALSE - 19)) | (1 << (EQLParser.LPAREN - 19)))) !== 0) || ((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (EQLParser.NOT - 62)) | (1 << (EQLParser.INTEGER - 62)) | (1 << (EQLParser.DECIMAL - 62)) | (1 << (EQLParser.SINGLE_Q_STRING - 62)) | (1 << (EQLParser.DOUBLE_Q_STRING - 62)) | (1 << (EQLParser.SINGLE_Q_RAW_STRING - 62)) | (1 << (EQLParser.DOUBLE_Q_RAW_STRING - 62)) | (1 << (EQLParser.IDENT - 62)))) !== 0)) {
                this.state = 97;
                this.expressions();
            }

            break;
        case EQLParser.UNIQUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.match(EQLParser.UNIQUE);
            break;
        case EQLParser.FILTER:
            this.enterOuterAlt(localctx, 3);
            this.state = 101;
            this.match(EQLParser.FILTER);
            this.state = 102;
            this.expressions();
            break;
        case EQLParser.UNIQUE_COUNT:
            this.enterOuterAlt(localctx, 4);
            this.state = 103;
            this.match(EQLParser.UNIQUE_COUNT);
            break;
        case EQLParser.HEAD:
            this.enterOuterAlt(localctx, 5);
            this.state = 104;
            this.match(EQLParser.HEAD);
            this.state = 105;
            this.match(EQLParser.INTEGER);
            break;
        case EQLParser.TAIL:
            this.enterOuterAlt(localctx, 6);
            this.state = 106;
            this.match(EQLParser.TAIL);
            this.state = 107;
            this.match(EQLParser.INTEGER);
            break;
        case EQLParser.SORT:
            this.enterOuterAlt(localctx, 7);
            this.state = 108;
            this.match(EQLParser.SORT);
            this.state = 109;
            this.expression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function SequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.SEQUENCE = function() {
    return this.getToken(EQLParser.SEQUENCE, 0);
};

SequenceContext.prototype.subquery_by = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Subquery_byContext);
    } else {
        return this.getTypedRuleContext(Subquery_byContext,i);
    }
};

SequenceContext.prototype.by_values = function() {
    return this.getTypedRuleContext(By_valuesContext,0);
};

SequenceContext.prototype.WITH = function() {
    return this.getToken(EQLParser.WITH, 0);
};

SequenceContext.prototype.named_params = function() {
    return this.getTypedRuleContext(Named_paramsContext,0);
};

SequenceContext.prototype.until_clause = function() {
    return this.getTypedRuleContext(Until_clauseContext,0);
};

SequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSequence(this);
	}
};

SequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSequence(this);
	}
};

SequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.SequenceContext = SequenceContext;

EQLParser.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, EQLParser.RULE_sequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(EQLParser.SEQUENCE);
        this.state = 123;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case EQLParser.BY:
        	this.state = 113;
        	this.by_values();
        	this.state = 116;
        	this._errHandler.sync(this);
        	_la = this._input.LA(1);
        	if(_la===EQLParser.WITH) {
        	    this.state = 114;
        	    this.match(EQLParser.WITH);
        	    this.state = 115;
        	    this.named_params();
        	}

        	break;
        case EQLParser.WITH:
        	this.state = 118;
        	this.match(EQLParser.WITH);
        	this.state = 119;
        	this.named_params();
        	this.state = 121;
        	this._errHandler.sync(this);
        	_la = this._input.LA(1);
        	if(_la===EQLParser.BY) {
        	    this.state = 120;
        	    this.by_values();
        	}

        	break;
        case EQLParser.LB:
        	break;
        default:
        	break;
        }
        this.state = 125;
        this.subquery_by();
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===EQLParser.LB) {
            this.state = 126;
            this.subquery_by();
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.UNTIL) {
            this.state = 132;
            this.until_clause();
        }

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


function By_valuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_by_values;
    return this;
}

By_valuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
By_valuesContext.prototype.constructor = By_valuesContext;

By_valuesContext.prototype.BY = function() {
    return this.getToken(EQLParser.BY, 0);
};

By_valuesContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

By_valuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterBy_values(this);
	}
};

By_valuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitBy_values(this);
	}
};

By_valuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitBy_values(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.By_valuesContext = By_valuesContext;

EQLParser.prototype.by_values = function() {

    var localctx = new By_valuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, EQLParser.RULE_by_values);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(EQLParser.BY);
        this.state = 136;
        this.expressions();
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


function Named_paramsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_named_params;
    return this;
}

Named_paramsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_paramsContext.prototype.constructor = Named_paramsContext;

Named_paramsContext.prototype.named_param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Named_paramContext);
    } else {
        return this.getTypedRuleContext(Named_paramContext,i);
    }
};

Named_paramsContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterNamed_params(this);
	}
};

Named_paramsContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitNamed_params(this);
	}
};

Named_paramsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitNamed_params(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Named_paramsContext = Named_paramsContext;

EQLParser.prototype.named_params = function() {

    var localctx = new Named_paramsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, EQLParser.RULE_named_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 138;
            this.named_param();
            this.state = 141; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===EQLParser.IDENT);
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


function Named_paramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_named_param;
    return this;
}

Named_paramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_paramContext.prototype.constructor = Named_paramContext;

Named_paramContext.prototype.IDENT = function() {
    return this.getToken(EQLParser.IDENT, 0);
};

Named_paramContext.prototype.equals = function() {
    return this.getTypedRuleContext(EqualsContext,0);
};

Named_paramContext.prototype.time_unit = function() {
    return this.getTypedRuleContext(Time_unitContext,0);
};

Named_paramContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

Named_paramContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterNamed_param(this);
	}
};

Named_paramContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitNamed_param(this);
	}
};

Named_paramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitNamed_param(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Named_paramContext = Named_paramContext;

EQLParser.prototype.named_param = function() {

    var localctx = new Named_paramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, EQLParser.RULE_named_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(EQLParser.IDENT);
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.EQUALS || _la===EQLParser.DOUBLE_EQUALS) {
            this.state = 144;
            this.equals();
            this.state = 147;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            switch(la_) {
            case 1:
                this.state = 145;
                this.time_unit();
                break;

            case 2:
                this.state = 146;
                this.atom();
                break;

            }
        }

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


function Time_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_time_unit;
    return this;
}

Time_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_unitContext.prototype.constructor = Time_unitContext;

Time_unitContext.prototype.IDENT = function() {
    return this.getToken(EQLParser.IDENT, 0);
};

Time_unitContext.prototype.decimal = function() {
    return this.getTypedRuleContext(DecimalContext,0);
};

Time_unitContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

Time_unitContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterTime_unit(this);
	}
};

Time_unitContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitTime_unit(this);
	}
};

Time_unitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitTime_unit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Time_unitContext = Time_unitContext;

EQLParser.prototype.time_unit = function() {

    var localctx = new Time_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, EQLParser.RULE_time_unit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.DECIMAL:
            this.state = 151;
            this.decimal();
            break;
        case EQLParser.INTEGER:
            this.state = 152;
            this.integer();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 155;
        this.match(EQLParser.IDENT);
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


function ExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_expressions;
    return this;
}

ExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionsContext.prototype.constructor = ExpressionsContext;

ExpressionsContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

ExpressionsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.COMMA);
    } else {
        return this.getToken(EQLParser.COMMA, i);
    }
};


ExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterExpressions(this);
	}
};

ExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitExpressions(this);
	}
};

ExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.ExpressionsContext = ExpressionsContext;

EQLParser.prototype.expressions = function() {

    var localctx = new ExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, EQLParser.RULE_expressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.argument();
        this.state = 162;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 158;
                this.match(EQLParser.COMMA);
                this.state = 159;
                this.argument(); 
            }
            this.state = 164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.COMMA) {
            this.state = 165;
            this.match(EQLParser.COMMA);
        }

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


function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitArgument(this);
	}
};

ArgumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitArgument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.ArgumentContext = ArgumentContext;

EQLParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, EQLParser.RULE_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.expression();
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


function Until_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_until_clause;
    return this;
}

Until_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Until_clauseContext.prototype.constructor = Until_clauseContext;

Until_clauseContext.prototype.UNTIL = function() {
    return this.getToken(EQLParser.UNTIL, 0);
};

Until_clauseContext.prototype.subquery_by = function() {
    return this.getTypedRuleContext(Subquery_byContext,0);
};

Until_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterUntil_clause(this);
	}
};

Until_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitUntil_clause(this);
	}
};

Until_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitUntil_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Until_clauseContext = Until_clauseContext;

EQLParser.prototype.until_clause = function() {

    var localctx = new Until_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, EQLParser.RULE_until_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(EQLParser.UNTIL);
        this.state = 171;
        this.subquery_by();
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


function Event_queryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_event_query;
    return this;
}

Event_queryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_queryContext.prototype.constructor = Event_queryContext;

Event_queryContext.prototype.event_type = function() {
    return this.getTypedRuleContext(Event_typeContext,0);
};

Event_queryContext.prototype.where = function() {
    return this.getTypedRuleContext(WhereContext,0);
};

Event_queryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Event_queryContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterEvent_query(this);
	}
};

Event_queryContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitEvent_query(this);
	}
};

Event_queryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitEvent_query(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Event_queryContext = Event_queryContext;

EQLParser.prototype.event_query = function() {

    var localctx = new Event_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, EQLParser.RULE_event_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.event_type();
        this.state = 174;
        this.where();
        this.state = 175;
        this.expression();
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


function Subquery_byContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_subquery_by;
    return this;
}

Subquery_byContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subquery_byContext.prototype.constructor = Subquery_byContext;

Subquery_byContext.prototype.subquery = function() {
    return this.getTypedRuleContext(SubqueryContext,0);
};

Subquery_byContext.prototype.named_params = function() {
    return this.getTypedRuleContext(Named_paramsContext,0);
};

Subquery_byContext.prototype.by_values = function() {
    return this.getTypedRuleContext(By_valuesContext,0);
};

Subquery_byContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSubquery_by(this);
	}
};

Subquery_byContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSubquery_by(this);
	}
};

Subquery_byContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSubquery_by(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Subquery_byContext = Subquery_byContext;

EQLParser.prototype.subquery_by = function() {

    var localctx = new Subquery_byContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, EQLParser.RULE_subquery_by);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.subquery();
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.IDENT) {
            this.state = 178;
            this.named_params();
        }

        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.BY) {
            this.state = 181;
            this.by_values();
        }

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


function SubqueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_subquery;
    return this;
}

SubqueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubqueryContext.prototype.constructor = SubqueryContext;

SubqueryContext.prototype.LB = function() {
    return this.getToken(EQLParser.LB, 0);
};

SubqueryContext.prototype.event_query = function() {
    return this.getTypedRuleContext(Event_queryContext,0);
};

SubqueryContext.prototype.RB = function() {
    return this.getToken(EQLParser.RB, 0);
};

SubqueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSubquery(this);
	}
};

SubqueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSubquery(this);
	}
};

SubqueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSubquery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.SubqueryContext = SubqueryContext;

EQLParser.prototype.subquery = function() {

    var localctx = new SubqueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, EQLParser.RULE_subquery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(EQLParser.LB);
        this.state = 185;
        this.event_query();
        this.state = 186;
        this.match(EQLParser.RB);
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


function JoinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_join;
    return this;
}

JoinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JoinContext.prototype.constructor = JoinContext;

JoinContext.prototype.JOIN = function() {
    return this.getToken(EQLParser.JOIN, 0);
};

JoinContext.prototype.subquery_by = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Subquery_byContext);
    } else {
        return this.getTypedRuleContext(Subquery_byContext,i);
    }
};

JoinContext.prototype.by_values = function() {
    return this.getTypedRuleContext(By_valuesContext,0);
};

JoinContext.prototype.until_clause = function() {
    return this.getTypedRuleContext(Until_clauseContext,0);
};

JoinContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterJoin(this);
	}
};

JoinContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitJoin(this);
	}
};

JoinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitJoin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.JoinContext = JoinContext;

EQLParser.prototype.join = function() {

    var localctx = new JoinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, EQLParser.RULE_join);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(EQLParser.JOIN);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.BY) {
            this.state = 189;
            this.by_values();
        }

        this.state = 192;
        this.subquery_by();
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===EQLParser.LB) {
            this.state = 193;
            this.subquery_by();
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===EQLParser.UNTIL) {
            this.state = 199;
            this.until_clause();
        }

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


function WhereContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_where;
    return this;
}

WhereContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereContext.prototype.constructor = WhereContext;

WhereContext.prototype.WHERE = function() {
    return this.getToken(EQLParser.WHERE, 0);
};

WhereContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterWhere(this);
	}
};

WhereContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitWhere(this);
	}
};

WhereContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitWhere(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.WhereContext = WhereContext;

EQLParser.prototype.where = function() {

    var localctx = new WhereContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, EQLParser.RULE_where);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(EQLParser.WHERE);
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


function Event_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_event_type;
    return this;
}

Event_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_typeContext.prototype.constructor = Event_typeContext;

Event_typeContext.prototype.PROCESS_CREATE = function() {
    return this.getToken(EQLParser.PROCESS_CREATE, 0);
};

Event_typeContext.prototype.FILE = function() {
    return this.getToken(EQLParser.FILE, 0);
};

Event_typeContext.prototype.NETWORK = function() {
    return this.getToken(EQLParser.NETWORK, 0);
};

Event_typeContext.prototype.SYSMON_SERVICE_STATE_CHANGED = function() {
    return this.getToken(EQLParser.SYSMON_SERVICE_STATE_CHANGED, 0);
};

Event_typeContext.prototype.PROCESS = function() {
    return this.getToken(EQLParser.PROCESS, 0);
};

Event_typeContext.prototype.DRIVER_LOAD = function() {
    return this.getToken(EQLParser.DRIVER_LOAD, 0);
};

Event_typeContext.prototype.MODULE_LOAD = function() {
    return this.getToken(EQLParser.MODULE_LOAD, 0);
};

Event_typeContext.prototype.REMOTE_THREAD = function() {
    return this.getToken(EQLParser.REMOTE_THREAD, 0);
};

Event_typeContext.prototype.RAW_ACCESS_READ = function() {
    return this.getToken(EQLParser.RAW_ACCESS_READ, 0);
};

Event_typeContext.prototype.PROCESS_ACCESS = function() {
    return this.getToken(EQLParser.PROCESS_ACCESS, 0);
};

Event_typeContext.prototype.REGISTRY = function() {
    return this.getToken(EQLParser.REGISTRY, 0);
};

Event_typeContext.prototype.PIPE = function() {
    return this.getToken(EQLParser.PIPE, 0);
};

Event_typeContext.prototype.WMI = function() {
    return this.getToken(EQLParser.WMI, 0);
};

Event_typeContext.prototype.DOMAIN = function() {
    return this.getToken(EQLParser.DOMAIN, 0);
};

Event_typeContext.prototype.ANY = function() {
    return this.getToken(EQLParser.ANY, 0);
};

Event_typeContext.prototype.SECURITY = function() {
    return this.getToken(EQLParser.SECURITY, 0);
};

Event_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterEvent_type(this);
	}
};

Event_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitEvent_type(this);
	}
};

Event_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitEvent_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Event_typeContext = Event_typeContext;

EQLParser.prototype.event_type = function() {

    var localctx = new Event_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, EQLParser.RULE_event_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << EQLParser.PROCESS_CREATE) | (1 << EQLParser.FILE) | (1 << EQLParser.NETWORK) | (1 << EQLParser.SYSMON_SERVICE_STATE_CHANGED) | (1 << EQLParser.PROCESS) | (1 << EQLParser.DRIVER_LOAD) | (1 << EQLParser.MODULE_LOAD) | (1 << EQLParser.REMOTE_THREAD) | (1 << EQLParser.RAW_ACCESS_READ) | (1 << EQLParser.PROCESS_ACCESS) | (1 << EQLParser.REGISTRY) | (1 << EQLParser.PIPE) | (1 << EQLParser.WMI) | (1 << EQLParser.DOMAIN) | (1 << EQLParser.SECURITY))) !== 0) || _la===EQLParser.ANY)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.or_expr = function() {
    return this.getTypedRuleContext(Or_exprContext,0);
};

ExpressionContext.prototype.subexpression = function() {
    return this.getTypedRuleContext(SubexpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.ExpressionContext = ExpressionContext;

EQLParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, EQLParser.RULE_expression);
    try {
        this.state = 208;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 206;
            this.or_expr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 207;
            this.subexpression();
            break;

        }
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


function And_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_and_expr;
    return this;
}

And_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_exprContext.prototype.constructor = And_exprContext;

And_exprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

And_exprContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.AND);
    } else {
        return this.getToken(EQLParser.AND, i);
    }
};


And_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterAnd_expr(this);
	}
};

And_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitAnd_expr(this);
	}
};

And_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitAnd_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.And_exprContext = And_exprContext;

EQLParser.prototype.and_expr = function() {

    var localctx = new And_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, EQLParser.RULE_and_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.term();
        this.state = 213; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 211;
            this.match(EQLParser.AND);
            this.state = 212;
            this.term();
            this.state = 215; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===EQLParser.AND);
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


function Or_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_or_expr;
    return this;
}

Or_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Or_exprContext.prototype.constructor = Or_exprContext;

Or_exprContext.prototype.subexpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubexpressionContext);
    } else {
        return this.getTypedRuleContext(SubexpressionContext,i);
    }
};

Or_exprContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.OR);
    } else {
        return this.getToken(EQLParser.OR, i);
    }
};


Or_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterOr_expr(this);
	}
};

Or_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitOr_expr(this);
	}
};

Or_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitOr_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Or_exprContext = Or_exprContext;

EQLParser.prototype.or_expr = function() {

    var localctx = new Or_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, EQLParser.RULE_or_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.subexpression();
        this.state = 220; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 218;
            this.match(EQLParser.OR);
            this.state = 219;
            this.subexpression();
            this.state = 222; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===EQLParser.OR);
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


function SubexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_subexpression;
    return this;
}

SubexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubexpressionContext.prototype.constructor = SubexpressionContext;

SubexpressionContext.prototype.and_expr = function() {
    return this.getTypedRuleContext(And_exprContext,0);
};

SubexpressionContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SubexpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSubexpression(this);
	}
};

SubexpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSubexpression(this);
	}
};

SubexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSubexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.SubexpressionContext = SubexpressionContext;

EQLParser.prototype.subexpression = function() {

    var localctx = new SubexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, EQLParser.RULE_subexpression);
    try {
        this.state = 226;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 224;
            this.and_expr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            this.term();
            break;

        }
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


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.not_term = function() {
    return this.getTypedRuleContext(Not_termContext,0);
};

TermContext.prototype.sub_term = function() {
    return this.getTypedRuleContext(Sub_termContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.TermContext = TermContext;

EQLParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, EQLParser.RULE_term);
    try {
        this.state = 230;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 228;
            this.not_term();
            break;
        case EQLParser.ADD:
        case EQLParser.ARRAY_CONTAINS:
        case EQLParser.ARRAY_SEARCH:
        case EQLParser.CONCAT:
        case EQLParser.DIVIDE:
        case EQLParser.ENDS_WITH:
        case EQLParser.LENGTH:
        case EQLParser.MODULO:
        case EQLParser.MULTIPLY:
        case EQLParser.NUMBER:
        case EQLParser.STARTS_WITH:
        case EQLParser.STRING:
        case EQLParser.STRING_CONTAINS:
        case EQLParser.SUBSTRING:
        case EQLParser.SUBTRACT:
        case EQLParser.WILDCARD:
        case EQLParser.TRUE:
        case EQLParser.FALSE:
        case EQLParser.LPAREN:
        case EQLParser.INTEGER:
        case EQLParser.DECIMAL:
        case EQLParser.SINGLE_Q_STRING:
        case EQLParser.DOUBLE_Q_STRING:
        case EQLParser.SINGLE_Q_RAW_STRING:
        case EQLParser.DOUBLE_Q_RAW_STRING:
        case EQLParser.IDENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 229;
            this.sub_term();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function Not_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_not_term;
    return this;
}

Not_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_termContext.prototype.constructor = Not_termContext;

Not_termContext.prototype.NOT = function() {
    return this.getToken(EQLParser.NOT, 0);
};

Not_termContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

Not_termContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterNot_term(this);
	}
};

Not_termContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitNot_term(this);
	}
};

Not_termContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitNot_term(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Not_termContext = Not_termContext;

EQLParser.prototype.not_term = function() {

    var localctx = new Not_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, EQLParser.RULE_not_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(EQLParser.NOT);
        this.state = 233;
        this.term();
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


function Sub_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_sub_term;
    return this;
}

Sub_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sub_termContext.prototype.constructor = Sub_termContext;

Sub_termContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

Sub_termContext.prototype.in_set = function() {
    return this.getTypedRuleContext(In_setContext,0);
};

Sub_termContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Sub_termContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSub_term(this);
	}
};

Sub_termContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSub_term(this);
	}
};

Sub_termContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSub_term(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Sub_termContext = Sub_termContext;

EQLParser.prototype.sub_term = function() {

    var localctx = new Sub_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, EQLParser.RULE_sub_term);
    try {
        this.state = 238;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            this.comparison();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.in_set();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 237;
            this.value();
            break;

        }
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


function ComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_comparison;
    return this;
}

ComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;

ComparisonContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ComparisonContext.prototype.comparator = function() {
    return this.getTypedRuleContext(ComparatorContext,0);
};

ComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterComparison(this);
	}
};

ComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitComparison(this);
	}
};

ComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.ComparisonContext = ComparisonContext;

EQLParser.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, EQLParser.RULE_comparison);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.value();
        this.state = 241;
        this.comparator();
        this.state = 242;
        this.value();
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


function ComparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_comparator;
    return this;
}

ComparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparatorContext.prototype.constructor = ComparatorContext;

ComparatorContext.prototype.LTE = function() {
    return this.getToken(EQLParser.LTE, 0);
};

ComparatorContext.prototype.LT = function() {
    return this.getToken(EQLParser.LT, 0);
};

ComparatorContext.prototype.equals = function() {
    return this.getTypedRuleContext(EqualsContext,0);
};

ComparatorContext.prototype.NOT_EQUALS = function() {
    return this.getToken(EQLParser.NOT_EQUALS, 0);
};

ComparatorContext.prototype.GTE = function() {
    return this.getToken(EQLParser.GTE, 0);
};

ComparatorContext.prototype.GT = function() {
    return this.getToken(EQLParser.GT, 0);
};

ComparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterComparator(this);
	}
};

ComparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitComparator(this);
	}
};

ComparatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitComparator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.ComparatorContext = ComparatorContext;

EQLParser.prototype.comparator = function() {

    var localctx = new ComparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, EQLParser.RULE_comparator);
    try {
        this.state = 250;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.LTE:
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.match(EQLParser.LTE);
            break;
        case EQLParser.LT:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(EQLParser.LT);
            break;
        case EQLParser.EQUALS:
        case EQLParser.DOUBLE_EQUALS:
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.equals();
            break;
        case EQLParser.NOT_EQUALS:
            this.enterOuterAlt(localctx, 4);
            this.state = 247;
            this.match(EQLParser.NOT_EQUALS);
            break;
        case EQLParser.GTE:
            this.enterOuterAlt(localctx, 5);
            this.state = 248;
            this.match(EQLParser.GTE);
            break;
        case EQLParser.GT:
            this.enterOuterAlt(localctx, 6);
            this.state = 249;
            this.match(EQLParser.GT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function EqualsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_equals;
    return this;
}

EqualsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualsContext.prototype.constructor = EqualsContext;

EqualsContext.prototype.EQUALS = function() {
    return this.getToken(EQLParser.EQUALS, 0);
};

EqualsContext.prototype.DOUBLE_EQUALS = function() {
    return this.getToken(EQLParser.DOUBLE_EQUALS, 0);
};

EqualsContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterEquals(this);
	}
};

EqualsContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitEquals(this);
	}
};

EqualsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitEquals(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.EqualsContext = EqualsContext;

EQLParser.prototype.equals = function() {

    var localctx = new EqualsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, EQLParser.RULE_equals);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        _la = this._input.LA(1);
        if(!(_la===EQLParser.EQUALS || _la===EQLParser.DOUBLE_EQUALS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
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


function In_setContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_in_set;
    return this;
}

In_setContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
In_setContext.prototype.constructor = In_setContext;

In_setContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

In_setContext.prototype.IN = function() {
    return this.getToken(EQLParser.IN, 0);
};

In_setContext.prototype.set = function() {
    return this.getTypedRuleContext(SetContext,0);
};

In_setContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterIn_set(this);
	}
};

In_setContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitIn_set(this);
	}
};

In_setContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitIn_set(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.In_setContext = In_setContext;

EQLParser.prototype.in_set = function() {

    var localctx = new In_setContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, EQLParser.RULE_in_set);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this.value();
        this.state = 255;
        this.match(EQLParser.IN);
        this.state = 256;
        this.set();
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


function SetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_set;
    return this;
}

SetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetContext.prototype.constructor = SetContext;

SetContext.prototype.LPAREN = function() {
    return this.getToken(EQLParser.LPAREN, 0);
};

SetContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SetContext.prototype.RPAREN = function() {
    return this.getToken(EQLParser.RPAREN, 0);
};

SetContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.COMMA);
    } else {
        return this.getToken(EQLParser.COMMA, i);
    }
};


SetContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSet(this);
	}
};

SetContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSet(this);
	}
};

SetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.SetContext = SetContext;

EQLParser.prototype.set = function() {

    var localctx = new SetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, EQLParser.RULE_set);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(EQLParser.LPAREN);
        this.state = 259;
        this.expression();
        this.state = 264;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 260;
                this.match(EQLParser.COMMA);
                this.state = 261;
                this.expression(); 
            }
            this.state = 266;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===EQLParser.COMMA) {
            this.state = 267;
            this.match(EQLParser.COMMA);
            this.state = 272;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 273;
        this.match(EQLParser.RPAREN);
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


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

ValueContext.prototype.named_subquery = function() {
    return this.getTypedRuleContext(Named_subqueryContext,0);
};

ValueContext.prototype.check_paren = function() {
    return this.getTypedRuleContext(Check_parenContext,0);
};

ValueContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.ValueContext = ValueContext;

EQLParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, EQLParser.RULE_value);
    try {
        this.state = 279;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 275;
            this.function_call();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 276;
            this.named_subquery();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 277;
            this.check_paren();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 278;
            this.atom();
            break;

        }
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


function Function_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_function_call;
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.ADD = function() {
    return this.getToken(EQLParser.ADD, 0);
};

Function_callContext.prototype.LPAREN = function() {
    return this.getToken(EQLParser.LPAREN, 0);
};

Function_callContext.prototype.INTEGER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.INTEGER);
    } else {
        return this.getToken(EQLParser.INTEGER, i);
    }
};


Function_callContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.COMMA);
    } else {
        return this.getToken(EQLParser.COMMA, i);
    }
};


Function_callContext.prototype.RPAREN = function() {
    return this.getToken(EQLParser.RPAREN, 0);
};

Function_callContext.prototype.ARRAY_CONTAINS = function() {
    return this.getToken(EQLParser.ARRAY_CONTAINS, 0);
};

Function_callContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(EQLParser.IDENT);
    } else {
        return this.getToken(EQLParser.IDENT, i);
    }
};


Function_callContext.prototype.string = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext,i);
    }
};

Function_callContext.prototype.ARRAY_SEARCH = function() {
    return this.getToken(EQLParser.ARRAY_SEARCH, 0);
};

Function_callContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Function_callContext.prototype.CONCAT = function() {
    return this.getToken(EQLParser.CONCAT, 0);
};

Function_callContext.prototype.DIVIDE = function() {
    return this.getToken(EQLParser.DIVIDE, 0);
};

Function_callContext.prototype.ENDS_WITH = function() {
    return this.getToken(EQLParser.ENDS_WITH, 0);
};

Function_callContext.prototype.LENGTH = function() {
    return this.getToken(EQLParser.LENGTH, 0);
};

Function_callContext.prototype.MODULO = function() {
    return this.getToken(EQLParser.MODULO, 0);
};

Function_callContext.prototype.MULTIPLY = function() {
    return this.getToken(EQLParser.MULTIPLY, 0);
};

Function_callContext.prototype.NUMBER = function() {
    return this.getToken(EQLParser.NUMBER, 0);
};

Function_callContext.prototype.STARTS_WITH = function() {
    return this.getToken(EQLParser.STARTS_WITH, 0);
};

Function_callContext.prototype.STRING = function() {
    return this.getToken(EQLParser.STRING, 0);
};

Function_callContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Function_callContext.prototype.STRING_CONTAINS = function() {
    return this.getToken(EQLParser.STRING_CONTAINS, 0);
};

Function_callContext.prototype.SUBSTRING = function() {
    return this.getToken(EQLParser.SUBSTRING, 0);
};

Function_callContext.prototype.integer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntegerContext);
    } else {
        return this.getTypedRuleContext(IntegerContext,i);
    }
};

Function_callContext.prototype.SUBTRACT = function() {
    return this.getToken(EQLParser.SUBTRACT, 0);
};

Function_callContext.prototype.WILDCARD = function() {
    return this.getToken(EQLParser.WILDCARD, 0);
};

Function_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterFunction_call(this);
	}
};

Function_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitFunction_call(this);
	}
};

Function_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitFunction_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Function_callContext = Function_callContext;

EQLParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, EQLParser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.state = 427;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.ADD:
            this.enterOuterAlt(localctx, 1);
            this.state = 281;
            this.match(EQLParser.ADD);
            this.state = 282;
            this.match(EQLParser.LPAREN);
            this.state = 283;
            this.match(EQLParser.INTEGER);
            this.state = 284;
            this.match(EQLParser.COMMA);
            this.state = 285;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.ARRAY_CONTAINS:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.match(EQLParser.ARRAY_CONTAINS);
            this.state = 287;
            this.match(EQLParser.LPAREN);
            this.state = 288;
            this.match(EQLParser.IDENT);
            this.state = 289;
            this.match(EQLParser.COMMA);
            this.state = 290;
            this.string();
            this.state = 291;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.ARRAY_SEARCH:
            this.enterOuterAlt(localctx, 3);
            this.state = 293;
            this.match(EQLParser.ARRAY_SEARCH);
            this.state = 294;
            this.match(EQLParser.LPAREN);
            this.state = 295;
            this.match(EQLParser.IDENT);
            this.state = 296;
            this.match(EQLParser.COMMA);
            this.state = 297;
            this.match(EQLParser.IDENT);
            this.state = 298;
            this.match(EQLParser.COMMA);
            this.state = 299;
            this.expression();
            this.state = 300;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.CONCAT:
            this.enterOuterAlt(localctx, 4);
            this.state = 302;
            this.match(EQLParser.CONCAT);
            this.state = 303;
            this.match(EQLParser.LPAREN);
            this.state = 304;
            this.expression();
            this.state = 309;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 305;
                    this.match(EQLParser.COMMA);
                    this.state = 306;
                    this.expression(); 
                }
                this.state = 311;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
            }

            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===EQLParser.COMMA) {
                this.state = 312;
                this.match(EQLParser.COMMA);
            }

            this.state = 315;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.DIVIDE:
            this.enterOuterAlt(localctx, 5);
            this.state = 317;
            this.match(EQLParser.DIVIDE);
            this.state = 318;
            this.match(EQLParser.LPAREN);
            this.state = 319;
            this.match(EQLParser.INTEGER);
            this.state = 320;
            this.match(EQLParser.COMMA);
            this.state = 321;
            this.match(EQLParser.INTEGER);
            this.state = 322;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.ENDS_WITH:
            this.enterOuterAlt(localctx, 6);
            this.state = 323;
            this.match(EQLParser.ENDS_WITH);
            this.state = 324;
            this.match(EQLParser.LPAREN);
            this.state = 327;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 325;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 326;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 329;
            this.match(EQLParser.COMMA);
            this.state = 332;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 330;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 331;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 334;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.LENGTH:
            this.enterOuterAlt(localctx, 7);
            this.state = 335;
            this.match(EQLParser.LENGTH);
            this.state = 336;
            this.match(EQLParser.LPAREN);
            this.state = 337;
            this.expression();
            this.state = 338;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.MODULO:
            this.enterOuterAlt(localctx, 8);
            this.state = 340;
            this.match(EQLParser.MODULO);
            this.state = 341;
            this.match(EQLParser.LPAREN);
            this.state = 344;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 342;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 343;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 346;
            this.match(EQLParser.COMMA);
            this.state = 349;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 347;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 348;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 351;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.MULTIPLY:
            this.enterOuterAlt(localctx, 9);
            this.state = 352;
            this.match(EQLParser.MULTIPLY);
            this.state = 353;
            this.match(EQLParser.LPAREN);
            this.state = 354;
            this.match(EQLParser.INTEGER);
            this.state = 355;
            this.match(EQLParser.COMMA);
            this.state = 356;
            this.match(EQLParser.INTEGER);
            this.state = 357;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.NUMBER:
            this.enterOuterAlt(localctx, 10);
            this.state = 358;
            this.match(EQLParser.NUMBER);
            this.state = 359;
            this.match(EQLParser.LPAREN);
            this.state = 360;
            this.string();
            this.state = 365;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===EQLParser.COMMA) {
                this.state = 361;
                this.match(EQLParser.COMMA);
                this.state = 362;
                this.match(EQLParser.INTEGER);
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 368;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.STARTS_WITH:
            this.enterOuterAlt(localctx, 11);
            this.state = 370;
            this.match(EQLParser.STARTS_WITH);
            this.state = 371;
            this.match(EQLParser.LPAREN);
            this.state = 374;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 372;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 373;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 376;
            this.match(EQLParser.COMMA);
            this.state = 379;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 377;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 378;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 381;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.STRING:
            this.enterOuterAlt(localctx, 12);
            this.state = 382;
            this.match(EQLParser.STRING);
            this.state = 383;
            this.match(EQLParser.LPAREN);
            this.state = 384;
            this.value();
            this.state = 385;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.STRING_CONTAINS:
            this.enterOuterAlt(localctx, 13);
            this.state = 387;
            this.match(EQLParser.STRING_CONTAINS);
            this.state = 388;
            this.match(EQLParser.LPAREN);
            this.state = 391;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 389;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 390;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 393;
            this.match(EQLParser.COMMA);
            this.state = 396;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case EQLParser.SINGLE_Q_STRING:
            case EQLParser.DOUBLE_Q_STRING:
                this.state = 394;
                this.string();
                break;
            case EQLParser.IDENT:
                this.state = 395;
                this.match(EQLParser.IDENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 398;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.SUBSTRING:
            this.enterOuterAlt(localctx, 14);
            this.state = 399;
            this.match(EQLParser.SUBSTRING);
            this.state = 400;
            this.match(EQLParser.LPAREN);
            this.state = 401;
            this.expression();
            this.state = 402;
            this.match(EQLParser.COMMA);
            this.state = 403;
            this.integer();
            this.state = 404;
            this.match(EQLParser.COMMA);
            this.state = 405;
            this.integer();
            this.state = 406;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.SUBTRACT:
            this.enterOuterAlt(localctx, 15);
            this.state = 408;
            this.match(EQLParser.SUBTRACT);
            this.state = 409;
            this.match(EQLParser.LPAREN);
            this.state = 410;
            _la = this._input.LA(1);
            if(!(_la===EQLParser.INTEGER || _la===EQLParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 411;
            this.match(EQLParser.COMMA);
            this.state = 412;
            _la = this._input.LA(1);
            if(!(_la===EQLParser.INTEGER || _la===EQLParser.IDENT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 413;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.WILDCARD:
            this.enterOuterAlt(localctx, 16);
            this.state = 414;
            this.match(EQLParser.WILDCARD);
            this.state = 415;
            this.match(EQLParser.LPAREN);
            this.state = 416;
            this.match(EQLParser.IDENT);
            this.state = 417;
            this.match(EQLParser.COMMA);
            this.state = 418;
            this.match(EQLParser.STRING);
            this.state = 423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===EQLParser.COMMA) {
                this.state = 419;
                this.match(EQLParser.COMMA);
                this.state = 420;
                this.string();
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 426;
            this.match(EQLParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function Named_subqueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_named_subquery;
    return this;
}

Named_subqueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_subqueryContext.prototype.constructor = Named_subqueryContext;

Named_subqueryContext.prototype.IDENT = function() {
    return this.getToken(EQLParser.IDENT, 0);
};

Named_subqueryContext.prototype.OF = function() {
    return this.getToken(EQLParser.OF, 0);
};

Named_subqueryContext.prototype.subquery = function() {
    return this.getTypedRuleContext(SubqueryContext,0);
};

Named_subqueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterNamed_subquery(this);
	}
};

Named_subqueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitNamed_subquery(this);
	}
};

Named_subqueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitNamed_subquery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Named_subqueryContext = Named_subqueryContext;

EQLParser.prototype.named_subquery = function() {

    var localctx = new Named_subqueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, EQLParser.RULE_named_subquery);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        this.match(EQLParser.IDENT);
        this.state = 430;
        this.match(EQLParser.OF);
        this.state = 431;
        this.subquery();
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


function Check_parenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_check_paren;
    return this;
}

Check_parenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Check_parenContext.prototype.constructor = Check_parenContext;

Check_parenContext.prototype.LPAREN = function() {
    return this.getToken(EQLParser.LPAREN, 0);
};

Check_parenContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Check_parenContext.prototype.RPAREN = function() {
    return this.getToken(EQLParser.RPAREN, 0);
};

Check_parenContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

Check_parenContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterCheck_paren(this);
	}
};

Check_parenContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitCheck_paren(this);
	}
};

Check_parenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitCheck_paren(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Check_parenContext = Check_parenContext;

EQLParser.prototype.check_paren = function() {

    var localctx = new Check_parenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, EQLParser.RULE_check_paren);
    try {
        this.state = 438;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 433;
            this.match(EQLParser.LPAREN);
            this.state = 434;
            this.expression();
            this.state = 435;
            this.match(EQLParser.RPAREN);
            break;
        case EQLParser.TRUE:
        case EQLParser.FALSE:
        case EQLParser.INTEGER:
        case EQLParser.DECIMAL:
        case EQLParser.SINGLE_Q_STRING:
        case EQLParser.DOUBLE_Q_STRING:
        case EQLParser.SINGLE_Q_RAW_STRING:
        case EQLParser.DOUBLE_Q_RAW_STRING:
        case EQLParser.IDENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 437;
            this.atom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

AtomContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

AtomContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.AtomContext = AtomContext;

EQLParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, EQLParser.RULE_atom);
    try {
        this.state = 443;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.INTEGER:
        case EQLParser.DECIMAL:
        case EQLParser.SINGLE_Q_STRING:
        case EQLParser.DOUBLE_Q_STRING:
        case EQLParser.SINGLE_Q_RAW_STRING:
        case EQLParser.DOUBLE_Q_RAW_STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 440;
            this.literal();
            break;
        case EQLParser.TRUE:
        case EQLParser.FALSE:
            this.enterOuterAlt(localctx, 2);
            this.state = 441;
            this.bool();
            break;
        case EQLParser.IDENT:
            this.enterOuterAlt(localctx, 3);
            this.state = 442;
            this.field();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.IDENT = function() {
    return this.getToken(EQLParser.IDENT, 0);
};

FieldContext.prototype.sub_field = function() {
    return this.getTypedRuleContext(Sub_fieldContext,0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.FieldContext = FieldContext;

EQLParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, EQLParser.RULE_field);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(EQLParser.IDENT);
        this.state = 447;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        if(la_===1) {
            this.state = 446;
            this.sub_field();

        }
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


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;

BoolContext.prototype.TRUE = function() {
    return this.getToken(EQLParser.TRUE, 0);
};

BoolContext.prototype.FALSE = function() {
    return this.getToken(EQLParser.FALSE, 0);
};

BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.BoolContext = BoolContext;

EQLParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, EQLParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        _la = this._input.LA(1);
        if(!(_la===EQLParser.TRUE || _la===EQLParser.FALSE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
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


function Sub_fieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_sub_field;
    return this;
}

Sub_fieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sub_fieldContext.prototype.constructor = Sub_fieldContext;

Sub_fieldContext.prototype.DOT = function() {
    return this.getToken(EQLParser.DOT, 0);
};

Sub_fieldContext.prototype.IDENT = function() {
    return this.getToken(EQLParser.IDENT, 0);
};

Sub_fieldContext.prototype.LB = function() {
    return this.getToken(EQLParser.LB, 0);
};

Sub_fieldContext.prototype.unsigned_integer = function() {
    return this.getTypedRuleContext(Unsigned_integerContext,0);
};

Sub_fieldContext.prototype.RB = function() {
    return this.getToken(EQLParser.RB, 0);
};

Sub_fieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterSub_field(this);
	}
};

Sub_fieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitSub_field(this);
	}
};

Sub_fieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitSub_field(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Sub_fieldContext = Sub_fieldContext;

EQLParser.prototype.sub_field = function() {

    var localctx = new Sub_fieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, EQLParser.RULE_sub_field);
    try {
        this.state = 457;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.DOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 451;
            this.match(EQLParser.DOT);
            this.state = 452;
            this.match(EQLParser.IDENT);
            break;
        case EQLParser.LB:
            this.enterOuterAlt(localctx, 2);
            this.state = 453;
            this.match(EQLParser.LB);
            this.state = 454;
            this.unsigned_integer();
            this.state = 455;
            this.match(EQLParser.RB);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.decimal = function() {
    return this.getTypedRuleContext(DecimalContext,0);
};

LiteralContext.prototype.integer = function() {
    return this.getTypedRuleContext(IntegerContext,0);
};

LiteralContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

LiteralContext.prototype.raw_string = function() {
    return this.getTypedRuleContext(Raw_stringContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.LiteralContext = LiteralContext;

EQLParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, EQLParser.RULE_literal);
    try {
        this.state = 463;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case EQLParser.DECIMAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 459;
            this.decimal();
            break;
        case EQLParser.INTEGER:
            this.enterOuterAlt(localctx, 2);
            this.state = 460;
            this.integer();
            break;
        case EQLParser.SINGLE_Q_STRING:
        case EQLParser.DOUBLE_Q_STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 461;
            this.string();
            break;
        case EQLParser.SINGLE_Q_RAW_STRING:
        case EQLParser.DOUBLE_Q_RAW_STRING:
            this.enterOuterAlt(localctx, 4);
            this.state = 462;
            this.raw_string();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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


function DecimalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_decimal;
    return this;
}

DecimalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecimalContext.prototype.constructor = DecimalContext;

DecimalContext.prototype.DECIMAL = function() {
    return this.getToken(EQLParser.DECIMAL, 0);
};

DecimalContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterDecimal(this);
	}
};

DecimalContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitDecimal(this);
	}
};

DecimalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitDecimal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.DecimalContext = DecimalContext;

EQLParser.prototype.decimal = function() {

    var localctx = new DecimalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, EQLParser.RULE_decimal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 465;
        this.match(EQLParser.DECIMAL);
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


function IntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_integer;
    return this;
}

IntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegerContext.prototype.constructor = IntegerContext;

IntegerContext.prototype.INTEGER = function() {
    return this.getToken(EQLParser.INTEGER, 0);
};

IntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterInteger(this);
	}
};

IntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitInteger(this);
	}
};

IntegerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitInteger(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.IntegerContext = IntegerContext;

EQLParser.prototype.integer = function() {

    var localctx = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, EQLParser.RULE_integer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this.match(EQLParser.INTEGER);
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


function Unsigned_integerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_unsigned_integer;
    return this;
}

Unsigned_integerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unsigned_integerContext.prototype.constructor = Unsigned_integerContext;

Unsigned_integerContext.prototype.UNSIGNED_INTEGER = function() {
    return this.getToken(EQLParser.UNSIGNED_INTEGER, 0);
};

Unsigned_integerContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterUnsigned_integer(this);
	}
};

Unsigned_integerContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitUnsigned_integer(this);
	}
};

Unsigned_integerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitUnsigned_integer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Unsigned_integerContext = Unsigned_integerContext;

EQLParser.prototype.unsigned_integer = function() {

    var localctx = new Unsigned_integerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, EQLParser.RULE_unsigned_integer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.match(EQLParser.UNSIGNED_INTEGER);
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


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.SINGLE_Q_STRING = function() {
    return this.getToken(EQLParser.SINGLE_Q_STRING, 0);
};

StringContext.prototype.DOUBLE_Q_STRING = function() {
    return this.getToken(EQLParser.DOUBLE_Q_STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.StringContext = StringContext;

EQLParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, EQLParser.RULE_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        _la = this._input.LA(1);
        if(!(_la===EQLParser.SINGLE_Q_STRING || _la===EQLParser.DOUBLE_Q_STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
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


function Raw_stringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EQLParser.RULE_raw_string;
    return this;
}

Raw_stringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Raw_stringContext.prototype.constructor = Raw_stringContext;

Raw_stringContext.prototype.SINGLE_Q_RAW_STRING = function() {
    return this.getToken(EQLParser.SINGLE_Q_RAW_STRING, 0);
};

Raw_stringContext.prototype.DOUBLE_Q_RAW_STRING = function() {
    return this.getToken(EQLParser.DOUBLE_Q_RAW_STRING, 0);
};

Raw_stringContext.prototype.enterRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.enterRaw_string(this);
	}
};

Raw_stringContext.prototype.exitRule = function(listener) {
    if(listener instanceof EQLListener ) {
        listener.exitRaw_string(this);
	}
};

Raw_stringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof EQLVisitor ) {
        return visitor.visitRaw_string(this);
    } else {
        return visitor.visitChildren(this);
    }
};




EQLParser.Raw_stringContext = Raw_stringContext;

EQLParser.prototype.raw_string = function() {

    var localctx = new Raw_stringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, EQLParser.RULE_raw_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 473;
        _la = this._input.LA(1);
        if(!(_la===EQLParser.SINGLE_Q_RAW_STRING || _la===EQLParser.DOUBLE_Q_RAW_STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
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


exports.EQLParser = EQLParser;
