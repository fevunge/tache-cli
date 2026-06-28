import { Command } from "commander";
import { AddTaskCmdDto } from "../dto/add_task_cmd.dto";
import { TaskService } from "@src/application/service/task.service";


const taskService = new TaskService();

const addTaskCommand = new Command("add")
	.description("Add a new task")
	.option("-f, --file <file>", "Specify a file to read task details from")
	.option("-t, --title <title>", "Set the title of the task")
	.option("-d, --description <description>", "Set the description of the task")
	.option("-c, --complete", "Mark the task as complete", false)
	.action((options: AddTaskCmdDto) => {
		if (options.file) {
		  taskService.addFromFile(options.file)
		} else {
		  console.log(`Trying Create task using "${options.title}" as title with description "${options.description}"...`);
		}
	});

export function taskCommand(): Command {
	const taskCommand = new Command("task")
		.description("Manage tasks")
		.addCommand(addTaskCommand);
	return taskCommand;
}