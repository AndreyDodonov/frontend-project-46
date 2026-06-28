// files comparing
import _ from 'lodash';

export function compare(file1, file2) {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const lines = sortedKeys.map((key) => {
    // ключ удалён
    if (_.has(file1, key) && !_.has(file2, key)) {
      return ` - ${key}: ${file1[key]}`;
    }
    // ключ добавлен
    if (_.has(file1, key) && _.has(file2, key)) {
      return ` + ${key}: ${file2[key]}`;
    }
    // значения изменились
    if (file1[key] !== file2[key]) {
      return ` - ${key}: ${file1[key]}\n + ${key}: ${file2[key]}`;
    }
    // значения совпадают
    return `   ${key}: ${file1[key]}`;

  });

  return `{\n${lines.join('\n')}\n}`;
}
