import type { NormalizedParadigm, Token } from './types.ts';

/**
 * Flattens a NormalizedParadigm into an array of Token objects.
 * Each form inherits lemma, upos, xpos, feats, misc from the paradigm.
 * Form-level feats/misc merge with (and override) paradigm-level.
 */
export function flatten(paradigm: NormalizedParadigm): Token[] {
  const { lemma, upos, xpos, feats: paradigmFeats, misc: paradigmMisc, forms } = paradigm;

  return forms.map((f) => ({
    form: f.form,
    lemma,
    ...(upos && { upos }),
    ...(xpos && { xpos }),
    feats: { ...paradigmFeats, ...f.feats },
    misc: { ...paradigmMisc, ...f.misc },
  }));
}
