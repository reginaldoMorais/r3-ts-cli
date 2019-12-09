"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clui_1 = __importDefault(require("clui"));
var lodash_1 = __importDefault(require("lodash"));
// Libs
var inquirer_1 = __importDefault(require("./lib/inquirer"));
var files_1 = __importDefault(require("./lib/files"));
var project_1 = __importDefault(require("./lib/project"));
var route_1 = __importDefault(require("./lib/route"));
var component_1 = __importDefault(require("./lib/component"));
var container_1 = __importDefault(require("./lib/container"));
var duck_1 = __importDefault(require("./lib/duck"));
var styles_1 = __importDefault(require("./lib/styles"));
var enum_1 = require("./lib/enum");
var Spinner = clui_1.default.Spinner;
var files = new files_1.default();
var project = new project_1.default();
var route = new route_1.default();
var component = new component_1.default();
var container = new container_1.default();
var duck = new duck_1.default();
var style = new styles_1.default();
var projectName = '';
/**
 * Verifica se o comando está rodando num projeto válido.
 */
var hasProject = function () {
    if (!files.fileExists(".r3-cli")) {
        console.error(chalk_1.default.red('\n  No valid project found!\n'));
        process.exit();
    }
};
var test = function () {
    var rootDir = lodash_1.default.last(process.cwd().split('/'));
    console.info("Current directory: " + rootDir);
};
/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
var createRoute = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, routeName, duckChoise, routerChoise, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 11, , 12]);
                hasProject();
                console.info('This option will create a new Route with a Component.');
                return [4 /*yield*/, inquirer_1.default.askRouteName()];
            case 1:
                answers = _a.sent();
                routeName = answers.routeName;
                if (files.directoryExists("./src/app/view/pages/" + routeName)) {
                    console.error(chalk_1.default.red('\n  This Route is already exists!\n'));
                    process.exit();
                }
                console.info(chalk_1.default.blue('\u25A0 Creating new Component, please wait...'));
                return [4 /*yield*/, component.create(enum_1.ComponentType.PAGE, routeName.toString())];
            case 2:
                _a.sent();
                return [4 /*yield*/, inquirer_1.default.askDuckCreate()];
            case 3:
                duckChoise = _a.sent();
                if (!duckChoise.duckCreate) return [3 /*break*/, 5];
                console.info(chalk_1.default.blue('\u25A0 Creating a new Duck, please wait...'));
                return [4 /*yield*/, duck.create(routeName.toString())];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                console.info(chalk_1.default.blue('\u25A0 Creating new Container, please wait...'));
                return [4 /*yield*/, container.create(enum_1.ComponentType.PAGE, routeName.toString())];
            case 6:
                _a.sent();
                console.info(chalk_1.default.blue('\u25A0 Creating a new Style, please wait...'));
                return [4 /*yield*/, style.create(enum_1.StylesType.SASS, enum_1.ComponentType.PAGE, routeName.toString())];
            case 7:
                _a.sent();
                return [4 /*yield*/, style.create(enum_1.StylesType.STYLED, enum_1.ComponentType.PAGE, routeName.toString())];
            case 8:
                _a.sent();
                return [4 /*yield*/, inquirer_1.default.askRouteType()];
            case 9:
                routerChoise = _a.sent();
                console.info(chalk_1.default.blue('\u25A0 Creating a new Route, please wait...'));
                return [4 /*yield*/, route.createRoute(routeName.toString(), routerChoise)];
            case 10:
                _a.sent();
                return [3 /*break*/, 12];
            case 11:
                err_1 = _a.sent();
                if (err_1) {
                    switch (err_1.code) {
                        default:
                            console.error(err_1);
                    }
                }
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.createRoute = createRoute;
/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
var createSharedComponent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, componentName, duckChoise, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                hasProject();
                console.info('This option will create a shared Component.');
                return [4 /*yield*/, inquirer_1.default.askComponentName()];
            case 1:
                answers = _a.sent();
                componentName = answers.componentName;
                if (files.directoryExists("./src/app/view/shared/" + componentName)) {
                    console.error(chalk_1.default.red('\n  This Component is already exists!\n'));
                    process.exit();
                }
                console.info(chalk_1.default.blue('\u25A0 Creating new Component, please wait...'));
                return [4 /*yield*/, component.create(enum_1.ComponentType.SHARED, componentName.toString())];
            case 2:
                _a.sent();
                console.info(chalk_1.default.blue('\u25A0 Creating a new Style, please wait...'));
                return [4 /*yield*/, style.create(enum_1.StylesType.SASS, enum_1.ComponentType.SHARED, componentName.toString())];
            case 3:
                _a.sent();
                return [4 /*yield*/, style.create(enum_1.StylesType.STYLED, enum_1.ComponentType.SHARED, componentName.toString())];
            case 4:
                _a.sent();
                return [4 /*yield*/, inquirer_1.default.askDuckCreate()];
            case 5:
                duckChoise = _a.sent();
                if (!duckChoise.duckCreate) return [3 /*break*/, 7];
                console.info(chalk_1.default.blue('\u25A0 Creating a new Duck, please wait...'));
                return [4 /*yield*/, duck.create(componentName.toString())];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                err_2 = _a.sent();
                if (err_2) {
                    switch (err_2.code) {
                        default:
                            console.error(err_2);
                    }
                }
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.createSharedComponent = createSharedComponent;
/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
var createContainer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, containerName, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                hasProject();
                console.info('This option will create a Container to plug a Component.');
                return [4 /*yield*/, inquirer_1.default.askContainerName()];
            case 1:
                answers = _a.sent();
                containerName = answers.containerName;
                console.info(chalk_1.default.blue('\u25A0 Creating new Component, please wait...'));
                return [4 /*yield*/, container.create(enum_1.ComponentType.SHARED, containerName.toString())];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                if (err_3) {
                    switch (err_3.code) {
                        default:
                            console.error(err_3);
                    }
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createContainer = createContainer;
/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
var createDuck = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, duckName, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                hasProject();
                console.info('This option will create a redux estructure for your project.');
                return [4 /*yield*/, inquirer_1.default.askDuckName()];
            case 1:
                answers = _a.sent();
                duckName = answers.duckName;
                console.info(chalk_1.default.blue('\u25A0 Creating new Duck, please wait...'));
                return [4 /*yield*/, duck.create(duckName.toString())];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                if (err_4) {
                    switch (err_4.code) {
                        default:
                            console.error(err_4);
                    }
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createDuck = createDuck;
/**
 * Cria a estrutura do projeto, caso ele já não exista.
 */
var createProject = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers, status_1, err_5, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                return [4 /*yield*/, inquirer_1.default.askProjectName()];
            case 1:
                answers = _a.sent();
                projectName = answers.projectName;
                if (files.directoryExists(projectName)) {
                    console.error(chalk_1.default.red('\n  A project with this name already exists!\n'));
                    process.exit();
                }
                console.info(chalk_1.default.blue('\u25A0 Creating Project, please wait...'));
                status_1 = new Spinner("Processing files for the new project, please wait...");
                status_1.start();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, 7, 8]);
                return [4 /*yield*/, project.createProjectFolder(projectName)];
            case 3:
                _a.sent();
                return [4 /*yield*/, project.copyFiles(projectName)];
            case 4:
                _a.sent();
                return [4 /*yield*/, project.setProjectName(projectName)];
            case 5:
                _a.sent();
                return [3 /*break*/, 8];
            case 6:
                err_5 = _a.sent();
                throw err_5;
            case 7:
                setTimeout(function () {
                    status_1.stop();
                }, 500);
                return [7 /*endfinally*/];
            case 8: return [3 /*break*/, 10];
            case 9:
                err_6 = _a.sent();
                if (err_6) {
                    switch (err_6.code) {
                        default: {
                            console.error(err_6);
                            project.deleteProject(projectName);
                        }
                    }
                }
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.createProject = createProject;
