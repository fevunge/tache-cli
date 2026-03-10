import os from "os";

export class OSService {
  static getHomeDirectory(): string {
	return os.homedir();
  }

  static getOSPlatform(): string {
	return os.platform();
  }
}
