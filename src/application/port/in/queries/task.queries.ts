import { TaskModel } from "@src/domain/model/task.model";

export interface TaskQueries {
	get(id: string): TaskModel;
	all(): TaskModel[];
}