// file parsing
import { readFileSync } from 'node:fs';
import path from 'node:path';

export function parse(filePath) {
  let absolutePath = path.resolve(process.cwd(), filePath);
  let data = readFileSync(absolutePath, 'utf-8');

  return JSON.parse(data)
}
