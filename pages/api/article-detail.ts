// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../middleware/mongodb';
import { Article } from '../../modals';
import mongoose from 'mongoose';

export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const id = req.query.articleId;
      const language = req.query.language;
      const response = await Article.findOne({ _id: id, language }).catch(catcher);
      const limit = Math.floor(Math.random() * 10);

      const relatedArticles = await Article.find({ language }).limit(3).skip(limit).catch(catcher);
      return res.json({ detail: response, relatedArticles: relatedArticles });
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) return response(req, res);
  else return res.status(400).json({ error: 'No Response for This Request' });
};

export default connectDB(handler);
