import { drizzle } from "drizzle-orm/bun-sqlite";

export class DatabaseService {
	private database_instance;
	constructor() {
		try {
			this.database_instance = (drizzle("database.db"));
			console.log("Database connection initialized", this.isOk())
		} catch (error) {
			this.database_instance = null,
			console.log("Error init database connection", this.isOk());
			console.log(error, typeof(error));	
		}	 
	}
	public getDatabaseInstance() {
		return this.database_instance;
	}

	public isOk() {
		return this.database_instance !== null
	}
	public closeDatabaseConnection() {
		this.database_instance.$client.close();
		console.log("Database connection closed");
	}

	public isOpenDatabaseConnection() {
		return this.database_instance.$client.open;
	}

	public async initializeDatabase() {
		await this.database_instance.run(`CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			email TEXT NOT NULL UNIQUE,
			password TEXT NOT NULL,
			
			updated_at DATETIME,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)`);
		await this.database_instance.run(`CREATE TABLE IF NOT EXISTS tasks (
			id TEXT PRIMARY KEY AUTOINCREMENT,
			title TEXT NOT NULL,
			description TEXT,
			email TEXT NOT NULL UNIQUE,
			password TEXT NOT NULL,
			updated_at DATETIME,
			priotity TEXT NOT NULL,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)`);
		await this.database_instance.run(`CREATE TABLE IF NOT EXISTS projects (
			id TEXT PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			description TEXT NOT NULL UNIQUE,
			local_path TEXT,
			remote_path TEXT,
			has_version_control BOOL DEFAULT FALSE,
			version_control_type TEXT DEFAULT "none",
			updated_at DATETIME,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)`);
		await this.database_instance.run(`CREATE TABLE IF NOT EXISTS schedules (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			email TEXT NOT NULL UNIQUE,
			password TEXT NOT NULL,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)`);
		console.log("Database initialized");
	}
}
