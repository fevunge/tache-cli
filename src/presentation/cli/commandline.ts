import { Command } from "commander";
import programData from "@resource/programData.json"; 

export const cli: Command = new Command();

cli.name(programData.name)
  .description(programData.description)
  .version(programData.version);