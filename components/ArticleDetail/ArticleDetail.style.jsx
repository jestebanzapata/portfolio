import styled, { css } from 'styled-components';

export const StyledArticleDetail = styled.article`
    max-width: 790px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .content{
        margin-bottom: 10px;
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