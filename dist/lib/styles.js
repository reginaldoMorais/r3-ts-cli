"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
// Libs
var sass_1 = __importDefault(require("./sass"));
var styledComponent_1 = __importDefault(require("./styledComponent"));
var sass = new sass_1.default();
var styledComponent = new styledComponent_1.default();
var Style = /** @class */ (function () {
    function Style() {
        this.name = '';
    }
    Style.prototype.delete = function (styleType, componentType, name) {
        switch (styleType) {
            case enum_1.StylesType.SASS:
                sass.delete(componentType, name);
                break;
            case enum_1.StylesType.STYLED:
                styledComponent.delete(componentType, name);
                break;
            default:
                break;
        }
    };
    Style.prototype.create = function (styleType, componentType, name) {
        switch (styleType) {
            case enum_1.StylesType.SASS:
                sass.create(componentType, name);
                break;
            case enum_1.StylesType.STYLED:
                styledComponent.create(componentType, name);
                break;
            default:
                break;
        }
    };
    return Style;
}());
exports.default = Style;
