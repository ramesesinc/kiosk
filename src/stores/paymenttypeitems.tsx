const paymentTypeData = [
  {
    title: "Cashier",
    subtitle: "Pay Cashier",
    image: "/images/cashier.png",
    modalcontent: {
      image: "/images/qr.png",
      imageHeight: 200,
      imageWidth: 200,
      subtitle: "Present this qr code to the cashier",
      title: "Queue no.",
      number: 101,
      textButton: "Print",
      timelayout: "!block",
      datelayout: "!block",
    },
  },
  {
    title: "GCASH",
    subtitle: "Pay here",
    image: "/images/gcash.png",
    modalcontent: {
      image: "/images/qr.png",
      imageHeight: 200,
      imageWidth: 200,
      title: "Step on how to pay using Gcash:",
      paragraph1: "1. Open your Gcash and scan the Code.",
      paragraph2: "2. Pay the exact amount",
      paragraph3: "3. Wait for the confirmation",
      textButton: "Confirm",
    },
  },
];

export default paymentTypeData;
