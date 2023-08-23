import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

export const KeyboardContext = createContext();

const ALT = 4;
const CTRL = 2;
const SHIFT = 1;

export function KeyboardProvider({ value, children }) {
  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
}
export function useKeyboard(layout) {
  const [keyboardState, setKeyboardState] = useState({
    layout,
    state: "",
    modifier: 0,
    // alt: false,
    // shift: false,
    // ctrl: false,
    // win: false,
    // meta: false,
    // capsLock: false,
    pressed: new Set(),
  });

  const handleKeyEvent = useCallback(
    (e) => {
      const pressed = keyboardState.pressed;
      let pressedChanged = false;
      if (e.type === "keydown" && !pressed.has(e.code)) {
        pressed.add(e.code);
        pressedChanged = true;
      }
      if (e.type === "keyup" && pressed.has(e.code)) {
        pressed.delete(e.code);
        pressedChanged = true;
      }

      const alt = e.getModifierState("Alt");
      const shift = e.getModifierState("Shift");
      const ctrl = e.getModifierState("Control");

      const modifier =
        0 | (shift ? SHIFT : 0) | (alt ? ALT | CTRL : 0) | (ctrl ? CTRL : 0);

      const state = "";

      if (
        state !== keyboardState.state ||
        modifier !== keyboardState.modifier ||
        pressedChanged
      ) {
        setKeyboardState({
          ...keyboardState,
          state,
          modifier,
          pressed,
        });
      }
    },
    [keyboardState, setKeyboardState]
  );

  const handleBlur = useCallback(
    (e) => {
      setKeyboardState({
        ...keyboardState,
        state: '',
        modifier: 0,
        pressed: new Set(),
      });
    },
    [setKeyboardState]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    window.addEventListener("keyup", handleKeyEvent);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
      window.removeEventListener("keyup", handleKeyEvent);
      window.removeEventListener("blur", handleBlur);
    };
  }, [handleKeyEvent, handleBlur]);

  return useMemo(
    () => ({
      keyboardState,
    }),
    [keyboardState]
  );
}

export function useKey() {
  return useContext(KeyboardContext);
}
