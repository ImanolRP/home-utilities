import { DummyEntity } from "@/lib/dummy/domain/DummyEntity";

export interface DummyRepositoryInterface {

    getDummyById(id: string): Promise<DummyEntity | null>

}
