import useModalBehavior from '../../hooks/useModalBehavior.js';

export default function Modal({ open, title, onClose, maxWidth = 600, tall = false, children }) {
  useModalBehavior(open, onClose);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] overflow-auto bg-black/60"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`mx-auto flex w-[90%] flex-col rounded-xl bg-[#fefefe] shadow-2xl ${
          tall ? 'my-[3%] max-h-[85vh]' : 'my-[5%]'
        }`}
        style={{ maxWidth }}
      >
        <div className="flex shrink-0 items-center justify-between rounded-t-xl bg-maroon p-5 text-white">
          <h2 className="m-0 text-2xl font-bold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="text-[28px] font-bold leading-none">
            &times;
          </button>
        </div>
        <div className={`p-[30px] ${tall ? 'flex-1 overflow-y-auto' : ''}`}>{children}</div>
      </div>
    </div>
  );
}