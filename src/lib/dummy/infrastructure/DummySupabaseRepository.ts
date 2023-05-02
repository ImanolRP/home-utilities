import { DummyRepositoryInterface } from "@/lib/dummy/domain/DummyRepositoryInterface";
import { dbConnection } from '@/lib/config/supabase/SupabaseConfig'
import { DummyEntity } from "../domain/DummyEntity";
import { DummySupabaseTransformer } from "./DummySupabaseTransformer";

export class DummyRepositoryImpl implements DummyRepositoryInterface {
    
    constructor(
        private transformer: DummySupabaseTransformer    
    ){}

    async getDummyById(id: string): Promise<DummyEntity | null> {
        const { data, error } = await dbConnection
        .from('dummy')
        .select('*')
        .eq('id', id)
        .single()

        if(data === null){
            return null;
        }
        return this.transformer.transform(data);
    }

}
