"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/* Api example */
var mod_ts_1 = require("https://deno.land/x/oak/mod.ts");
var env = Deno.env.toObject();
var PORT = env.PORT || 4000;
var HOST = env.HOST || '127.0.0.1';
var cl = function (e) { return console.log(e); };
var dogs = [
    {
        name: 'Roger',
        age: 8,
    },
    {
        name: 'Syd',
        age: 7,
    },
];
exports.getDogs = function (_a) {
    var response = _a.response;
    response.body = dogs;
};
exports.getDog = function (_a) {
    var params = _a.params, response = _a.response;
    var dog = dogs.filter(function (dog) { return dog.name === params.name; });
    if (dog.length) {
        response.status = 200;
        response.body = dog[0];
        return;
    }
    response.status = 400;
    response.body = { msg: "Cannot find dog " + params.name };
};
exports.addDog = function (_a) {
    var request = _a.request, response = _a.response;
    return __awaiter(_this, void 0, void 0, function () {
        var body, _b, name, age;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, request.body()];
                case 1:
                    body = _c.sent();
                    _b = body.value, name = _b.name, age = _b.age;
                    dogs.push({
                        name: name,
                        age: age,
                    });
                    response.body = { msg: 'OK' };
                    response.status = 200;
                    return [2 /*return*/];
            }
        });
    });
};
exports.updateDog = function (_a) {
    var params = _a.params, request = _a.request, response = _a.response;
    return __awaiter(_this, void 0, void 0, function () {
        var temp, body, age;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    temp = dogs.filter(function (existingDog) { return existingDog.name === params.name; });
                    return [4 /*yield*/, request.body()];
                case 1:
                    body = _b.sent();
                    age = body.value.age;
                    if (temp.length) {
                        temp[0].age = age;
                        response.status = 200;
                        response.body = { msg: 'OK' };
                        return [2 /*return*/];
                    }
                    response.status = 400;
                    response.body = { msg: "Cannot find dog " + params.name };
                    return [2 /*return*/];
            }
        });
    });
};
exports.removeDog = function (_a) {
    var params = _a.params, response = _a.response;
    var lengthBefore = dogs.length;
    dogs = dogs.filter(function (dog) { return dog.name !== params.name; });
    if (dogs.length === lengthBefore) {
        response.status = 400;
        response.body = { msg: "Cannot find dog " + params.name };
        return;
    }
    response.body = { msg: 'OK' };
    response.status = 200;
};
var router = new mod_ts_1.Router();
router
    .get('/dogs', exports.getDogs)
    .get('/dogs/:name', exports.getDog)
    .post('/dogs', exports.addDog)
    .put('/dogs/:name', exports.updateDog)
    .delete('/dogs/:name', exports.removeDog);
var app = new mod_ts_1.Application();
app.use(router.routes());
app.use(router.allowedMethods());
console.log("Listening on port " + PORT + "...");
yield app.listen(HOST + ":" + PORT);
