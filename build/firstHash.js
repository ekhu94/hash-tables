"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstHash = void 0;
var firstHash = function (key, arrayLen) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        var val = key.charCodeAt(i) - 96;
        total = (total + val) % arrayLen;
    }
    return total;
};
exports.firstHash = firstHash;
