import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { compare } from '../src/compare.js'
import { parse } from '../src/parsers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('flat JSON compare', () => {
  const file1 = parse(getFixturePath('file1.json'))
  const file2 = parse(getFixturePath('file2.json'))
  const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').replace(/\r\n/g, '\n')

  expect(compare(file1, file2)).toEqual(expected)
})

test('flat YAML compare', () => {
  const file1 = parse(getFixturePath('file1.yml'));
  const file2 = parse(getFixturePath('file2.yml'));
  const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').replace(/\r\n/g, '\n');

  expect(compare(file1, file2)).toEqual(expected);
});
