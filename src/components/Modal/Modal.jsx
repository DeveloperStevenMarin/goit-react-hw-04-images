import { useEffect } from 'react';

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const handleImageClick = e => {
    e.stopPropagation();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <div className="image__container">
          <button className="btn__close-modal" onClick={onClose}>
            X
          </button>
          <img src={image} alt="" onClick={handleImageClick} />
        </div>
      </div>
    </div>
  );
}
