import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import BtnLoadMore from './BtnLoadMore/BtnLoadMore';

const API_KEY = '37145558-909682ad6e14eec44ac1668f3';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const fetchImages = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (page !== 1) {
        setImages(prevImages => [...prevImages, ...data.hits]);
      } else {
        setImages(data.hits);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchImages().then(() => {
      setIsLoading(false);
    });
  }, [page, searchQuery]);

  const handleSearch = query => {
    setPage(1);
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    console.log(page);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (searchQuery.trim() === '') return;

    fetchImages();
  }, [searchQuery]);

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && !isLoading && (
       <BtnLoadMore onClick={handleLoadMore}></BtnLoadMore>
      )}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};
