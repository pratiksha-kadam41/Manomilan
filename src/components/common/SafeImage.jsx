import { useState } from 'react';

const placeholder = (alt) =>
  `https://placehold.co/200x180/DC143C/FFFFFF?text=${encodeURIComponent(alt || 'Image')}`;

/** An image that shows a placeholder if the file is missing. */
export default function SafeImage({ src, fallback, alt = '', ...props }) {
  const [current, setCurrent] = useState(src);
  const handleError = () => {
    if (current === src && fallback) setCurrent(fallback);
    else if (current !== placeholder(alt)) setCurrent(placeholder(alt));
  };
  return <img src={current} alt={alt} onError={handleError} loading="lazy" {...props} />;
}