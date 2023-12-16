export function load(map) {
  const maxLength = Object.keys(map).reduce((max, key) => Math.max(max, key.length), 0);

  return function remap(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      for (let l = maxLength; l >= 0; l--) {
        if (l > 0) {
          const chunk = str.substr(i, l);
          const transliteratedChunk = findChunk(chunk, map);
          if (transliteratedChunk !== void 0) {
            result += transliteratedChunk;
            i += l - 1;
            break;
          }
        } else {
          result += str[i];
        }
      }
    }

    return result;
  }
}

function findChunk(chunk, table) {
  let res = table[chunk];
  if (res !== void 0) {
    return res;
  }

  const fallbackChunk = isLowerCase(chunk, 0)
    ? chunk.toLocaleLowerCase()
    : chunk.toLocaleUpperCase();

  res = table[fallbackChunk];
  if (res) {
    return mimicCase(res, chunk);
  }

  return void 0;
}

function mimicCase(str, pattern) {
  let res = '';

  const upper = str.toLocaleUpperCase();
  const lower = str.toLocaleLowerCase();

  for (let i = 0; i < str.length; i++) {
    res += (isLowerCase(pattern, i) ? lower : upper)[i];
  }

  return res;
}

function isLowerCase(str, index = 0) {
  const chr = str[index];
  return chr.toLocaleLowerCase() === chr;
}
