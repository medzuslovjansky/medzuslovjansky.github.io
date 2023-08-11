import React, { createContext, useContext, useState, useEffect } from "react";

export const KeyboardContext = createContext();

const ALT = 4;
const CTRL = 2;
const SHIFT = 1;

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
  console.log(keyboardState);

  const handleKeyDown = (serviceKey) => {
    setKeyboardState((prevState) => ({
      ...prevState,
      [serviceKey]: true,
    }));
  };

  const handleKeyUp = (serviceKey) => {
    setKeyboardState((prevState) => ({
      ...prevState,
      [serviceKey]: false,
    }));
  };

  const toggleState = (serviceKey) => {
    setKeyboardState((prevState) => ({
      ...prevState,
      [serviceKey]: !prevState[serviceKey],
    }));
  };

  useEffect(() => {
    let newState = 0;
    if (keyboardState.shift) newState |= SHIFT;
    if (keyboardState.ctrl) newState |= CTRL;
    if (keyboardState.alt) newState |= ALT;

    if (
      [0, 1, 2, 6, 7].includes(newState) &&
      newState !== keyboardState.state
    ) {
      setKeyboardState((prevState) => ({
        ...prevState,
        state: newState,
      }));
    }
  }, [keyboardState.shift, keyboardState.ctrl, keyboardState.alt]);

  return (
    <KeyboardContext.Provider
      value={{ keyboardState, handleKeyDown, handleKeyUp, toggleState }}
    >
      {children}
    </KeyboardContext.Provider>
  );
}

export function useKeyboard() {
  return useContext(KeyboardContext);
}
