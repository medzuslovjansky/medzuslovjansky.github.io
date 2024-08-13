import { transliterate2 } from '@interslavic/utils';
import pl2cyrl from './pl2cyrl';
import pl2glag from './pl2glag';
import mashinaCyrLat from './mashinaCyrLat';

export function customTransliterate(input, script) {
  switch (script) {
    case 'GlagoliticLatin':
      return transliterate2.glag2latn(input);
    case 'MichalSwatPolishCyrillic':
      return pl2cyrl(input);
    case 'MichalSwatPolishGlagolitic':
      return pl2glag(input);
    case 'MichalSwatMsGlagolitic':
      return transliterate2.latn2glag(input);
    case 'GorlatoffCyrillicLatin':
      return mashinaCyrLat(input);
    default:
      return input;
  }
}
