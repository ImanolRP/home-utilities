import { GetDummyByIdDto } from "@/lib/dummy/application/GetDummyByIdDto"
import { GetDummyById } from "@/lib/dummy/application/GetDummyById"
import { DummyRepositoryInterface } from "@/lib/dummy/domain/DummyRepositoryInterface"
import { DummyEntity } from "@/lib/dummy/domain/DummyEntity"

describe('@/lib/dummy/application/GetDummyById', () =>{

    it('Should return dummy by id', async () => {
        const mockRepository = <DummyRepositoryInterface>{
            getDummyById: () => 
                Promise.resolve(
                    new DummyEntity(
                        '416334ae-e8ff-11ed-a05b-0242ac120003',
                        9999, 
                        'test',
                        new Date('2023-05-02T00:00:00.000Z'),
                        new Date('2023-05-02T15:37:08.000Z')
                    )
                )
            }
        const useCase = new GetDummyById(mockRepository)

        const response = await useCase.get('416334ae-e8ff-11ed-a05b-0242ac120003')

        expect(response)
            .toEqual(
                <GetDummyByIdDto>{id: '416334ae-e8ff-11ed-a05b-0242ac120003',
                    dummyInteger: 9999,
                    dummyString: 'test',
                    dummyDate: new Date('2023-05-02T00:00:00.000Z'),
                    dummyTimestamp: new Date('2023-05-02T15:37:08.000Z'),
                    status: 'ok'
                })
    })
})