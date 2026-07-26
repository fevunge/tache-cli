import { Argument, Command } from "commander";
import { AddTaskCmdDto, AddTaskCmmdSchema } from "../dto/add_task_cmd.dto";
import { TaskService } from "@src/application/service/task.service";
import { TaskModel } from "@src/domain/model/task.model";
import { ZodError, ZodRealError } from "zod";
import { readJson } from "fs-extra";
import { validFileType } from "@src/application/validation/file.validation";

const taskService = new TaskService();

const addTaskCommand = new Command("add")
  .description("Add a new task")
  .addArgument(new Argument("<title>", "The task's title").argOptional())
  .option("-T, --title <title>", "The task's title")
  .option("-f, --file <file>", "Specify a file to read task details from")
  .option("-n, --note <note>", "Set the description of the task")
  .option("-D, --done", "Mark the task as complete", false)
  .option("-t, --tags <tags>", "Set a array of tags")
  .option("-p, --priority <priority>", "Set priority of the task", "NORMAL")
  .action(async (title: string, options: AddTaskCmdDto) => {
    const cmmdSchema = AddTaskCmmdSchema.safeParse(options);
    if (cmmdSchema.success) {
      options.title = (title && title.length > 0 ) ? title : options.title;
      if (cmmdSchema.data.file && validFileType(cmmdSchema.data.file))
        taskService.addFromFile(cmmdSchema.data);
      else
        taskService.add(cmmdSchema.data);
    } else {
      console.log(cmmdSchema.error._zod.def);
    }
  });

export function taskCommand(): Command {
  const taskCommand = new Command("task")
    .description("Manage tasks")
    .addCommand(addTaskCommand);
  return taskCommand;
}
