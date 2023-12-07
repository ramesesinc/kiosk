import Service from "@/libs/remote-service";
import type { NextApiRequest, NextApiResponse } from "next";
import type { ResponseError } from "@/libs/fetch";

type QueueGroups = {
  objid: string;
  title: string;
};

type ResponseData = {
  QueueGroups?: QueueGroups[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method === "GET") {
    return GET(req, res);
  }
  return res.status(500).json({ code: "01", error: "Method not available." });
}

async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  const svc = Service.lookup("QueueGroupService", "etracs");
  const list = await svc.invoke("getGroupsWithSections", null);
  const queue = list.map((item: any) => ({
    objid: item.objid,
    title: item.title,
  }));

  //return res.status(200).json({code: "01", error: "Test Error"});
  return res.status(200).json(queue);
}

async function sleep(sec: number) {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      resolve(sec);
    }, sec * 1000);
  });
}
