import { Database } from '@/lib/config/supabase/Schema'
import { dbConnection, Dummy } from '@/lib/config/supabase/SupabaseConfig'

// type Dummy = Database['public']['Tables']['test']['Row']

export default function DummyFunction() {

    const fetchDummy = async () => {
        let { data: result, error } = await dbConnection
        .from('test')
        .select('*')

        if (error) console.log('error', error)
        else if(result) console.log({result, error})
        else console.log('asdf')
    }

    fetchDummy()
}

