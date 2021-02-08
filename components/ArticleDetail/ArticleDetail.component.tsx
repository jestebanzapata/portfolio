import Link from 'next/link';
import React from 'react';
import {Chip} from '../Chip/Chip.component';
import { StyledArticleDetail } from './ArticleDetail.style';

interface ArticleDetailProps {
    title: string;
    date: string;
    content: string;
    categories: string[];
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
    title,
    date,
    content,
    categories
}) => {
    
    
    return (
        <StyledArticleDetail>
            <h1>{title}</h1>
            <div>
            {
                    categories && categories.map(category => <Chip value={category}/>)
            }
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html: content}}/> 
            <Link href="/">
                <a>Regresar inicio</a>
            </Link>
        </StyledArticleDetail>
    );
}
export default ArticleDetail;