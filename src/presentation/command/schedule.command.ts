import { Command } from "commander";


const setScheduleCommand = new Command("set")
	.description("Set a schedule")
	.option("-f, --file <file>", "Specify a file to read schedule details from")
	.option("-i, --interactive", "Enter schedule details interactively")
	.option("-T, --time <title>", "Set the title of the task")
	.option("-t, --title <title>", "Set the title of the task")
	.option("-d, --description <description>", "Set the description of the task")
	.action((options: { time: Date, title: string; description: string; complete: boolean }) => {
		const { time, title, description, complete } = options;
		if (!description) {
		  console.log(`Setting schedule "${title}" at ${time}`);
		} else {
		  console.log(`Setting schedule "${title}" with description "${description.substring(0, 9)}" at ${time}`);
		}
	});

export function scheduleCommand(): Command {
	const scheduleCommand = new Command("schedule")
		.description("Manage schedules")
		.addCommand(setScheduleCommand);
	return scheduleCommand;
}