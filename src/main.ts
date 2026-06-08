import { cli } from "@src/presentation/cli/index";
import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Application started");
})

cli(eventEmitter);
