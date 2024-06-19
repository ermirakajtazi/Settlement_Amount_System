const sqlite3 = require("sqlite3");
const { openDb } = require("./database");

async function setup() {
  // Open SQLite connection
  const db = await openDb();

  // Table schema
  await db.exec(`
    CREATE TABLE SettlementAmount  (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  
      amount INTEGER,
      isObjection TEXT  
    );
  `);
  
  await db.run(
    "INSERT INTO SettlementAmount (amount, isObjection) VALUES (?, ?)",
    0,
    'pending'
  );

  const data = await db.all("SELECT * FROM SettlementAmount");

  console.log("Inserted Data:", data);

  // Close connection
  await db.close();
}

setup().catch((err) => {
  console.error(err.message);
});
