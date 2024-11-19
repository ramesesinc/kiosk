export const getLguInfo = async () => {
  const lguName = process.env.LGU_NAME;
  const logo = "/_custom/lgu-logo.png";
  return { lguName, logo };
};
