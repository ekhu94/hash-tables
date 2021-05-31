"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
var HashTable = /** @class */ (function () {
    function HashTable(len) {
        if (len === void 0) { len = 53; }
        this.keyMap = new Array(len);
    }
    HashTable.prototype._hash = function (key) {
        var idx = 0;
        var WEIRD_PRIME = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            var val = key.charCodeAt(i) - 96;
            idx = (idx * WEIRD_PRIME + val) % this.keyMap.length;
        }
        return idx;
    };
    HashTable.prototype.set = function (key, value) {
        var idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx] = __spreadArray(__spreadArray([], this.keyMap[idx]), [[key, value]]);
    };
    HashTable.prototype.get = function (key) {
        var idx = this._hash(key);
        if (this.keyMap[idx]) {
            var val = this.keyMap[idx].find(function (arr) { return arr[0] === key; });
            if (val)
                return val[1];
        }
        return undefined;
    };
    HashTable.prototype.keys = function () {
        var output = [];
        var els = this.keyMap.filter(function (el) { return el; });
        for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
            var el = els_1[_i];
            var keys = el.map(function (arr) { return arr[0]; });
            output.push.apply(output, keys);
        }
        return output.filter(function (key, i) { return output.indexOf(key) === i; });
    };
    HashTable.prototype.values = function () {
        var output = [];
        var els = this.keyMap.filter(function (el) { return el; });
        for (var _i = 0, els_2 = els; _i < els_2.length; _i++) {
            var el = els_2[_i];
            var vals = el.map(function (arr) { return arr[1]; });
            output.push.apply(output, vals);
        }
        return output.filter(function (val, i) { return output.indexOf(val) === i; });
    };
    return HashTable;
}());
exports.HashTable = HashTable;
