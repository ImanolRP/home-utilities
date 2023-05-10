import { type DummyRepositoryInterface } from '@/lib/dummy/domain/DummyRepositoryInterface'
import { type dbConnection } from '@/lib/config/supabase/SupabaseConfig'
import { DummyEntity } from '../domain/DummyEntity'
import { type Database } from '@/lib/config/supabase/Schema'

export type DummySupabase = Database['public']['Tables']['dummy']['Row']

export class DummySupabaseRepository implements DummyRepositoryInterface {
  constructor (
    private readonly client: typeof dbConnection
  ) {}

  async getDummyById (id: string): Promise<DummyEntity | null> {
    const { data } = await this.client
      .from('dummy')
      .select('*')
      .eq('id', id)
      .single()

    if (data === null) {
      return null
    }
    return this.transform(data)
  }

  private transform (input: DummySupabase): DummyEntity {
    return new DummyEntity(
      input.id,
      input.dummyInteger,
      input.dummyString,
      (input.dummyDate === null) ? null : new Date(input.dummyDate),
      (input.dummyTimestamp === null) ? null : new Date(input.dummyTimestamp)
    )
  }
}
