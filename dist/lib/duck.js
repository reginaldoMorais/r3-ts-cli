"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var clui_1 = __importDefault(require("clui"));
var touch_1 = __importDefault(require("touch"));
// Libs
var files_1 = __importDefault(require("./files"));
var types_1 = __importDefault(require("../template/duck/types"));
var actions_1 = __importDefault(require("../template/duck/actions"));
var sagas_1 = __importDefault(require("../template/duck/sagas"));
var reducer_1 = __importDefault(require("../template/duck/reducer"));
var Spinner = clui_1.default.Spinner;
var files = new files_1.default();
var Duck = /** @class */ (function () {
    function Duck() {
        this.name = '';
        this.path = './src/app/redux/ducks';
    }
    Duck.prototype.createTypes = function () {
        var file = this.path + "/" + this.name + "/types.ts";
        var content = types_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful Types creation'));
    };
    Duck.prototype.createActions = function () {
        var file = this.path + "/" + this.name + "/actions.ts";
        var content = actions_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        console.info(chalk_1.default.green('  \u2713 Successful Actions creation'));
    };
    Duck.prototype.createSagas = function () {
        var file = this.path + "/" + this.name + "/sagas.ts";
        var rootSaga = this.path + "/rootSaga.ts";
        var component = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        var content = sagas_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        var data = fs_1.default.readFileSync(rootSaga, 'utf-8');
        var result = data.replace(/\/\* Sagas \*\//g, "/* Sagas */\nimport { watch" + component + "LoadRequest } from './" + this.name + "/sagas';");
        result = result.replace(/return yield all\(\[/g, "return yield all([\n    watch" + component + "LoadRequest(),");
        fs_1.default.writeFileSync(rootSaga, result, 'utf-8');
        console.info(chalk_1.default.green('  \u2713 Successful Sagas creation'));
    };
    Duck.prototype.createReducer = function () {
        var file = this.path + "/" + this.name + "/index.ts";
        var rootReducer = this.path + "/rootReducer.ts";
        var content = reducer_1.default(this.name);
        touch_1.default(file);
        fs_1.default.writeFileSync(file, content);
        var data = fs_1.default.readFileSync(rootReducer, 'utf-8');
        var result = data.replace(/\/\* Reducers \*\//g, "/* Reducers */\nimport " + this.name + " from './" + this.name + "';");
        result = result.replace(/const combineAppReducers = combineReducers\(\{/g, "const combineAppReducers = combineReducers({\n  " + this.name + ",");
        fs_1.default.writeFileSync(rootReducer, result, 'utf-8');
        console.info(chalk_1.default.green('  \u2713 Successful Reducer creation'));
    };
    Duck.prototype.setType = function () {
        var types = this.path + "/../store/types.ts";
        var component = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        var data = fs_1.default.readFileSync(types, 'utf-8');
        var result = data.replace(/\/\* Types \*\//g, "/* Types */\nimport { I" + component + "State } from '../ducks/" + this.name + "/types';");
        result = result.replace(/export interface IApplicationState \{/g, "export interface IApplicationState {\n  " + this.name + ": I" + component + "State;");
        '';
        fs_1.default.writeFileSync(types, result, 'utf-8');
        console.info(chalk_1.default.green('  \u2713 Successful Reducer creation'));
    };
    Duck.prototype.delete = function (name) {
        var status = new Spinner('Deleting Duck structure, please wait...');
        status.start();
        this.name = name;
        try {
            if (!files.directoryExists(this.path + "/" + this.name)) {
                console.error(chalk_1.default.red("\n  The project don't have this Duck!\n"));
                process.exit();
            }
            fs_extra_1.default.removeSync(this.path + "/" + this.name);
            console.error(chalk_1.default.red("\n  \u2715 Duck " + this.name + " removed!"));
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    Duck.prototype.create = function (name) {
        var status = new Spinner('Creating Duck structure, please wait...');
        status.start();
        this.name = name;
        try {
            if (files.directoryExists(this.path + "/" + this.name)) {
                console.error(chalk_1.default.red('\n  The project already have this Duck!\n'));
                process.exit();
            }
            else {
                fs_1.default.mkdirSync(this.path + "/" + this.name);
            }
            this.createTypes();
            this.createActions();
            this.createSagas();
            this.createReducer();
            this.setType();
        }
        catch (err) {
            throw err;
        }
        finally {
            status.stop();
        }
    };
    return Duck;
}());
exports.default = Duck;
