import React from 'react';
import { ButtonLoadMore, ButtonWrap } from './Button.styled.js';

const LoadMore = ({onClick}) => {
    return (
        <ButtonWrap>
        <ButtonLoadMore type='button' onClick={onClick}>Load more</ButtonLoadMore>
        </ButtonWrap>
    );
};

export default LoadMore;