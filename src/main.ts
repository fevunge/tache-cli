import { Command } from "commander";
import { command_line_interface } from "./presentation/cli";
import { cli } from "@src/presentation/cli/commandline";
 

const commander: Command = cli;
command_line_interface(commander);



