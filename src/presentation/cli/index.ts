import { Command } from "commander";
import { taskCommand } from "../command/task.command";
import { aboutCommand } from "../command/about.command";
import { projectCommand } from "../command/project.command";
import { meCommand } from "../command/me.command";
import { scheduleCommand } from "../command/schedule.command";

export const command_line_interface = (commandLine: Command) => {
	commandLine.addCommand(taskCommand());
	commandLine.addCommand(aboutCommand());
	commandLine.addCommand(projectCommand());
	commandLine.addCommand(meCommand());
	commandLine.addCommand(scheduleCommand());
	commandLine.parse();
}
