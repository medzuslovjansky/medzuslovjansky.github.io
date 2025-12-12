import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'interslavic-script-pref';

export type ScriptPreference = 'Latn' | 'Cyrl';

/**
 * Hook to get and set user's preferred script from localStorage.
 * Defaults to 'Latn' (Latin).
 */
export function useScriptPreference(): [ScriptPreference, (pref: ScriptPreference) => void] {
  const [preference, setPreferenceState] = useState<ScriptPreference>('Latn');

  // Read from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'Latn' || stored === 'Cyrl') {
      setPreferenceState(stored);
    }
  }, []);

  const setPreference = useCallback((pref: ScriptPreference) => {
    setPreferenceState(pref);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, pref);
    }
  }, []);

  return [preference, setPreference];
}

/**
 * Read-only hook for components that just need to know the preference.
 */
export function useReadScriptPreference(): ScriptPreference {
  const [preference] = useScriptPreference();
  return preference;
}
