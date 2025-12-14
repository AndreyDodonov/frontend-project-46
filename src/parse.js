// file parsing
import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export function parse(filePath) {
  let absolutePath = path.resolve(process.cwd(), filePath)
  let data = readFileSync(absolutePath)
  return JSON.parse(data)
}