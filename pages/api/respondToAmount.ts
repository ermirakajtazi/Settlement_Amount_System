import { NextApiRequest, NextApiResponse } from 'next';
import { openDb } from './database';

const respondToAmountHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { isObjection } = req.body;

      // Open the SQLite database connection
      const db = await openDb();

      const updateResult = await db.run('UPDATE SettlementAmount SET isObjection = ? WHERE id = (SELECT MAX(id) FROM SettlementAmount)', isObjection);

      // Close the database connection
      await db.close();

      res.status(200).json({ message: `Party B responded with ${isObjection ? 'objection' : 'agree'}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while updating the data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default respondToAmountHandler;
