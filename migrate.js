import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

async function migrate() {
  await client.connect();
  try {
    await client.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS discount_price numeric;`);
    console.log('Column discount_price added successfully');
  } catch (err) {
    console.error('Migration error:', err.message);
  } finally {
    await client.end();
  }
}

migrate();
