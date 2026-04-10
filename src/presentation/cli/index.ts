import { ASCII_HEAD } from "@src/shared/const/head";
import { HELP_MESSAGE } from "@src/shared/const/help";

export const cli = () => {
	console.log(ASCII_HEAD);
	console.log("process.argv: ", process.argv);
	console.log(HELP_MESSAGE);
}