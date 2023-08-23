const keyRow = (overrides, keys) => {
  let defaults = {
    x: 9,
    y: 28,
    width: 41,
    height: 41,
    gap: 7,
    ...overrides,
  };

  const y = defaults.y + 0.5;
  let x = defaults.x + 0.5;

  return keys.reduce((result, key) => {
    const { code, ...props} = {
      x: 0,
      y: 0,
      width: defaults.width,
      height: defaults.height,
      ...(typeof key === 'string' ? { code: key } : key),
    };

    props.x += x;
    props.y += y;
    x = props.x + props.width + defaults.gap;

    result[code] = props;
    return result;
  }, {});
};

const row1 = (keys) => keyRow({ y: 28 }, keys);
const row2 = (keys) => keyRow({ y: 76 }, keys);
const row3 = (keys) => keyRow({ y: 126 }, keys);
const row4 = (keys) => keyRow({ y: 174 }, keys);
const row5 = (keys) => keyRow({ y: 224 }, keys);

export default {
  ...row1([
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    { code: "Backspace", label: 'backspace', width: 75 },
  ]),

  ...row2([
    { code: "Tab", label: 'tab', width: 75 },
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash"
  ]),

  ...row3([
    { code: "CapsLock", label: 'caps lock', width: 89 },
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    { code: "Enter", label: 'enter', width: 75 },
  ]),

  ...row4([
    { code: "ShiftLeft", label: 'shift', width: 113 },
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    { code: "ShiftRight", label: 'shift', width: 99 },
  ]),

  ...row5([
    { code: "ControlLeft", label: 'ctrl', width: 102 },
    { code: "AltLeft", label: 'alt', width: 92 },
    { code: "Space", label: '', width: 238 },
    { code: "AltRight", label: 'alt', width: 44 },
    { code: "ControlRight", label: 'ctrl', width: 44 },
    { code: "ArrowLeft", label: '◀', width: 44, height: 21, y: 21, glyphY: 3 },
    { code: "ArrowUp", label: '▲', width: 44, height: 21, glyphY: 2 },
    { code: "ArrowDown", label: '▼', width: 44, height: 21, x: -51, y: 21, glyphY: 4},
    { code: "ArrowRight", label: '►', width: 44, height: 21, y: 21, glyphY: 3 },
  ])
};
