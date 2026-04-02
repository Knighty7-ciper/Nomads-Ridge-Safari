import mysql from 'mysql2/promise'
import { Pool } from 'mysql2/promise'

let pool: Pool

export async function getPool(): Promise<Pool> {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'nomads_ridge',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelayMs: 0,
    })
  }
  return pool
}

export async function query(sql: string, values?: any[]) {
  const pool = await getPool()
  const connection = await pool.getConnection()
  try {
    const [results] = await connection.execute(sql, values)
    return results
  } finally {
    connection.release()
  }
}

export async function getConnection() {
  const pool = await getPool()
  return await pool.getConnection()
}
