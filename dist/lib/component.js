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
var component_1 = __importDefault(require("../template/component/component"));
var types_1 = __importDefault(require("../template/component/types"));
var test_1 = __importDefault(require("../template/component/test"));
var Spinner = clui_1.default.Spinner;
var files = new files_1.default();
var Component = /** @class */ (function () {
    function Component() {
        this.type = '';
        this.name = '';
        this.component = '';
        this.path = './src/app/view';
    }
    Component.prototype.createComponent = function () {
        var file = this.path + "/" + this.type + "/" + this.name + "/" + this.component + ".tsx";
        var content = component_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful Component creation'));
    };
    Component.prototype.deleteComponent = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + "/" + this.component + ".tsx");
        console.error(chalk_1.default.red("\n  \u2715 Component " + this.name.toUpperCase() + " removed!"));
    };
    Component.prototype.createTypes = function () {
        var file = this.path + "/" + this.type + "/" + this.name + "/types.ts";
        var content = types_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful Types creation'));
    };
    Component.prototype.deleteTypes = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + "/types.ts");
        console.error(chalk_1.default.red("\n  \u2715 Types removed!"));
    };
    Component.prototype.createTest = function () {
        if (!files.directoryExists(this.path + "/" + this.type + "/" + this.name + "/__test__")) {
            fs_1.default.mkdirSync(this.path + "/" + this.type + "/" + this.name + "/__test__");
        }
        var file = this.path + "/" + this.type + "/" + this.name + "/__test__/" + this.component + ".spec.tsx";
        var content = test_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful ComponentTest creation'));
    };
    Component.prototype.deleteTest = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + "/__test__/" + this.component + ".spec.tsx");
        console.error(chalk_1.default.red("\n  \u2715 Testes removed!"));
    };
    Component.prototype.delete = function (type, name) {
        var status = new Spinner('Deleting Component structure, please wait...');
        status.start();
        var component = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = name;
        this.component = component;
        if (type == enum_1.ComponentType.PAGE) {
            this.type = 'pages';
        }
        else {
            this.type = 'shared';
        }
        try {
            if (!files.directoryExists(this.path + "/" + this.type + "/" + this.name)) {
                console.error(chalk_1.default.red("\n  The project don't have this Component!\n"));
                process.exit();
            }
            this.deleteComponent();
            this.deleteTest();
            this.deleteTypes();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    Component.prototype.create = function (type, name) {
        var status = new Spinner('Creating View structure, please wait...');
        status.start();
        var component = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = name;
        this.component = component;
        if (type == enum_1.ComponentType.PAGE) {
            this.type = 'pages';
        }
        else {
            this.type = 'shared';
        }
        try {
            if (!files.directoryExists(this.path + "/" + this.type + "/" + this.name)) {
                fs_1.default.mkdirSync(this.path + "/" + this.type + "/" + this.name);
            }
            this.createComponent();
            this.createTest();
            this.createTypes();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    return Component;
}());
exports.default = Component;
