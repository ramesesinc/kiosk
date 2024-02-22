import { makeRequest } from "@/libs/fetch";

export const getBilling = (refno = {}) => {
  return makeRequest("/api/rpt/billing", {
    method: "GET",
    data: refno,
  });
};
