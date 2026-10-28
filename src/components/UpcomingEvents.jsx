// Floating "Upcoming Events" button (bottom-right) and the poster popup it opens.
// The popup is a Bootstrap modal: data-bs-toggle / data-bs-target / data-bs-dismiss do the opening and closing.

export default function UpcomingEvents() {
  return (
    <>
      <button type="button" className="events-btn" data-bs-toggle="modal" data-bs-target="#eventsModal">
        <i className="bi bi-megaphone-fill me-2" />Upcoming Events
      </button>

      <div className="modal fade" id="eventsModal" tabIndex="-1" aria-label="Upcoming events poster" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <button type="button" className="btn-close btn-close-white ms-auto mb-2" data-bs-dismiss="modal" aria-label="Close" />
            <img
              src="/website/upcoming.jpeg"
              alt="Event Poster"
              className="img-fluid rounded"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
        </div>
      </div>
    </>
  );
}