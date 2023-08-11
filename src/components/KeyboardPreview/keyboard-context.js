import React, { createContext, useContext, useState } from "react";

export const KeyboardContext = createContext();

export function KeyboardProvider({ children }) {
  const [keyboardState, setKeyboardState] = useState({
    state: 0,
    alt: false,
    shift: false,
    ctrl: false,
    win: false,
    meta: false,
    capsLock: false,
  });

  const toggleModifier = (modifier) => {
    setKeyboardState((prevState) => {
      let newState = prevState.state ^ modifier;
      console.log(newState);
      console.log(keyboardState);

      if (
        (newState === 1 ||
          newState === 2 ||
          newState === 6 ||
          newState === 7) &&
        newState !== prevState.state
      ) {
        return {
          ...prevState,
          state: newState,
        };
      }

      return prevState;
    });
  };

  return (
    <KeyboardContext.Provider value={{ keyboardState, toggleModifier }}>
      {children}
    </KeyboardContext.Provider>
  );
}

export function useKeyboard() {
  return useContext(KeyboardContext);
}
