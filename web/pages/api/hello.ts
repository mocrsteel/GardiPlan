import { NextApiRequest, NextApiResponse } from 'next'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case 'POST':
      res.status(200).json({text: 'Hello POST.'})
      break
    case 'GET':
      res.status(200).json({text: 'Hello GET.'})
      break
    default:
      res.status(405).json({text: 'Method not allowed.'})
  }
}

export default handler
