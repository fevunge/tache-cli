import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import { OSService } from "../../shared/utils/os.service";

let dbPath: string;

if (OSService.getOSPlatform() === "win32") {
  dbPath = path.join(OSService.getHomeDirectory(), ".config", "tache.sqlite");
} else if (OSService.getOSPlatform() === "darwin") {
  dbPath = path.join(OSService.getHomeDirectory(), "Library", "Application Support", "tache.sqlite");
} else {
  dbPath = path.join(OSService.getHomeDirectory(), ".config", "tache.sqlite");
}

export const sequelizeClient = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});