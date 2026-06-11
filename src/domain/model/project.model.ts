import { VersionControlType } from "@src/domain/types/version_controll.type";
import { ContributorModel } from "./contributor.model";

export class ProjectModel {
	private id: string;
	private name: string;
	private description: string;
	private path_or_url: string;
	private has_version_control: boolean = false;
	private version_control_type: VersionControlType = "none";
	private contributors: ContributorModel[] = [];


	constructor(id: string, name: string, description: string, path_or_url: string, has_version_control: boolean, version_control_type: VersionControlType) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.path_or_url = path_or_url;
		this.has_version_control = has_version_control;
		this.version_control_type = version_control_type;
	}

	public getId() : string {
		return this.id;
	}
	public getName() : string {
		return this.name;
	}
	public getDescription() : string {
		return this.description;
	}

	public setId(id: string) : void {
		if (!this.id) {
			this.id = id;
		}
	}

	public setName(name: string) : void {
		this.name = name;
	}

	public setDescription(description: string) : void {
		this.description = description;
	}	
}	