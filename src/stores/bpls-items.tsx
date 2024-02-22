export type Bpls = { id: string; title: string };

export const bplsitem: Bpls[] = [
  { id: "billing", title: "Business Online Billing and Payment" },
  // { id: "newbusiness", title: "Business Registration" },
  // { id: "renewbusiness", title: "Business Application" },
];

export function getBpls() {
  return bplsitem;
}

export function getBplsId(id: string | undefined) {
  return bplsitem.find((bplsitem) => bplsitem.id === id);
}
