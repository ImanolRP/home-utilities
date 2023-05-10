import { DummyEntity } from '@/lib/dummy/domain/DummyEntity'
import { type dbConnection } from '@/lib/config/supabase/SupabaseConfig'
import { DummySupabaseRepository } from '@/lib/dummy/infrastructure/DummySupabaseRepository'

describe('@/lib/dummy/infrastructure/DummySupabaseRepository', () => {
  it('Should return dummy by id', async () => {
    const eq = jest.fn().mockImplementation(() => client)
    const client = {
      from: () => client,
      select: () => client,
      eq,
      single: () => ({
        data: {
          id: '416334ae-e8ff-11ed-a05b-0242ac120003',
          dummyInteger: 9999,
          dummyString: 'test',
          dummyDate: '2023-05-02T00:00:00.000Z',
          dummyTimestamp: '2023-05-02T15:37:08.000Z'
        }
      })
    } as unknown as typeof dbConnection
    const repository = new DummySupabaseRepository(client)

    const response = await repository.getDummyById('416334ae-e8ff-11ed-a05b-0242ac120003')

    expect(eq).toHaveBeenCalledWith('id', '416334ae-e8ff-11ed-a05b-0242ac120003')
    expect(response).toEqual(
      new DummyEntity(
        '416334ae-e8ff-11ed-a05b-0242ac120003',
        9999,
        'test',
        new Date('2023-05-02T00:00:00.000Z'),
        new Date('2023-05-02T15:37:08.000Z')
      ))
  })
  it('Should return null when not found', async () => {
    const client = {
      from: () => client,
      select: () => client,
      eq: () => client,
      single: () => ({
        data: null
      })
    } as unknown as typeof dbConnection
    const repository = new DummySupabaseRepository(client)

    const response = await repository.getDummyById('non-existent-id')

    expect(response).toEqual(null)
  })
})
