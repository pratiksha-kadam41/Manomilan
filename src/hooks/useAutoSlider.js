import { useEffect, useState } from "react";

/** Returns the current slide number, moving to the next one every `delay` ms. */
export default function useAutoSlider(length, delay) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay]);
  return index;
}
