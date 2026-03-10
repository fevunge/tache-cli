import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import { OSService } from "../../shared/utils/os.service";

if (OSService.getOSPlatform() === "win32") {
  const dbPath = path.join(OSService.getHomeDirectory(), "tache.sqlite");
  if (!fs.existsSync(dbPath)) {
	fs.copyFileSync("./src/infrastructure/database/tache.sqlite", dbPath);
  }
}

export const sequelizeClient = new Sequelize({
  dialect: "sqlite",
  storage: "./src/infrastructure/database/tache.sqlite",
});