import { useState } from 'react';
import useModalBehavior from '../../hooks/useModalBehavior.js';

export default function UpcomingEvents() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useModalBehavior(open, close);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[1000] flex animate-float items-center gap-2 rounded-full bg-crimson px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110"
      >
        <span aria-hidden="true">📢</span> Upcoming Events
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80"
          onClick={(e) => e.target === e.currentTarget && close()}
          role="dialog"
          aria-modal="true"
          aria-label="Upcoming events poster"
        >
          <div className="relative max-h-[90%] max-w-[90%]">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute -right-4 -top-4 z-[2001] h-[30px] w-[30px] rounded-full bg-white text-xl font-bold leading-[30px] text-[#333] shadow"
            >
              &times;
            </button>
            <img
              src="/website/upcoming.jpeg"
              alt="Event Poster"
              className="h-auto max-h-[80vh] w-full rounded-[10px] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            />
          </div>
        </div>
      )}
    </>
  );
}