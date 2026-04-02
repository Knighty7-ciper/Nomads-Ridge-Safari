import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

const ADMIN_EMAIL = 'bknglabs.dev@gmail.com'

async function verifyAuth(request: Request) {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '')
  return token === localStorage?.getItem?.('admin_token') || token === process.env.ADMIN_TOKEN
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!verifyAuth(request)) return new Response('Unauthorized', { status: 401 })

    const data = await request.json()
    const { data: result, error } = await supabase
      .from('destinations')
      .update(data)
      .eq('id', params.id)
      .select()

    if (error) return new Response(error.message, { status: 400 })
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!verifyAuth(request)) return new Response('Unauthorized', { status: 401 })

    const { error } = await supabase.from('destinations').delete().eq('id', params.id)

    if (error) return new Response(error.message, { status: 400 })
    return new Response('Deleted successfully', { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}
