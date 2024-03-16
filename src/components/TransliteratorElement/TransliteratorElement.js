import {transliterate} from '@interslavic/utils';

const HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement;

export class TransliteratorElement extends HTMLElement {
  connectedCallback() {
    this.classList.add('notranslate');
    this.setAttribute('translate', 'no');
    this.lang = 'art-x-interslv';

    this.updateTransliteration();
  }

  handleMutations() {
    this.updateTransliteration();
  }

  updateTransliteration() {
    this.title = transliterate(this.innerText.trim(), 'art-Cyrl-x-interslv');
  }
}

