// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../middleware/mongodb';
import { Article } from '../../schema-modals';
import { ResponseFuncs } from '../../src/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const response = await Article.distinct('category').catch(catcher);
      return res.json(response);
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) return response(req, res);
  else return res.status(400).json({ error: 'No Response for This Request' });
};

export default connectDB(handler);
