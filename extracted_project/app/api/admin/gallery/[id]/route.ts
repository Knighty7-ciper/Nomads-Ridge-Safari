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

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!await verifyAuth(request)) return new Response('Unauthorized', { status: 401 })

    const data = await request.json()
    const connection = await mysql.createConnection(dbConfig)
    const updateKeys = Object.keys(data)
    const updateValues = Object.values(data)
    const updateStr = updateKeys.map(k => `${k} = ?`).join(', ')

    await connection.execute(`UPDATE gallery SET ${updateStr} WHERE id = ?`, [...updateValues, params.id])
    await connection.end()

    return new Response(JSON.stringify({ id: params.id, ...data }), { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!await verifyAuth(request)) return new Response('Unauthorized', { status: 401 })

    const connection = await mysql.createConnection(dbConfig)
    await connection.execute('DELETE FROM gallery WHERE id = ?', [params.id])
    await connection.end()

    return new Response('Deleted successfully', { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}
