import { GetDummyById } from '@/lib/dummy/application/GetDummyById'
import { DummyRepositoryImpl } from '@/lib/dummy/infrastructure/DummySupabaseRepository'
import { DummySupabaseTransformer } from '@/lib/dummy/infrastructure/DummySupabaseTransformer'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {

    const getDummyById = new GetDummyById(new DummyRepositoryImpl(new DummySupabaseTransformer()));

    const id = req.query['id']
    if(id === undefined){
      res.status(200).json({ name: 'Is undefined' })
      return  
    }
    if(Array.isArray(id)){
      res.status(200).json({ name: 'Is array' })
      return
    }
    console.log(id)
    res.status(200).json(await getDummyById.get(id))
  }
  