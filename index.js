import express from 'express'
import pg from 'pg'
const { Pool } = pg

const app = express()

const pool = new Pool({
  host: 'localhost',
  // Docker credentials
  port: 5173,
  user: 'postgres',
  password: 'mypasswd123' 
})

const response = await pool.query('SELECT 1 + 1')
console.log(response);

app.listen(3000)
console.log("Server on port 3000");