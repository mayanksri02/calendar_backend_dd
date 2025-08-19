const {Pool}=require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }  // <- needed for Render’s Postgres
});

module.exports=pool;