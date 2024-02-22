import { makeRequest } from "@/libs/fetch";

export const generateCode = (refno = {}) => {
  return makeRequest("/api/rpt/generateCode", {
    method: "GET",
    data: refno,
  });
};
