import { Command } from "commander";
import { taskCommand } from "../command/task.command";

export const command_line_interface = (commandLine: Command) => {
	commandLine.addCommand(taskCommand());
	commandLine
	  .command("project")
	  .description("List all tasks")
	  .action(() => {
		console.log("Listing all tasks...");
	  });

	commandLine
	  .command("me")
	  .description("Read a task by ID")
	  .action((id: string) => {
		console.log(`Reading task ${id}...`);
	  });

	commandLine
	  .command("schedule")
	  .description("Mark a task as complete")
	  .action((id: string) => {
		console.log(`Marking task ${id} as complete...`);
	  });

	commandLine.parse();
}
