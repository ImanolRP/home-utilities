import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/config/supabase/Schema'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
)

export const dbConnection = createBrowserSupabaseClient<Database>()

export type Dummy = Database['public']['Tables']['test']['Row']