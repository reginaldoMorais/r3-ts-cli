"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "/**\n * " + component + "\n */\n";
});
