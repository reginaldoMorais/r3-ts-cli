"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var clui_1 = __importDefault(require("clui"));
// Libs
var Spinner = clui_1.default.Spinner;
var Route = /** @class */ (function () {
    function Route() {
    }
    Route.prototype.setImport = function (file, importStr) {
        var data = fs_1.default.readFileSync(file, 'utf-8');
        var result = data.replace(/\/\* Routes \*\//g, importStr);
        fs_1.default.writeFileSync(file, result, 'utf-8');
    };
    Route.prototype.setRoute = function (file, routeStr) {
        var data = fs_1.default.readFileSync(file, 'utf-8');
        var result = data.replace(/<Switch>/g, routeStr);
        fs_1.default.writeFileSync(file, result, 'utf-8');
    };
    Route.prototype.setMenu = function (name, choise) {
        var file = "./src/redux/ducks/menu/index.js";
        var link;
        if (choise.option == 'internal') {
            link = "/in/" + name;
        }
        else {
            link = "/" + name;
        }
        var data = fs_1.default.readFileSync(file, 'utf-8');
        var content = "}\n    {\n      id: '" + name + "',\n      name: '" + (name.charAt(0).toUpperCase() + name.slice(1)) + "',\n      link: '" + link + "',\n      icon: 'fa-circle',\n      submenu: [],\n      active: false,\n      show: true,\n    } /* r3-cli-menu-tag */,";
        var result = data.replace(/} \/\* r3-cli-menu-tag \*\/,/g, content);
        fs_1.default.writeFileSync(file, result, 'utf-8');
    };
    Route.prototype.createRoute = function (name, choise) {
        var status = new Spinner('Implementing a new Route, please wait...');
        status.start();
        try {
            var container = name.charAt(0).toUpperCase() + name.slice(1) + 'Container';
            var component = name.charAt(0).toUpperCase() + name.slice(1);
            var file = void 0;
            var importStr = "/* Routes */\nimport " + component + " from '../pages/" + name + "/" + container + "';";
            var routeStr = void 0;
            if (choise.routerOption == 'internal') {
                file = "./src/app/view/templates/In.tsx";
                routeStr = "<Switch>\n            <Route exact key=\"" + name + "\" path=\"/in/" + name + "\" component={" + component + "} />";
            }
            else {
                file = "./src/app/view/templates/Out.tsx";
                routeStr = "<Switch>\n            <Route exact key=\"" + name + "\" path=\"/" + name + "\" component={" + component + "} />";
            }
            try {
                this.setImport(file, importStr);
                this.setRoute(file, routeStr);
                // TODO: this.setMenu(name, choise);
            }
            catch (err) {
                console.error(chalk_1.default.red("\n  \u2715 Error creating Route " + name.toUpperCase() + "!"));
                console.error(err);
            }
            console.info(chalk_1.default.green('  \u2713 Successful Route creation'));
        }
        catch (err) {
            throw err;
        }
        finally {
            setTimeout(function () {
                status.stop();
            }, 500);
        }
    };
    return Route;
}());
exports.default = Route;
