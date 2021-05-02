import type { NextApiRequest, NextApiResponse } from 'next'
import productsResponse from './products-response.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json(productsResponse)
  }
}
