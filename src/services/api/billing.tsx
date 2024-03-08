import { makeRequest } from "@/libs/fetch";

export const getBilling = (refno = {}) => {
  return makeRequest("/api/bpls/billing", {
    method: "GET",
    data: refno,
  });
};
