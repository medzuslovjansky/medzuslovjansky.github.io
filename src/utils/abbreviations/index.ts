export { parseAbbr, type ParsedAbbr } from './parse.ts';
export {
  lookupAbbr,
  loadAbbreviationData,
  getAbbreviationData,
  preloadAbbreviationData,
  clearAbbreviationCache,
} from './lookup.ts';
export { abbreviationSchema, type AbbreviationData } from './schema.ts';
