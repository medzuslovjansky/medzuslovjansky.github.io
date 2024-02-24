import ms2glag from './ms2glag';
import pl2cyrl from './pl2cyrl';
import pl2glag from './pl2glag';
import mashinaCyrLat from './mashinaCyrLat';

export function customTransliterate(input, script) {
  switch (script) {
    case 'MichalSwatPolishCyrillic':
      return pl2cyrl(input);
    case 'MichalSwatPolishGlagolitic':
      return pl2glag(input);
    case 'MichalSwatMsGlagolitic':
      return ms2glag(input);
    case 'GorlatoffCyrillicLatin':
      return mashinaCyrLat(input);
    default:
      return input;
  }
}
