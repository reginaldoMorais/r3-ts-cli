"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var touch_1 = __importDefault(require("touch"));
var clui_1 = __importDefault(require("clui"));
var enum_1 = require("./enum");
// Libs
var files_1 = __importDefault(require("./files"));
var style_1 = __importDefault(require("../template/component/style"));
var Spinner = clui_1.default.Spinner;
var files = new files_1.default();
var Style = /** @class */ (function () {
    function Style() {
        this.name = '';
        this.type = '';
        this.componentType = 1;
        this.path = './src/app/assets/styles/scss';
    }
    Style.prototype.setSharedImport = function () {
        var data = fs_1.default.readFileSync(this.path + "/main.scss", 'utf-8');
        var result = data.replace(/\/\* Shared \*\//g, "/* Shared */\n@import './shared/" + this.name + "';");
        fs_1.default.writeFileSync(this.path + "/main.scss", result, 'utf-8');
    };
    Style.prototype.setPagesImport = function () {
        var data = fs_1.default.readFileSync(this.path + "/main.scss", 'utf-8');
        var result = data.replace(/\/\* Pages \*\//g, "/* Pages */\n@import './pages/" + this.name + "';");
        fs_1.default.writeFileSync(this.path + "/main.scss", result, 'utf-8');
    };
    Style.prototype.createStyle = function () {
        var file = this.path + "/" + this.type + "/" + this.name.toLowerCase() + ".scss";
        var content = style_1.default(this.name.charAt(0).toUpperCase() + this.name.slice(1));
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        if (this.componentType === enum_1.ComponentType.PAGE) {
            this.setPagesImport();
        }
        else {
            this.setSharedImport();
        }
        console.info(chalk_1.default.green('  \u2713 Successful Style creation'));
    };
    Style.prototype.deleteStyle = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + ".scss");
        console.error(chalk_1.default.red("\n  \u2715 Style removed!"));
    };
    Style.prototype.delete = function (type, name) {
        var status = new Spinner('Deleting Sass structure, please wait...');
        status.start();
        this.name = name;
        this.componentType = type;
        if (this.componentType === enum_1.ComponentType.PAGE) {
            this.type = 'pages';
        }
        else {
            this.type = 'shared';
        }
        try {
            if (files.directoryExists(this.path + "/" + this.type + "/" + this.name + ".scss")) {
                console.error(chalk_1.default.red("\n  The project don't have this style!\n"));
                process.exit();
            }
            this.deleteStyle();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    Style.prototype.create = function (type, name) {
        var status = new Spinner('Creating Sass structure, please wait...');
        status.start();
        this.name = name;
        this.componentType = type;
        if (this.componentType === enum_1.ComponentType.PAGE) {
            this.type = 'pages';
        }
        else {
            this.type = 'shared';
        }
        try {
            if (files.directoryExists(this.path + "/" + this.type + "/" + this.name + ".scss")) {
                console.error(chalk_1.default.red("\n  The project already have this style!\n"));
                process.exit();
            }
            this.createStyle();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    return Style;
}());
exports.default = Style;
