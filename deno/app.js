"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var e_1, _a;
/* Hello world */
var server_ts_1 = require("https://deno.land/std/http/server.ts");
var s = server_ts_1.serve({ port: 8000 });
console.log("http://localhost:8000/");
try {
    for (var s_1 = __asyncValues(s), s_1_1; s_1_1 = yield s_1.next(), !s_1_1.done;) {
        var req = s_1_1.value;
        req.respond({ body: "Hello World\n" });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (s_1_1 && !s_1_1.done && (_a = s_1.return)) yield _a.call(s_1);
    }
    finally { if (e_1) throw e_1.error; }
}
