import { Command } from "commander";
import { hello } from "@vlogging";
import { command_line_interface } from "./presentation/cli";
import { cli } from "@src/presentation/cli/commandline";
 

const commander: Command = cli;
hello();
command_line_interface(commander);



