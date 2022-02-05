// This is an example of how to read a JSON Web Token from an API route
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async function jwt(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const token = await getToken({ req, secret });
  res.send(JSON.stringify(token, null, 2));
}