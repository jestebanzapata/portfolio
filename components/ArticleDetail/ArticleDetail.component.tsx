import Link from 'next/link';
import React from 'react';
import {Chip} from '../Chip/Chip.component';
import { StyledArticleDetail } from './ArticleDetail.style';

interface ArticleDetailProps {
    title: string;
    date: string;
    content: string;
    tags: {
        id: number;
        name: string;
    }[];
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
    title,
    date,
    content,
    tags
}) => {
    
    
    return (
        <StyledArticleDetail>
            <h1>{title}</h1>
            <div>
            {
                    tags && tags.map(tag => <Chip key={tag.id} value={tag.name}/>)
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