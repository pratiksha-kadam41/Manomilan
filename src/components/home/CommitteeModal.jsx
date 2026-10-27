import useModalBehavior from '../../hooks/useModalBehavior.js';

export default function CommitteeModal({ member, onClose }) {
  useModalBehavior(!!member, onClose);
  if (!member) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={member.name}
    >
      <div className="relative mx-auto flex w-11/12 max-w-md flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 p-2 text-3xl leading-none text-gray-400 transition hover:text-gray-700"
        >
          &times;
        </button>
        <div className="mb-6 aspect-square h-56 w-56 overflow-hidden rounded-full border-4 border-primary shadow-lg">
          <img
            src={member.img}
            alt={member.name}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
        <p className="mb-4 text-base font-semibold text-secondary">{member.role}</p>
        <p className="max-w-sm text-sm text-gray-600">
          Dedicated to bringing hearts together and steering Aaryans Manomilan with trust, guidance, and community spirit.
        </p>
      </div>
    </div>
  );
}