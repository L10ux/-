import { createClient } from '@supabase/supabase-js'

// Vercel передаст сюда ваши секретные ключи из настроек
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
