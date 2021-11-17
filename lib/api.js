import { promises as fs } from 'fs';
import path from 'path';

export async function readFromFile(filename) {
  const data = await fs.readFile(path.join(process.cwd(), 'data', filename));
  return JSON.parse(data.toString());
}
