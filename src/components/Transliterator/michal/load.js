export function load(map) {
  let maxLength = 1;
  for (const key of Object.keys(map)) {
    map[key] = mirrorTerminators(key, map[key]);
    maxLength = Math.max(maxLength, key.length);
  }

  function remapWord(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      for (let l = maxLength; l >= 0; l--) {
        if (l > 0) {
          const chunk = str.substr(i, l);
          const transliteratedChunk = map[chunk];
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

  function remapAll(str) {
    return str
      .normalize('NFC')
      .replace(/[\p{Letter}\p{Mark}]+/gu, (w) => {
        const applyCasePattern = getCasePattern(w);
        const rawResult = removeTerminators(remapWord(addTerminators(w.toLowerCase())));
        return applyCasePattern(rawResult);
      });
  }

  return remapAll;
}

function getCasePattern(str) {
  return isUpperCase(str, 0)
    ? isUpperCase(str, 1)
      ? toUpperCase
      : toUpperFirst
    : identity;
}

function isUpperCase(str, index = 0) {
  const chr = str[index];
  return chr !== void 0 && chr.toUpperCase() === chr;
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function toUpperFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function identity(str) {
  return str;
}

function addTerminators(str) {
  return `^${str}$`;
}

function mirrorTerminators(pattern, replace) {
  const start = pattern[0] === '^' ? '^' : '';
  const end = pattern[pattern.length - 1] === '' ? '$' : '';
  return `${start}${replace}${end}`;
}

function removeTerminators(str) {
  const start = str[0] === '^' ? 1 : 0;
  const end = str[str.length - 1] === '$' ? -1 : str.length;
  return str.slice(start, end);
}
