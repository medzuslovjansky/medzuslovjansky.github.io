import type { NormalizedParadigm } from './types.ts';

/**
 * Auxiliary forms for future tense (byti conjugation).
 */
const FUTURE_AUX: Record<string, Record<string, string>> = {
  Sing: { '1': 'budu', '2': 'budeš', '3': 'bude' },
  Plur: { '1': 'budemo', '2': 'budete', '3': 'budut' },
};

/**
 * Auxiliary forms for conditional mood (byti conditional).
 */
const CONDITIONAL_AUX: Record<string, Record<string, string>> = {
  Sing: { '1': 'byh', '2': 'bys', '3': 'by' },
  Plur: { '1': 'byhmo', '2': 'byste', '3': 'by' },
};

/**
 * Preprocess verb paradigm to add auxiliary markers.
 * - Tense=Fut → prepends ~budu~/~budeš~/etc. based on Person/Number
 * - Mood=Cnd → prepends ~byh~/~bys~/etc. based on Person/Number
 *
 * Returns a new paradigm with modified forms (does not mutate original).
 */
export function preprocessVerb(paradigm: NormalizedParadigm): NormalizedParadigm {
  return {
    ...paradigm,
    forms: paradigm.forms.map(f => {
      const { Tense, Mood, Person, Number } = f.feats;

      // Future tense: add budu/budeš/etc.
      if (Tense === 'Fut' && Person && Number) {
        const aux = FUTURE_AUX[Number]?.[Person];
        if (aux && !f.form.startsWith('~')) {
          return { ...f, form: `~${aux}~ ${f.form}` };
        }
      }

      // Conditional mood: add byh/bys/etc.
      if (Mood === 'Cnd' && Person && Number) {
        const aux = CONDITIONAL_AUX[Number]?.[Person];
        if (aux && !f.form.startsWith('~')) {
          return { ...f, form: `~${aux}~ ${f.form}` };
        }
      }

      return f;
    }),
  };
}
