import { makeRequest } from "@/libs/fetch";

export const generateCode = (refno = {}) => {
  return makeRequest("/api/bpls/generateCode", {
    method: "GET",
    data: refno,
  });
};
