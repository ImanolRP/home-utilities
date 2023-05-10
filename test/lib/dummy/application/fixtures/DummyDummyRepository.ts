import { DummyEntity } from "@/lib/dummy/domain/DummyEntity";
import { DummyRepositoryInterface } from "@/lib/dummy/domain/DummyRepositoryInterface";

export class DummyDummyRepository implements DummyRepositoryInterface {
    
    constructor(
        private readonly response: DummyDtoResponse,   
    ){}

    getDummyById(id: string): Promise<DummyEntity | null> {
        throw new Error("Method not implemented.");
    }

}
