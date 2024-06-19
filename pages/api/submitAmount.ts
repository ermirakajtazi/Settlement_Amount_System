import { NextApiRequest, NextApiResponse } from "next";
import { openDb } from "./database";

type Data = {
  amount: number;
  message: string;
};

const submitAmountHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "POST") {
    const { amount, isObjection } = req.body;

    if (amount === undefined || isObjection === undefined) {
      return res
        .status(400)
        .json({
          amount: 0,
          message: "Amount and isObjection fields are required",
        });
    }

    try {
      // Open the SQLite database connection
      const db = await openDb();

      const updateResult = await db.run(
        "UPDATE SettlementAmount SET amount = ?, isObjection = ? WHERE id = (SELECT MAX(id) FROM SettlementAmount)",
        amount,
        isObjection
      );

      console.log("Updated Data with New Amount and isObjection:", {
        amount,
        isObjection,
      });

      // Close the database connection
      await db.close();

      res
        .status(200)
        .json({
          amount,
          message: `Amount ${amount} and isObjection ${isObjection} updated successfully`,
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        amount: amount,
        message: "An error occurred while updating the data",
      });
    }
  } else {
    res.status(405).json({ amount: 0, message: "Method Not Allowed" });
  }
};

export default submitAmountHandler;
