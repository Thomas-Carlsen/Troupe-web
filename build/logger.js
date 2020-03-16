"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var term_js_1 = require("./term.js");
var Logger = /** @class */ (function () {
    function Logger(caller, level) {
        this.caller = caller;
        this.level = level;
    }
    //use unpack ...args
    Logger.prototype.log = function (mess) {
        term_js_1.term.write(mess + "\n");
        if (this.level = 'debug')
            console.log("log:" + this.caller + ": " + mess);
    };
    Logger.prototype.info = function (mess) {
        //console.info(this.caller + ": " + mess);
        term_js_1.term.write(this.caller + ": " + mess + "\n");
    };
    Logger.prototype.debug = function (mess) {
        if (this.level == 'debug') {
            term_js_1.term.write("debug:" + this.caller + ": " + mess + "\n");
            //console.log("debug:" + this.caller + ": " + mess);
            //console.debug(this.caller + ": " + mess);
        }
    };
    Logger.prototype.error = function (mess) {
        // errors in term will be added in later
        //term.write("error:" + this.caller + ": " + mess);
        console.error(this.caller + ": " + mess);
    };
    return Logger;
}());
function mkLogger(caller, level) {
    if (level === void 0) { level = "debug"; }
    return new Logger(caller, level);
}
exports.mkLogger = mkLogger;
