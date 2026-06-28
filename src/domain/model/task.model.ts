import { PriorityType } from "@src/domain/types/priority.type";
import { TaskTagType } from "@src/domain/types/task_tag.type";

export class TaskModel {
	private id: string;
	private title: string;
	private description: string[];
	private created_at: Date;
	private updated_at: Date | null;
	private priotity: PriorityType;
	private parent: TaskModel | null;
	private childreans: TaskModel[];
	private tags: TaskTagType[];
	
	public getTags(): TaskTagType[] {
		return this.tags;
	}
	public addTags(value: TaskTagType) {
		this.tags.push(value);
	}
		
	public getChildreans(): TaskModel[] {
		return this.childreans;
	}
	public addChildreans(value: TaskModel) {
		this.childreans.push(value);
	}
	
	
	public gePriotity(): PriorityType {
		return this.priotity;
	}
	public setPriotity(value: PriorityType) {
		this.priotity = value;
	}

	public getParent(): TaskModel | null {
		return this.parent;
	}
	public setParent(value: TaskModel | null) {
		this.parent = value;
	}
	
	constructor(title: string, ) {
		this.id = "generate_id";
		this.title = title;
		this.priotity = 3;
		this.description = [];
		this.tags = [];
		this.childreans = [];
		this.created_at = new Date(Date.now());
		this.updated_at = null;
		this.parent = null;
	}

	public getCreated_at(): Date {
		return this.created_at;
	}
	public setCreated_at(value: Date) {
		this.created_at = value;
	}

	public getUpdated_at(): Date | null {
		return this.updated_at;
	}
	public setUpdated_at(value: Date) {
		this.updated_at = value;
	}
	public getId() : string {
		return this.id;
	}
	public getTitle() : string {
		return this.title;
	}

	public setId(id: string) : void {
		if (!this.id) {
			this.id = id;
		}
	}

	public setTitle(title: string) : void {
		this.title = title;
	}

	public getDescription(): string[] {
		return this.description;
	}
	public addDescription(value: string) {
		this.description.push(value);
	}


}