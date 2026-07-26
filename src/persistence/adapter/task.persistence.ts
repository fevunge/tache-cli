import { database } from "@src/infrastructure/database/database.connection";
import { drizzle } from "drizzle-orm/bun-sqlite";

export class TaskPersistenceAdapter {
	private db = database.getDatabaseInstance();

	constructor () {
		
	}

}