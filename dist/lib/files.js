"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Files = /** @class */ (function () {
    function Files() {
    }
    Files.prototype.getCurrentDirectoryBase = function () {
        return path_1.default.basename(process.cwd());
    };
    Files.prototype.fileExists = function (file) {
        try {
            return fs_1.default.statSync(file).isFile();
        }
        catch (err) {
            return false;
        }
    };
    Files.prototype.directoryExists = function (filePath) {
        try {
            return fs_1.default.statSync(filePath).isDirectory();
        }
        catch (err) {
            return false;
        }
    };
    return Files;
}());
exports.default = Files;
