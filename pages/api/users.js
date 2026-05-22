// API Route que expone datos de la base de datos vía MCP
import { getUsersFromDB } from '../../lib/db';

export default async function handler(req, res) {
  const users = await getUsersFromDB();
  res.status(200).json(users);
}
