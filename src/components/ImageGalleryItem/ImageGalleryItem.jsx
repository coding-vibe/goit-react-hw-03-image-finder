import React from 'react';
import PropTypes from 'prop-types';
import {ImageGalleryItemWrap, ImageGalleryItemImage} from './ImageGalleryItem.styled.js'

const ImageGalleryItem = ({ src, alt, onClick }) => {
    return (
        <ImageGalleryItemWrap>
            <ImageGalleryItemImage src={src} alt={alt} onClick={onClick} />
        </ImageGalleryItemWrap>
    );
};

PropTypes.ImageGalleryItem = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
