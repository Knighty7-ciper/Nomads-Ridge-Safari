import mysql from 'mysql2/promise';
import type { Pool, PoolConnection } from 'mysql2/promise';

let pool: Pool | null = null;

export async function getPool(): Promise<Pool> {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'nomads_ridge',

      // Connection pool settings
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      maxIdle: 10,                    // Recommended
      idleTimeout: 60000,             // 60 seconds

      // Keep-alive settings (FIXED)
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,       // ← Correct property name (was keepAliveInitialDelayMs)
    });
  }
  return pool;
}

// Recommended: Simple query helper (most common use case)
export async function query<T = any>(
  sql: string, 
  values?: any[]
): Promise<T> {
  const dbPool = await getPool();
  const [results] = await dbPool.execute(sql, values);
  return results as T;
}

// Get a single connection when you need more control (transactions, etc.)
export async function getConnection(): Promise<PoolConnection> {
  const dbPool = await getPool();
  return await dbPool.getConnection();
}

// Optional: Close pool (useful for tests or graceful shutdown)
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}