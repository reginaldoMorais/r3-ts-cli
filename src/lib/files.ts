import fs from 'fs';
import path from 'path';
import { IFiles } from './types';

class Files implements IFiles {
  public getCurrentDirectoryBase() {
    return path.basename(process.cwd());
  }

  public fileExists(file: string) {
    try {
      return fs.statSync(file).isFile();
    } catch (err) {
      return false;
    }
  }

  public directoryExists(filePath: string) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
}

export default Files;
