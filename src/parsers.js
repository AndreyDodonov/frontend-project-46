import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml'

export function parse (filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const extension = path.extname(absolutePath).toLowerCase();

  if (extension === '.json') {
    return JSON.parse(data)
  }

  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(data)
  }
}