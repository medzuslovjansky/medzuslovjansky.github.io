import { useCallback, useState } from "react";
import { TransliteratorElement } from "@site/src/components";
import { toInterslavicNumeral } from "@site/src/utils/toInterslavicNumeral";
import styles from "./converter.module.scss";

// Helper function to parse the string and create JSX elements using regex exec
const formatNumeralOutput = (text) => {
  const regex = /(\bi\b|-)/g; // Regex to find standalone 'i' or hyphen '-'
  const elements = [];
  let lastIndex = 0;
  let match;
  let keyIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    // Push the text before the match
    if (match.index > lastIndex) {
      elements.push(<span key={keyIndex++}>{text.substring(lastIndex, match.index)}</span>);
    }
    // Push the matched delimiter ('i' or '-') in an <i> tag
    elements.push(<i key={keyIndex++}>{match[0]}</i>);
    lastIndex = regex.lastIndex;
  }

  // Push any remaining text after the last match
  if (lastIndex < text.length) {
    elements.push(<span key={keyIndex++}>{text.substring(lastIndex)}</span>);
  }

  return elements;
};

export default function NumeralsConverter() {
  const [input, setInput] = useState(3456);
  const output = toInterslavicNumeral(input);
  const formattedOutput = formatNumeralOutput(output); // Process the output string

  const onChange = useCallback((event) => {
    const value = event.target.value;
    if (value.length > 4) {
      return;
    }
    setInput(value);
  }, [setInput]);

  return (
    <div className={styles['numerals-demo']}>
      <input 
        type="number" 
        value={input} 
        onChange={onChange} 
        min={0} 
        max={9999} 
        maxLength={4}
        className={styles['numerals-demo__input']} 
      />
      <div className={styles['numerals-demo__output']}>
        <TransliteratorElement>{formattedOutput}</TransliteratorElement>
      </div>
    </div>
  );
}
