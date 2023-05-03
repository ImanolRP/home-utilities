export class DummyEntity {

    constructor(
        public readonly id : string,
        public readonly dummyInteger: number | null,
        public readonly dummyString: string | null,
        public readonly dummyDate: Date | null,
        public readonly dummyTimestamp: Date | null
    ){}

}