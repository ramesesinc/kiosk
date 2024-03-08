import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await POST(req, res); // Call the POST handler
  } else {
    res.status(500).json({ code: "01", error: "Method not available." });
  }
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const space = (count: number): string => {
    return " ".repeat(count);
  };

  try {
    const headerTitle = "REPUBLIC OF THE PHILIPPINES";
    const headerSub = "PRESENT THIS RECEIPT TO THE COLLECTOR";
    const queueTitle = "QUEUE NO";
    const recieveTicketInfo = req.body;

    const countCharacter = (str: string, alignment: string, label: string) => {
      let grid = 48;
      let padding = 0;

      if (alignment === "left") {
        " ".repeat(0);
      } else if (alignment === "center") {
        padding = Math.floor((grid - str.length) / 2);
        return `${space(padding)}${str}`;
      } else if (alignment === "right") {
        padding = grid - str.length - label.length;
        return `${space(padding)}${str}`;
      }
    };

    const escposText = `
\x1B\x45\x01\x1D\x21\x00${countCharacter(headerTitle, "center", "")}
\x1D\x21\x00${countCharacter(recieveTicketInfo.subHeader, "center", "")}
\x0A
${space(34)}${queueTitle}
${space(36)}${recieveTicketInfo.seriesNo}\x1B\x45\x00
\x0A
\x1D\x21\x00${countCharacter(headerSub, "center", "")}
Trxn Date:${space(6)}${recieveTicketInfo.appDate}
Payer:${space(10)}${recieveTicketInfo.payerName}
Address:${space(8)}${recieveTicketInfo.payerAddr}
Particulars:${space(4)}${recieveTicketInfo.particulars}
\x1B\x45\x01Total:${countCharacter(
      recieveTicketInfo.totalAmt.toLocaleString(),
      "right",
      "total:"
    )}
\x0A
\x1B\x45\x00Control No:
${recieveTicketInfo.controlNo}
\x0A
\x0A
\x1D\x56\x00
      `;

    const printResponse = await axios.post(
      "http://192.168.2.168:11111/api/print",
      escposText
    );
    console.log("Print response:", escposText);
    res
      .status(200)
      .json({ message: "Ticket information received successfully." });
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
