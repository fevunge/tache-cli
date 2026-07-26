import { Command } from "commander";
import { AboutService } from "@src/application/service/about.service";

const aboutService = new AboutService();

export function aboutCommand(): Command {
	return new Command("about")
	.description("Print information about tache-cli")
	.action(() => aboutService.get());
}