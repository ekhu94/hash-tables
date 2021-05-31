"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondHash = void 0;
var secondHash = function (key, arrayLen) {
    var total = 0;
    var WEIRD_PRIME = 31;
    for (var i = 0; i < Math.min(key.length, 100); i++) {
        var val = key.charCodeAt(i) - 96;
        total = (total * WEIRD_PRIME + val) % arrayLen;
    }
    return total;
};
exports.secondHash = secondHash;
