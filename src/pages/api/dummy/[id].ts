import { dbConnection } from '@/lib/config/supabase/SupabaseConfig'
import { GetDummyById } from '@/lib/dummy/application/GetDummyById'
import { DummySupabaseRepository } from '@/lib/dummy/infrastructure/DummySupabaseRepository'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const getDummyById = new GetDummyById(new DummySupabaseRepository(dbConnection))

  const id = req.query.id
  if (id === undefined) {
    res.status(200).json({ name: 'Is undefined' })
    return
  }
  if (Array.isArray(id)) {
    res.status(200).json({ name: 'Is array' })
    return
  }
  console.log(id)
  res.status(200).json(await getDummyById.get(id))
}
