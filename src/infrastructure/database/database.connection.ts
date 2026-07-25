import { DatabaseService } from "./database.service";

const database = new DatabaseService();

(async () => {
	database.initializeDatabase();
})();

export { database }