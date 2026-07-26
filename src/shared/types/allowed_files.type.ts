export enum AllowedFileEnum  {
	CSV,
	JSON,
	YAML
}

export type CSVFileType = AllowedFileEnum.CSV | "csv" | "CSV"
export type JSONFileType = AllowedFileEnum.JSON | "json" | "JSON"
export type YAMLFileType = AllowedFileEnum.YAML | "yaml" | "CSV"

export type AllowedFileType = CSVFileType | JSONFileType | YAMLFileType