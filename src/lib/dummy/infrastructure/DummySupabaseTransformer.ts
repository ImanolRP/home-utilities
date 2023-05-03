import { Database } from '@/lib/config/supabase/Schema'
import { DummyEntity } from '../domain/DummyEntity'

type DummySupabase = Database['public']['Tables']['dummy']['Row']

export class DummySupabaseTransformer {

    transform(input : DummySupabase):DummyEntity{
        return new DummyEntity(
            input.id, 
            input.dummyInteger, 
            input.dummyString,
            (input.dummyDate === null) ? null : new Date(input.dummyDate),
            (input.dummyTimestamp === null) ? null : new Date(input.dummyTimestamp)
            );
    }

}