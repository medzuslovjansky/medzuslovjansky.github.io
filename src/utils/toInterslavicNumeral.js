export function toInterslavicNumeral(n) {
  if (n === 0) return 'nula';

  const units = ['', 'jedin', 'dva', 'tri', 'četyri', 'pet', 'šest', 'sedm', 'osm', 'devet'];
  const teens = ['', 'jedinnadset', 'dvanadset', 'trinadset', 'četyrinadset', 'petnadset', 'šestnadset', 'sedmnadset', 'osmnadset', 'devetnadset'];
  const tens = ['', 'deset', 'dvadeset', 'trideset', 'četyrideset', 'petdeset', 'šestdeset', 'sedmdeset', 'osmdeset', 'devetdeset'];
  const hundreds = ['', 'sto', 'dvasto', 'tristo', 'četyristo', 'petsto', 'šeststo', 'sedmsto', 'osmsto', 'devetsto'];

  let parts = [];

  // Thousands
  if (n >= 1000) {
    const t = Math.floor(n / 1000);
    if (t === 1) {
      parts.push('tyseč');
    } else {
      parts.push(units[t] + '-tyseč');
    }
    n %= 1000;
  }

  // Hundreds
  if (n >= 100) {
    parts.push(hundreds[Math.floor(n / 100)]);
    n %= 100;
  }

  // Tens and units
  if (n >= 20) {
    const t = Math.floor(n / 10);
    const u = n % 10;
    if (u === 0) {
      parts.push(tens[t]);
    } else {
      parts.push(tens[t] + ' i ' + units[u]);
    }
  } else if (n >= 10) {
    parts.push(teens[n - 10]);
  } else if (n > 0) {
    parts.push(units[n]);
  }

  return parts.join(' ');
}