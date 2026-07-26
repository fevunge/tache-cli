import { TaskModel } from "@src/domain/model/task.model";
import { AddTaskCmdDto } from "@src/presentation/dto/add_task_cmd.dto";

export interface TaskUsecases {
	add(option: AddTaskCmdDto): void;
	addFromFile(options: AddTaskCmdDto): void;
	update(id: string, newTitle: string): TaskModel;
	remove(id: string): TaskModel;
}