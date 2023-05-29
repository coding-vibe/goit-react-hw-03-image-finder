import React from 'react';
import {ImageGalleryItemWrap, ImageGalleryItemImage} from './ImageGalleryItem.styled.js'

const ImageGalleryItem = ({ src, alt, onClick }) => {
    return (
        <ImageGalleryItemWrap>
            <ImageGalleryItemImage src={src} alt={alt} onClick={onClick} />
        </ImageGalleryItemWrap>
    );
};

export default ImageGalleryItem;
