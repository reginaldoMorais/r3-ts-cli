import { IFiles } from './types';
declare class Files implements IFiles {
    getCurrentDirectoryBase(): string;
    fileExists(file: string): boolean;
    directoryExists(filePath: string): boolean;
}
export default Files;
