import styled, { css } from 'styled-components';

export const StyledArticle = styled.div`
    display: grid;
    width: 620px;
    grid-template-areas: 'thumbnail title'
                         'thumbnail date'
                         'thumbnail description'
                         'thumbnail read'
                         'thumbnail read-more'
                         'thumbnail chips';


    img {
        grid-area: thumbnail;
        height: 50px;
    }

    h2 {
        grid-area: title;
        margin: 2px;
    }

    span {
        grid-area: date;
        margin: 2px;
    }

    p {
        grid-area: description
    }

    div {
        grid-area: chips
    }

    a {
        grid-area: read-more;
        color: #3b70ad;
        margin-bottom: 20px;

        &:hover{
            text-decoration: underline;        
        }
    }
        
`;