export const loadBill = async (
  svc: any,
  params: {
    refno: string | undefined;
    qtr: number | string;
  }
) => {
  return await svc.invoke("getBilling", params);
};
