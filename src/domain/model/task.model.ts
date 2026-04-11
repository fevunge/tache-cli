export class TaskModel {
	private id: string;
	private title: string;
	private description: string[];
	constructor(id: string, title: string, description: string[]) {
		
		this.id = id;
		this.title = title;
		this.description = description;
	}

	
	public getId() : string {
		return this.id;
	}

	public getTitle() : string {
		return this.title;
	}

	public getDescription() : string[] {
		return this.description;
	}

	public setId(id: string) : void {
		if (!this.id) {
			this.id = id;
		}
	}

	public setTitle(title: string) : void {
		this.title = title;
	}

	public setDescription(description: string[]) : void {
		this.description = description;
	}
	
}