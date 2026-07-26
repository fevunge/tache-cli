import { CSVFILETYPE, JSONFILETYPE, YAMLFILETYPE } from "@src/shared/const/allowed_file_type.const";
import { AllowedFileEnum, AllowedFileType } from "@src/shared/types/allowed_files.type";

export function validFileType(fileName: string): AllowedFileType | null {
	if (fileName.split(".").pop()?.toLocaleLowerCase() == (CSVFILETYPE))
		return AllowedFileEnum.CSV
	if (fileName.split(".").pop()?.toLocaleLowerCase() == (JSONFILETYPE))
		return AllowedFileEnum.JSON
	if (fileName.split(".").pop()?.toLocaleLowerCase() == (YAMLFILETYPE))
		return AllowedFileEnum.YAML
	return null
}