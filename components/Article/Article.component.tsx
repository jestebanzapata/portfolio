import React from 'react';
import Chip from '../Chip/Chip.component';
import { StyledArticle } from './Article.style';
import Link from 'next/link'


interface ArticleProps {
    title: string;
    date: Date;
    categories: string[];
    shortDescription: string;
    thumbnail: string;
}


export const Article: React.FC<ArticleProps> = ({
    title,
    date,
    shortDescription,
    categories,
    thumbnail
}) => {
        return (
            <StyledArticle>
                {thumbnail && <img src={thumbnail} alt=""/>}
                <span>{date}</span>
                <h2>{title}</h2>
                <p>{shortDescription}</p>
                <div>
                    {categories && categories.map(category => <Chip value={category}/>)}
                </div>
                <Link href="/article/1">
                    <a>Leer Mas...</a>
                </Link>

            </StyledArticle>
        );
}
export default Article;