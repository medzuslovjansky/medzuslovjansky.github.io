import ms2glag from './ms2glag';
import pl2cyrl from './pl2cyrl';
import pl2glag from './pl2glag';

export function michalSwat(input, script) {
  switch (script) {
    case 'MichalSwatPolishCyrillic':
      return pl2cyrl(input);
    case 'MichalSwatPolishGlagolitic':
      return pl2glag(input);
    case 'MichalSwatMsGlagolitic':
      return ms2glag(input);
    default:
      return input;
  }
}
