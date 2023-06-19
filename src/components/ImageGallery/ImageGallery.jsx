import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
export default function ImageGallery({ images, onImageClick}) {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </ul>
  );
}
