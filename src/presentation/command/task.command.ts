import { Command } from "commander";


const addTaskCommand = new Command("add")
	.description("Add a new task")
	.option("-f, --file <file>", "Specify a file to read task details from")
	.option("-i, --interactive", "Enter task details interactively")
	.option("-t, --title <title>", "Set the title of the task")
	.option("-d, --description <description>", "Set the description of the task")
	.option("-c, --complete", "Mark the task as complete", false)
	.action((options: { title: string; description: string; complete: boolean }) => {
		const { title, description, complete } = options;
		if (complete) {
		  console.log(`Creating task "${title}" and marking it as complete...`);
		} else {
		  console.log(`Creating task "${title}" with description "${description}"...`);
		}
	});

export function taskCommand(): Command {
	const taskCommand = new Command("task")
		.description("Manage tasks")
		.addCommand(addTaskCommand);
	return taskCommand;
}