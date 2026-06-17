import { Command } from "commander";

const addProjectCommand = new Command("add")
	.description("Add a new project")
	.option("-f, --file <file>", "Specify a file to read project details from")
	.option("-i, --interactive", "Enter project details interactively")
	.option("-p, --path <title>", "Set the path from the project")
	.option("-d, --description <description>", "Set the description of the project")
	.action((options: { path: string; description: string; complete: boolean }) => {
		const { path, description, complete } = options;
		if (complete) {
		  console.log(`Creating project from "${path}" and marking it as complete...`);
		} else {
		  console.log(`Creating project from "${path}" with description "${description}"...`);
		}
	});

export function projectCommand(): Command {
	const projectCommand = new Command("project")
		.description("Manage projects")
		.addCommand(addProjectCommand);
	return projectCommand;
}