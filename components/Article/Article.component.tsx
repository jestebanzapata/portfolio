import React from 'react';
import Chip from '../Chip/Chip.component';
import { StyledArticle } from './Article.style';
import Link from 'next/link'


interface ArticleProps {
    title: string;
    date: Date;
    tags: {
        id: number;
        name: string;
    }[];
    shortDescription: string;
    thumbnail: string;
    slug: string;
}


export const Article: React.FC<ArticleProps> = ({
    title,
    date,
    shortDescription,
    tags,
    thumbnail,
    slug
}) => {
        return (
            <StyledArticle>
                {thumbnail && <img src={thumbnail} alt=""/>}
                <span>{date}</span>
                <h2>{title}</h2>
                <p>{shortDescription}</p>
                <div>
                    {tags && tags.map((tag, index) => <Chip key={index} value={tag.name}/>)}
                </div>
                <Link href={`/article/${slug}`}>
                    <a>Leer Mas...</a>
                </Link>

            </StyledArticle>
        );
}
export default Article;