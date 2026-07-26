import { PriorityType } from "@src/domain/types/priority.type";
import { TaskTagType } from "@src/domain/types/task_tag.type";
import { randomUUID } from "crypto";

export class TaskModel {
	private id: string;
  private title: string;
  private done: boolean;
	private note: string;
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

	public geDone(): boolean {
		return this.done;
	}
  public setDone(value: boolean) {
    if (value)
      this.done = value;
	}
	
	public gePriotity(): PriorityType {
		return this.priotity;
	}
  public setPriotity(value: PriorityType) {
    if (value)
      this.priotity = value;
	}

	public getParent(): TaskModel | null {
		return this.parent;
	}
	public setParent(value: TaskModel | null) {
		this.parent = value;
	}
	
	constructor() {
		this.id = randomUUID();
    this.title = undefined;
    this.done = false;
		this.priotity = "NORMAL";
		this.note = "";
		this.tags = [];
		this.childreans = [];
		this.created_at = new Date(Date.now());
		this.updated_at = null;
		this.parent = null;
  }

  public toString() {
  console.log(this.id)
  console.log(this.title);
  console.log(this.done);
	console.log(this.priotity);
	console.log(this.note);
	console.log(this.tags);
	console.log(this.childreans);
	console.log(this.created_at);
	console.log(this.updated_at);
	console.log(this.parent); 
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

	public getNote(): string {
		return this.note;
	}
  public addNote(value: string) {
    if (this.note.length < 1)
      this.note += `${value}`
    else 
      this.note += `\n ${value}`
	}

  public setNote(value: string | undefined) {
    this.note = value || this.note;
	}
}