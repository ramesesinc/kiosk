import { BsTicketDetailed, BsBuildings } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineOtherHouses } from "react-icons/md";

const menuConfig = [
  {
    link: "/queueing",
    iconImg: <BsTicketDetailed size={80} className=" text-white" />,
    title: "Queue Number",
  },
  {
    link: "/pay-business",
    iconImg: <FaMoneyBillWave size={80} className="text-white" />,
    title: "Pay Business",
  },
  {
    link: "/pay-property",
    iconImg: <BsBuildings size={80} className="text-white" />,
    title: "Pay Property",
  },
  {
    link: "/other-payments",
    iconImg: <MdOutlineOtherHouses size={80} className="text-white" />,
    title: "Other Payments",
  },
];

export default menuConfig;
