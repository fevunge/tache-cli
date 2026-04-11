import { CommandDTO } from "@src/shared/types/command.dto";
import { HELP_MESSAGE } from "@src/shared/const/help";

export const COMMANDS = ['add', 'list', 'read', 'done'];

export function tokenaizer_args(args: string[]): CommandDTO | null
{
  if (args.length === 0)
    return null;
  if (COMMANDS.includes(args[0])) {
    return {
      command: args[0],
      args: args.slice(1),
      options: []
    }
  } else {
    console.log(HELP_MESSAGE);
    return null;
  }
}

export function parser_command(command: CommandDTO): undefined {
  return undefined; 
}
