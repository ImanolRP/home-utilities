export type GetDummyByIdDto = {
  id: string
  dummyInteger: number | null
  dummyString: string | null
  dummyDate: Date | null
  dummyTimestamp: Date | null
  status: 'ok'
} | {
  status: 'error'
  message: 'not found' | 'duplicated'
}
