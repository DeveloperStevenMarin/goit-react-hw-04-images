export default function ImageGalleryItem({  image, onImageClick }) {

    const handleClick = () => {
      onImageClick(image.largeImageURL);
      };
      
  return (
    <li className="gallery__item" onClick={handleClick}>
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
}
