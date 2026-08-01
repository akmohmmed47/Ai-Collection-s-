import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { category, featured, search } = req.query;
      let query = supabase.from('products').select('*');

      if (category && category !== 'all') {
        query = query.eq('category', category);
      }
      if (featured === 'true') {
        query = query.eq('featured', true);
      }
      if (search) {
        query = query.ilike('name', `%${search}%`);
      }

      const { data, error } = await query.order('created_at', { ascending: false });
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === 'POST') {
      const { name, description, price, discount_price, category, image_url, featured } = req.body;
      const payload = { name, description, price, category, image_url, featured };
      if (discount_price !== undefined && discount_price !== null && discount_price !== '') {
        payload.discount_price = Number(discount_price);
      }

      let { data, error } = await supabase.from('products').insert(payload).select().single();
      if (error && error.message && error.message.includes('discount_price')) {
        delete payload.discount_price;
        const result = await supabase.from('products').insert(payload).select().single();
        data = result.data;
        error = result.error;
      }
      if (error) throw error;
      return res.status(201).json(data);
    }

    if (req.method === 'PUT') {
      const { id, ...updates } = req.body;
      const payload = { ...updates };
      if (payload.discount_price !== undefined && payload.discount_price !== null && payload.discount_price !== '') {
        payload.discount_price = Number(payload.discount_price);
      } else if (payload.discount_price === '' || payload.discount_price === null) {
        delete payload.discount_price;
      }

      let { data, error } = await supabase.from('products').update(payload).eq('id', id).select().single();
      if (error && error.message && error.message.includes('discount_price')) {
        delete payload.discount_price;
        const result = await supabase.from('products').update(payload).eq('id', id).select().single();
        data = result.data;
        error = result.error;
      }
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === 'DELETE') {
      const { id } = req.body;
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
