import type { NextApiRequest, NextApiResponse } from "next";
import {
  getHandler,
  postHandler,
  ResponseData,
  ResponseError,
} from "@/libs/services";
import { services } from "@/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method === "GET") {
    return getHandler(req, res, services);
  }
  if (req.method === "POST") {
    return postHandler(req, res, services);
  }
  return res.status(500).json({ code: "01", error: "Method not available." });
}
