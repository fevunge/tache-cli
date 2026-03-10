import os from "os";

export class OSService {
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
}
