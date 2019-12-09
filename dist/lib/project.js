"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var pkg = require('../../package.json');
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.deleteProject = function (projectName) {
        fs_extra_1.default.removeSync(projectName);
        console.error(chalk_1.default.red("\n  \u2715 N\u00E3o foi poss\u00EDvel criar o Projeto " + projectName.toUpperCase() + "!"));
        process.exit();
    };
    Project.prototype.setProjectName = function (projectName) {
        var _this = this;
        var files = [
            process.cwd() + "/" + projectName + "/src/client/index.html",
            process.cwd() + "/" + projectName + "/src/client/index.ejs",
            process.cwd() + "/" + projectName + "/src/server/console.ts",
            process.cwd() + "/" + projectName + "/src/server/templates/template.ts",
            process.cwd() + "/" + projectName + "/package.json",
            process.cwd() + "/" + projectName + "/commands-ls.js",
            process.cwd() + "/" + projectName + "/README.md",
            process.cwd() + "/" + projectName + "/.r3-cli",
        ];
        files.forEach(function (file) {
            try {
                var data = fs_1.default.readFileSync(file, 'utf-8');
                var result = void 0;
                if (file.indexOf('package.json') > 0) {
                    result = data.replace(/{{APP_TITLE}}/g, projectName.toLowerCase());
                }
                else if (file.indexOf('.r3-cli') > 0) {
                    result = data.replace(/{{APP_TITLE}}/g, projectName.toUpperCase()).replace(/{{APP_VERSION}}/g, pkg.version);
                }
                else {
                    result = data.replace(/{{APP_TITLE}}/g, projectName.toUpperCase());
                }
                fs_1.default.writeFileSync(file, result, 'utf-8');
            }
            catch (err) {
                console.error(err);
                _this.deleteProject(projectName);
            }
        });
        console.info(chalk_1.default.green('  \u2713 Project configured'));
    };
    Project.prototype.copyFiles = function (projectName) {
        try {
            fs_extra_1.default.copySync(__dirname + "/../../template-project", "" + projectName);
            console.info(chalk_1.default.green('  \u2713 Project created'));
        }
        catch (err) {
            console.error(err);
        }
    };
    Project.prototype.createProjectFolder = function (projectName) {
        fs_1.default.mkdirSync(projectName);
    };
    return Project;
}());
exports.default = Project;
