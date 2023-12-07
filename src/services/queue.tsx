import { makeRequest } from "@/libs/fetch";

export const getGroupsWithSections = () => {
  return makeRequest("/api/queue/queueing");
};
