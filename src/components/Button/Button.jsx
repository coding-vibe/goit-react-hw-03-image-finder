import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore, ButtonWrap } from './Button.styled.js';

const LoadMore = ({onClick}) => {
    return (
        <ButtonWrap>
        <ButtonLoadMore type='button' onClick={onClick}>Load more</ButtonLoadMore>
        </ButtonWrap>
    );
};

PropTypes.LoadMore = {
    onClick: PropTypes.func.isRequired,
}

export default LoadMore;