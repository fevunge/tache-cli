import { TaskModel } from "@src/domain/model/task.model";
import { TaskQueries } from "../queries/task.queries";
import { TaskUsecases } from "../usecases/task.usecases";
import { AllowedFileType } from "@src/shared/types/allowed_files.type";
import { validFileType } from "../validation/file.validation";
import { getFileContent } from "@src/domain/service/file_content.service";


export class TaskService implements TaskUsecases, TaskQueries {
	addFromFile(fileName: string): TaskModel | null {
		const fileType: AllowedFileType | null = validFileType(fileName);
		if (fileType === null) {
			(async () => {
				let fileContent: string | null = await getFileContent(fileName);
				console.log(fileContent);
			});
			return (new TaskModel("null"));
		} else {
			console.log("Creating from a " + fileType + " file type");
			return (new TaskModel("example"));
		}
	}

	public get(id: string): TaskModel {
		throw new Error("Method not implemented.");
	}
	public all(): TaskModel[] {
		throw new Error("Method not implemented.");
	}
	public add(title: string,): TaskModel {
		throw new Error("Method not implemented.");
	}
	public update(id: string, newTitle: string): TaskModel {
		throw new Error("Method not implemented.");
	}
	public remove(id: string): TaskModel {
		throw new Error("Method not implemented.");
	}
	
}