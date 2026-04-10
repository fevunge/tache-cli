import { TITLE } from "./head";

export const HELP_MESSAGE = `
${TITLE}
Usage: tache [options] <command>

Options:
  -h, --help     display help for command

Commands:
  init           Initialize a new Tache project
  add            Add a new task to the Tache project
  list           List all tasks in the Tache project
  complete       Mark a task as completed
  delete         Delete a task from the Tache project
  help [command] display help for command
`;