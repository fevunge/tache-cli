import { TaskModel } from "@src/domain/model/task.model";
import { SavedTaskDto } from "@src/persistence/dto/saved_task.dto";
import { UniqueTaskDto } from "@src/persistence/dto/unique_task.dto";

export interface TaskRespository {
	save(task: TaskModel): SavedTaskDto;
	load(task: UniqueTaskDto): TaskModel | null;
	loadAll(): TaskModel[]
}