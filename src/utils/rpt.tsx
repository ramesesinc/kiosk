export const loadBill = async (
  svc: any,
  params: {
    refno: string | undefined;
    billtoqtr: number | string | void;
    billtoyear: number | string | void;
  }
) => {
  const response = await svc.invoke("getBilling", params);

  // Ensure error handling
  if (response.status === "ERROR") {
    console.error("Error fetching tax bill:", response.msg);
    return { code: "01", error: response.msg };
  }

  return response;
};
