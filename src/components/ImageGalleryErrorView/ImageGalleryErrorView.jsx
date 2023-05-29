import PropTypes from 'prop-types';
import errorImage from './error.jpg';
import { ErrorWrap, MessageError, ImageError } from './ImageGalleryErrorView.styled.js';

const ImageGalleryErrorView = ({ message }) => {
    return (
        <ErrorWrap role='alert'>
            <MessageError>{message}</MessageError>
            <ImageError src={errorImage} width='500' alt='error' />
        </ErrorWrap>
    );
}

PropTypes.ImageGalleryErrorView = {
    message: PropTypes.string.isRequired,
}

export default ImageGalleryErrorView;