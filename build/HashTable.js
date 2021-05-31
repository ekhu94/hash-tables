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
        if (len === void 0) { len = 11; }
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
    return HashTable;
}());
exports.HashTable = HashTable;
