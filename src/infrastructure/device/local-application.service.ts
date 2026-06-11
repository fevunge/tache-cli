import { ASCII_HEAD } from "@src/shared/const/head";
import { HostService } from "@src/shared/utils/host.service";

export class LocalApplicationService {
	public async createLocalApplicationFolder() : Promise<void> { 
		if (await HostService.hasDirectoryAccess(HostService.getHomeDirectory() + "/.local/share/tache")) {
			return;
		}
		console.log(ASCII_HEAD);
		console.log("Creating local application folder...");
		await HostService.createDirectory(HostService.getHomeDirectory() + "/.local/share/tache");
	}

	public async getLocalApplication() : Promise<String> {
		return HostService.getHomeDirectory() + "/.local/share/tache";
	}
}