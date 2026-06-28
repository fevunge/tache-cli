import { TaskModel } from "@src/domain/model/task.model";

export interface TaskUsecases {
	add(title: string): TaskModel;
	addFromFile(file: string): TaskModel | null;
	update(id: string, newTitle: string): TaskModel;
	remove(id: string): TaskModel;
}