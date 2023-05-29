import styled from 'styled-components';

export const ImageGalleryList = styled.div`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`

export const LoaderWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 200px;
`

export const MessageIdle = styled.p`
text-align: center;
color: #9B9B9B;
font-size: 36px;
line-height: 24px;
font-style: normal;
`