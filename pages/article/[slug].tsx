import ArticleDetail from '@/components/ArticleDetail/ArticleDetail.component';
import React from 'react';


export async function getStaticPaths() {
        const url = process.env.API_URL;
        const res = await fetch(`${url}/articles`);
        const articles = await res.json();

        return { 
                paths: articles.map((article) => ({
                        params: {
                          slug: article.slug,
                        },
                      })),
                fallback: false 
        };
}


export async function getStaticProps({ params }){
        const url = process.env.API_URL;
        const res = await fetch(`${url}/articles?slug=${params.slug}`);
        const articles = await res.json();
        
        return {
                props:{
                        article: articles[0]
                }
        }
}

interface PostProps {
        title: string;
        date: string;
        content: string;
        tags: {
                id: number;
                name: string;
            }[];
}

interface ArticlePageProps {
        article: PostProps;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({article}) => {
        return <ArticleDetail title={article.title} content={article.content} tags={article.tags} date={article.date}/>;
}
export default ArticlePage;