"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.mapToArray = void 0;
var mapToArray = function (object) {
    var array = [];
    for (var elem in object) {
        array.push(__assign(__assign({}, object[elem]), { idDB: elem }));
    }
    return array;
};
exports.mapToArray = mapToArray;
