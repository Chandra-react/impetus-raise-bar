import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL = '' } = process.env;

export const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(DATABASE_URL);
    return handler(req, res);
  };
