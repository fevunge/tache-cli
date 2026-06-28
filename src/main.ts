import { LocalApplicationService } from "./infrastructure/device/local-application.service";
import { Command } from "commander";
import { command_line_interface } from "./presentation/cli";
import { cli } from "@src/presentation/cli/commandline";
 
const localApplicationService: LocalApplicationService = new LocalApplicationService();
const commander: Command = cli;
localApplicationService.createLocalApplicationFolder();
command_line_interface(commander);
