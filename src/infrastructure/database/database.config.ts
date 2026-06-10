import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";


const sqliteDb = new Database(process.env.DB_FILE_NAME || "default.db");
export const db =  drizzle({ client: sqliteDb });
