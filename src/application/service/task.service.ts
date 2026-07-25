import { TaskModel } from "@src/domain/model/task.model";
import { TaskQueries } from "../port/in/queries/task.queries";
import { TaskUsecases } from "../port/in/usecases/task.usecases";
import { AllowedFileEnum, AllowedFileType } from "@src/shared/types/allowed_files.type";
import { validFileType } from "../validation/file.validation";
import { getFileContent } from "@src/domain/service/file_content.service";
import { AddTaskCmdDto, AddTaskCmmdSchema } from "@src/presentation/dto/add_task_cmd.dto";
import { readJson } from "fs-extra";


export class TaskService implements TaskUsecases, TaskQueries {
  public addFromFile(options: AddTaskCmdDto): void {
    if (options.file) {
      const fileType: AllowedFileType | null = validFileType(options.file);
      const task = new TaskModel();
      if (fileType == AllowedFileEnum.JSON) {
        (async () => {
          const jsonContent = await readJson(options.file!);
          const jsonParsed = AddTaskCmmdSchema.safeParse(jsonContent);
          if (jsonParsed.success) {
            if (jsonParsed.data.title || options.title) {
              console.log("Error, title is required");
            }
            task.setTitle(jsonParsed.data.title || options.title || "");
            task.setDone(jsonParsed.data.done || options.done || false);
            task.setNote(jsonParsed.data.note || options.note);
            task.setPriotity(jsonParsed.data.priority || options.priority || "NORMAL");
            task.toString();
          } else {
            console.log(jsonParsed.error._zod.def);
          }
        })();
      } else if (fileType == AllowedFileEnum.CSV) {
        console.log("Creating from a " + fileType + " file type");
      }
    }
	}

	public get(id: string): TaskModel {
		throw new Error("Method not implemented.");
	}
	public all(): TaskModel[] {
		throw new Error("Method not implemented.");
	}
	public add(option: AddTaskCmdDto): void {
		throw new Error("Method not implemented.");
	}
	public update(id: string, newTitle: string): TaskModel {
		throw new Error("Method not implemented.");
	}
	public remove(id: string): TaskModel {
		throw new Error("Method not implemented.");
	}
	
}