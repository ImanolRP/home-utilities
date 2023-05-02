import { DummyRepositoryInterface } from "@/lib/dummy/domain/DummyRepositoryInterface"
import { GetDummyByIdDto } from "@/lib/dummy/application/GetDummyByIdDto";
import { DummyEntity } from "../domain/DummyEntity";

export class GetDummyById {

    constructor (
        private repository: DummyRepositoryInterface
    ){ }

    async get(id: string) : Promise<GetDummyByIdDto> {
        const entity = await this.repository.getDummyById(id)
        if(entity === null){
            return {
                status: "error",
                message: "not found"
            }
        }
        return this.transformer(entity)
    }

    private transformer(input :DummyEntity): GetDummyByIdDto{
        return {
            id: input.id,
            dummyInteger: input.dummyInteger,
            dummyString: input.dummyString,
            dummyTimestamp: input.dummyTimestamp,
            status: "ok"
        }
    }

}