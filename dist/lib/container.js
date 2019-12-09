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
var container_1 = __importDefault(require("../template/container/container"));
var test_1 = __importDefault(require("../template/container/test"));
var Spinner = clui_1.default.Spinner;
var files = new files_1.default();
var Container = /** @class */ (function () {
    function Container() {
        this.type = '';
        this.name = '';
        this.component = '';
        this.path = './src/app/view';
    }
    Container.prototype.createContainer = function () {
        var file = this.path + "/" + this.type + "/" + this.name + "/" + this.component + "Container.tsx";
        var content = container_1.default(this.name);
        console.info('aaaaaaaa ', file);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful Container creation'));
    };
    Container.prototype.deleteContainer = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + "/" + this.component + "Container.tsx");
        console.error(chalk_1.default.red("\n  \u2715 Container " + this.name.toUpperCase() + " removed!"));
    };
    Container.prototype.createTest = function () {
        if (!files.directoryExists(this.path + "/" + this.type + "/" + this.name + "/__test__")) {
            fs_1.default.mkdirSync(this.path + "/" + this.type + "/" + this.name + "/__test__");
        }
        var file = this.path + "/" + this.type + "/" + this.name + "/__test__/" + this.component + "Container.spec.tsx";
        var content = test_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful ContainerTest creation'));
    };
    Container.prototype.deleteTest = function () {
        fs_extra_1.default.removeSync(this.path + "/" + this.type + "/" + this.name + "/__test__/" + this.component + "Container.spec.tsx");
        console.error(chalk_1.default.red("\n  \u2715 Testes removed!"));
    };
    Container.prototype.delete = function (type, name) {
        var status = new Spinner('Deleting Container structure, please wait...');
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
                console.error(chalk_1.default.red("\n  The project don't have this Container!\n"));
                process.exit();
            }
            this.deleteContainer();
            this.deleteTest();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    Container.prototype.create = function (type, name) {
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
                console.error(chalk_1.default.red("\n  The project don't have this Component to plug container!\n"));
                process.exit();
            }
            this.createContainer();
            this.createTest();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    return Container;
}());
exports.default = Container;
