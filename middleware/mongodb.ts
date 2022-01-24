import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { resolve } from 'path/posix';

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL = '' } = process.env;

export const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection{
    const isConnected = await new Promise((resolve, reject) => {
      mongoose
        .connect(DATABASE_URL)
        .then((res) => {
          resolve(true);
        })
        .catch((err) => {
          reject(false);
        });
    });
    if (isConnected) return handler(req, res);
    else res.status(500).json({ message: 'Something went Wrong' });
  };
