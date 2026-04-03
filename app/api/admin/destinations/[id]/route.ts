import mysql from 'mysql2/promise'

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'nomads_ridge'
}

async function verifyAuth(request: Request) {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '')
  return token?.startsWith('admin_token_')
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!await verifyAuth(request)) return new Response('Unauthorized', { status: 401 })

    const { id } = await params
    const data = await request.json()
    const connection = await mysql.createConnection(dbConfig)
    const updateKeys = Object.keys(data)
    const updateValues = Object.values(data)
    const updateStr = updateKeys.map(k => `${k} = ?`).join(', ')

    await connection.query(`UPDATE destinations SET ${updateStr} WHERE id = ?`, [...updateValues, id])
    await connection.end()

    return new Response(JSON.stringify({ id, ...data }), { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!await verifyAuth(request)) return new Response('Unauthorized', { status: 401 })

    const { id } = await params
    const connection = await mysql.createConnection(dbConfig)
    await connection.execute('DELETE FROM destinations WHERE id = ?', [id])
    await connection.end()

    return new Response('Deleted successfully', { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}
