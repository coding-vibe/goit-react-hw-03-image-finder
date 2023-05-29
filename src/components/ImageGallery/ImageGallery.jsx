import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import imagesApi from '../Services';
import ImageGalleryErrorView from '../ImageGalleryErrorView';
import Loader from '../Loader';
import LoadMore from '../Button';
import Modal from '../Modal';
import { ToastContainer } from 'react-toastify';
import { ImageGalleryList, LoaderWrap, MessageIdle } from './ImageGallery.styled.js';

class ImageGallery extends Component {
    state = {
        images: null,
        error: null,
        status: 'idle',
        page: 1,
        query: '',
        showModal: false,
        selectedImage: null,
        isLoadingMore: false,
    };
    
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const currentName = this.props.imageName;
        
        if (prevName !== currentName) {
            this.setState({ query: currentName, images: null, page: 1 });
            this.loadImages(currentName, 1);
        }
    }
    
    loadMore = (e) => {
        e.preventDefault();
        
        const { imageName } = this.props;
        const { page } = this.state;
        this.setState({ isLoadingMore: true });
        this.loadImages(imageName, page + 1);
};
    
    loadImages = (imageName, page) => {
        this.setState({ status: 'pending' });
        
        imagesApi
            .fetchImages(imageName, page)
            .then(images => {
                if (images.hits.length === 0) {
                    return Promise.reject(new Error(`No images found for '${imageName}'`));
                }
                this.setState(prevState => ({
                    images: prevState.images ? [...prevState.images, ...images.hits] : images.hits,
                    status: 'resolved',
                    page,
                    isLoadingMore: false,
                }));
            })
            .catch(error => this.setState({ error, status: 'rejected', isLoadingMore: false }));
    };
    
    toggleModal = (largeImageURL, tags) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            selectedImage: prevState.showModal ? null : { largeImageURL, tags },
        }));
    };
    
    render() {
        const { images, error, status, showModal, selectedImage, isLoadingMore } = this.state;
        if (status === 'idle') {
            return <MessageIdle>Please, enter the name of the image</MessageIdle>;
        }
        
        if (status === 'pending') {
            return (
                <LoaderWrap>
                    <Loader />
                </LoaderWrap>
            );
        }
        
        if (status === 'rejected') {
            return <ImageGalleryErrorView message={error.message} />;
        }
        
        if (status === 'resolved') {
            return (
                <div>
                    <ImageGalleryList className="gallery">
                        {images.map((hit, index) => (
                            <li key={index}>
                                <ImageGalleryItem
                                    src={hit.webformatURL}
                                    alt={hit.tags}
                                    onClick={() =>
                                    this.toggleModal(hit.largeImageURL, hit.tags)}/>
                            </li>
                        ))}
                    </ImageGalleryList>
                    
                    {images.length > 0 && !isLoadingMore ? (<LoadMore onClick={this.loadMore} />) : (isLoadingMore &&
                        <LoaderWrap>
                            <Loader />
                        </LoaderWrap>)}
                    
                    {showModal && selectedImage && (
                        <Modal
                            onClose={this.toggleModal} largeImage={selectedImage.largeImageURL}
                            alt={selectedImage.tags}
                        />
                    )}
                    <ToastContainer autoClose={3000} />
                </div>
            );
        }
    }
}

PropTypes.ImageGallery = {
    imageName: PropTypes.string.isRequired,
}

export default ImageGallery;


