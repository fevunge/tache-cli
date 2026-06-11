import { db } from "./database.config";

export class DatabaseService {
	private database_instance = db;
	constructor() {}

	public getDatabaseInstance() {
		return this.database_instance;
	}

	public async closeDatabaseConnection() {
		this.database_instance.$client.close();
	}

	public async isOpenDatabaseConnection() {
		return this.database_instance.$client.open;
	}

	public async initializeDatabase() {
		// create tables if not exist
		await this.database_instance.run(`CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			email TEXT NOT NULL UNIQUE,
			password TEXT NOT NULL,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)`);
		console.log("Database initialized");
	}
}