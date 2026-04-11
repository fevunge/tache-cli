import { ASCII_HEAD } from "@src/shared/const/head";
import { HELP_MESSAGE } from "@src/shared/const/help";
import { tokenaizer_args } from "@src/presentation/parser";

export const cli = () => {
	console.log(ASCII_HEAD);
  const args = process.argv.slice(2);
  console.log(tokenaizer_args(args));
}
