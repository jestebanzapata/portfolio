import Link from 'next/link';
import React from 'react';
import {Chip} from '../Chip/Chip.component';
import { StyledArticleDetail } from './ArticleDetail.style';

interface ArticleDetailProps {
    title: string;
    publishedAt: string;
    content: string;
    tags: {
        id: number;
        name: string;
        color?: string;
    }[];
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
    title,
    publishedAt,
    content,
    tags
}) => {
    
    
    return (
        <StyledArticleDetail>
            <h1>{title}</h1>
            <div><strong>Fecha:</strong><span>{publishedAt}</span></div>
            <div>
            {
                    tags && tags.map(tag => <Chip key={tag.id} value={tag.name} color={tag.color}/>)
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