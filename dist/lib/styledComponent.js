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
var styledComponentFile_1 = __importDefault(require("../template/component/styledComponentFile"));
var Spinner = clui_1.default.Spinner;
var files = new files_1.default();
var Style = /** @class */ (function () {
    function Style() {
        this.name = '';
        this.type = '';
        this.path = './src/app/view';
        this.component = '';
    }
    Style.prototype.createStyle = function () {
        var file = this.path + "/" + this.type + "/" + this.name + "/" + this.component + "Style.ts";
        var content = styledComponentFile_1.default();
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful Styled Component creation'));
    };
    Style.prototype.deleteStyle = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + "/" + this.component + "Style.ts");
        console.error(chalk_1.default.red("\n  \u2715 Component " + this.name.toUpperCase() + " removed!"));
    };
    Style.prototype.delete = function (type, name) {
        var status = new Spinner('Deleting Styled Component structure, please wait...');
        status.start();
        var component = name.charAt(0).toUpperCase() + name.slice(1);
        if (type == enum_1.ComponentType.PAGE) {
            this.type = 'pages';
        }
        else {
            this.type = 'shared';
        }
        this.name = name;
        this.component = component;
        try {
            if (!files.directoryExists(this.path + "/" + this.type + "/" + this.name)) {
                console.error(chalk_1.default.red("\n  The project don't have this styled Component!\n"));
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
        var status = new Spinner('Creating Styled Component structure, please wait...');
        status.start();
        var component = name.charAt(0).toUpperCase() + name.slice(1);
        if (type == enum_1.ComponentType.PAGE) {
            this.type = 'pages';
        }
        else {
            this.type = 'shared';
        }
        this.name = name;
        this.component = component;
        try {
            if (!files.directoryExists(this.path + "/" + this.type + "/" + this.name)) {
                fs_1.default.mkdirSync(this.path + "/" + this.type + "/" + this.name);
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
