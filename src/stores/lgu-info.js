import lguLogo from "/_custom/lgu-logo.jpg";
import lpBgImage from "/_custom/lp-bg-image.png";

export const landingInfo = [
  {
    logo: {
      src: lguLogo,
      width: 120,
    },
    header: {
      title: process.env.NEXT_PUBLIC_LGU_NAME || "SET LGU NAME",
    },
    subheader: {
      title: "self service kiosk",
    },
  },
];

export const ticketInfo = [
  {
    logo: {
      src: lguLogo,
      width: 70,
    },
    header: {
      title: "Republic of the Philippines",
    },
    subheader: {
      title: process.env.NEXT_PUBLIC_LGU_NAME || "SET LGU NAME",
    },
  },
];

export const landingBgLogo = [
  {
    logo: {
      src: lpBgImage,
      width: 2000,
    },
  },
];

export const bg = lpBgImage;
export default lguLogo;
