import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { LocalApplicationService } from "@src/infrastructure/device/local-application.service";
const localApplicationService = new LocalApplicationService();

let db: ReturnType<typeof drizzle>;
(async () => {
  const sqliteDb = new Database(await localApplicationService.getLocalApplication() + "/database.db");
  sqliteDb.pragma("journal_mode = WAL");
  sqliteDb.pragma("synchronous = NORMAL");
  sqliteDb.pragma("cache_size = -64000");
  sqliteDb.pragma("locking_mode = EXCLUSIVE");
  sqliteDb.pragma("temp_store = MEMORY");
  sqliteDb.pragma("mmap_size = 30000000000");
  
  db = drizzle({ client: sqliteDb });
})();

export { db };

