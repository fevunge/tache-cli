import { Command } from "commander";


const gitMeCommand = new Command("git")
.description("git option about the user")

export function meCommand(): Command {
	return new Command("me")
	.description("")
	.action(() => {});
}