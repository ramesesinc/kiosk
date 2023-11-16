import { BsTicketDetailed, BsBuildings } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineOtherHouses } from "react-icons/md";

const menuConfig = [
  {
    link: "/queueing",
    iconImg: <BsTicketDetailed size={90} className=" text-[#1b1b1b]" />,
    title: "Queue Number",
  },
  {
    link: "/pay-business",
    iconImg: <GiPayMoney size={90} className="text-[#1b1b1b]" />,
    title: "Pay Business",
  },
  {
    link: "/pay-property",
    iconImg: <BsBuildings size={90} className="text-[#1b1b1b]" />,
    title: "Pay Property",
  },
  {
    link: "/other-payments",
    iconImg: <MdOutlineOtherHouses size={90} className="text-[#1b1b1b]" />,
    title: "Other Payments",
  },
];

export default menuConfig;
