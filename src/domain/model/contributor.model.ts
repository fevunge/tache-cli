import { EmailType } from "../types/email.type";

export class ContributorModel {
	private id: string;
	private name: string;
	private email: EmailType;
	private projectId: string;

	constructor(id: string, name: string, email: EmailType, projectId: string) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.projectId = projectId;
	}

	public getId() : string {
		return this.id;
	}
	public getName() : string {
		return this.name;
	}
	public getEmail() : EmailType {
		return this.email;
	}
	public getProjectId() : string {
		return this.projectId;
	}

	public setId(id: string) : void {
		if (!this.id) {
			this.id = id;
		}
	}

	public setName(name: string) : void {
		this.name = name;
	}

	public setEmail(email: EmailType) : void {
		this.email = email;
	}	
}
