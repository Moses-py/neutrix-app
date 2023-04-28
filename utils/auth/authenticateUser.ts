import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export const authenticateUser = async (ctx: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  return session;
};
