export type GetDummyByIdDto = {
    id : string
    dummyInteger: number | null
    dummyString: string | null
    dummyTimestamp: string | null
    status: 'ok'
} | {
    status : 'error'
    message: 'not found' | 'duplicated'
}