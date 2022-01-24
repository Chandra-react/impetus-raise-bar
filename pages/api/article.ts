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
      const language = req.query.language || 'en';
      const limit: number = +req.query?.limit || 20;
      const page: number = +req.query?.page || 0;
      const skip = (page - 1) * limit;
      const query: any = { language };
      if (req.query.category) {
        query['category'] = { $in: (req.query.category as string).split(',') };
      }
      if (req.query.search) {
        const regex = new RegExp(req.query.search as string);
        query['title'] = { $regex: regex, $options: 'i' };
      }
      const response = await Article.find({ ...query })
        .sort('-published_at')
        .limit(limit)
        .skip(skip)
        .catch(catcher);
      const count = await Article.find({ ...query })
        .count()
        .catch(catcher);
      return res.status(200).json({ data: response, count });
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) return response(req, res);
  else return res.status(400).json({ error: 'No Response for This Request' });
};

export default connectDB(handler);
