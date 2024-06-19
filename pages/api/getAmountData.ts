import { NextApiRequest, NextApiResponse } from "next";
import { openDb } from "./database";

type Data = {
  amount: number;
  message: string;
  isObjection: string;
};

const getAmountDataHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data[] | { message: string }>
) => {
  if (req.method === "GET") {
    try {
      // Open the SQLite database connection
      const db = await openDb();

      const rawData = await db.all(
        "SELECT amount, isObjection FROM SettlementAmount"
      );

      const data: Data[] = rawData.map(
        (row: { amount: number; isObjection: string }) => ({
          amount: row.amount,
          message: "", 
          isObjection: row.isObjection,
        })
      );

      // Close the database connection
      await db.close();

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching the data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default getAmountDataHandler;
