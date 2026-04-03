import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'nomads_ridge'
};

async function verifyAuth(request: Request) {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  return token?.startsWith('admin_token_');
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!await verifyAuth(request)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();

    // Security: Only allow updating specific safe columns
    const allowedFields = ['title', 'image_url', 'description', 'category', 'alt_text', 'order']; // ← Add all columns you want to allow

    const updateKeys = Object.keys(data).filter(key => allowedFields.includes(key));
    if (updateKeys.length === 0) {
      return new Response(JSON.stringify({ error: 'No valid fields to update' }), { status: 400 });
    }

    const updateValues = updateKeys.map(key => data[key as keyof typeof data]);
    const updateStr = updateKeys.map(k => `${k} = ?`).join(', ');

    const connection = await mysql.createConnection(dbConfig);

    // FIXED: Use .query() instead of .execute() for dynamic SQL to satisfy TypeScript
    await connection.query(
      `UPDATE gallery SET ${updateStr} WHERE id = ?`,
      [...updateValues, id]
    );

    await connection.end();

    return new Response(JSON.stringify({ id, ...data }), { status: 200 });
  } catch (error) {
    console.error('Update error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!await verifyAuth(request)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { id } = await params;
    const connection = await mysql.createConnection(dbConfig);

    await connection.execute('DELETE FROM gallery WHERE id = ?', [id]);

    await connection.end();

    return new Response('Deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Delete error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}