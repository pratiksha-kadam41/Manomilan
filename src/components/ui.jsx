import { useEffect, useState } from 'react';

/* ---------- hooks ---------- */

// Moves to the next slide every `delay` ms.
export function useAutoSlider(length, delay) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay]);
  return index;
}

// While open: stops page scrolling and closes on the Escape key.
export function useModalBehavior(open, onClose) {
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);
}

/* ---------- shared pieces ---------- */

// An image that quietly disappears if the file is missing (the box behind it stays visible).
// `fallback` = a second picture to try first.
export function Img({ src, fallback, alt = '', ...props }) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  const onError = () => (fallback && current === src ? setCurrent(fallback) : setFailed(true));
  return <img src={current} alt={alt} onError={onError} loading="lazy" {...props} />;
}

export function Modal({ open, title, onClose, maxWidth = 600, tall = false, children }) {
  useModalBehavior(open, onClose);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] overflow-auto bg-black/60"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog" aria-modal="true" aria-label={title}
    >
      <div
        className={`mx-auto flex w-[90%] flex-col rounded-xl bg-[#fefefe] shadow-2xl ${tall ? 'my-[3%] max-h-[85vh]' : 'my-[5%]'}`}
        style={{ maxWidth }}
      >
        <div className="flex shrink-0 items-center justify-between rounded-t-xl bg-maroon p-5 text-white">
          <h2 className="m-0 text-2xl font-bold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="text-[28px] font-bold leading-none">&times;</button>
        </div>
        <div className={`p-[30px] ${tall ? 'flex-1 overflow-y-auto' : ''}`}>{children}</div>
      </div>
    </div>
  );
}
