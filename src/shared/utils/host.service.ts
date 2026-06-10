import { pathExists } from "fs-extra";
import { mkdir } from "fs"
import os from "os";

export class HostService {
  static createDirectory(arg0: string) {
    mkdir(arg0, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err}`);
      } else {
        console.log(`Directory created successfully at: ${arg0}`);
      }
    });
  }
  
  static getHomeDirectory(): string {
	return os.homedir();
  }

  static getOSPlatform(): string {
	return os.platform();
  }

  static isWindows(): boolean {
	return os.platform() === "win32";
  }
  
  static isMacOS(): boolean {
	return os.platform() === "darwin";
  }

  static isLinux(): boolean {
	return os.platform() === "linux";
  }

  static async hasDirectoryAccess(path: string): Promise<boolean> {    
    return await pathExists(path);
  }

  static getOSInfo(): string {
    return `${os.type()} ${os.release()} (${os.platform()})`;
  }
}
