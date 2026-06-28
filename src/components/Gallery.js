import { useState, useEffect, useCallback } from "react";

function Gallery({ content }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedPhoto = selectedIndex !== null ? content.photos[selectedIndex] : null;

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    if (selectedIndex === 0) {
      setSelectedIndex(content.photos.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex, content.photos.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    if (selectedIndex === content.photos.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, content.photos.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          setSelectedIndex(null);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <>
      <section className="section gallery">
        <h2>{content.heading}</h2>
        <p className="lead">{content.lead}</p>
        <div className="grid">
          {content.photos.map((photo, index) => (
            <div
              key={index}
              className="frame photo-frame"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={photo} alt={`Souvenir ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedIndex(null)}>
              ×
            </button>
            <button className="modal-nav modal-prev" onClick={goToPrevious}>
              ‹
            </button>
            <button className="modal-nav modal-next" onClick={goToNext}>
              ›
            </button>
            <img src={selectedPhoto} alt="Souvenir en grand" />
            <div className="modal-counter">
              {selectedIndex + 1} / {content.photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
