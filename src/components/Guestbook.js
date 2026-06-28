import { useState } from "react";

function Envelope({ entry, isSelected, onClick }) {
  return (
    <button
      type="button"
      className={`envelope${isSelected ? " selected" : ""}`}
      aria-expanded={isSelected}
      onClick={onClick}
    >
      <div className="env-body">
        <div className="env-face">
          <div className="seal">{entry.name.charAt(0)}</div>
          <span className="open-label">{entry.name}</span>
        </div>
      </div>
    </button>
  );
}

function Guestbook({ content, onSelectMessage }) {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleEnvelopeClick = (entry) => {
    setSelectedMessage(entry);
    onSelectMessage(entry);
  };

  return (
    <section className="section guestbook">
      <h2>{content.heading}</h2>
      <p className="lead">{content.lead}</p>
      
      {/* Enveloppes */}
      <div className="envelopes">
        {content.messages.map((entry) => (
          <Envelope
            key={entry.id}
            entry={entry}
            isSelected={selectedMessage?.id === entry.id}
            onClick={() => handleEnvelopeClick(entry)}
          />
        ))}
      </div>
    </section>
  );
}

export default Guestbook;
