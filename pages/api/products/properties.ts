import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json([
      { label: 'Product', name: 'name' },
      { label: 'Tags', name: 'tags' },
      { label: 'Energy', name: 'energy' },
      { label: 'Protein', name: 'protein' },
      { label: 'Fat', name: 'fat' },
      { label: 'Carbohydrate', name: 'carbohydrate' },
      { label: 'Sugars', name: 'sugars' },
      { label: 'Dietary Fibre', name: 'dietaryFibre' },
      { label: 'Sodium', name: 'sodium' }
    ])
  }
}
