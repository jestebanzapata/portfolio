import ArticleDetail from '@/components/ArticleDetail/ArticleDetail.component';
import React from 'react';


export async function getStaticPaths() {

        return { 
                paths: [{ params: { id: '1' } }],
                fallback: false 
        };
}

export async function getStaticProps({ params }) {
        //getArticleById(context.params.id)
        return {
                props: { 
                        article: {
                                title: 'Nostrud sunt consequat id sint.',
                                date: '02/02/2021',
                                content: 'Culpa ipsum aliquip reprehenderit eu duis in cupidatat et. Nisi ipsum aute pariatur amet labore ullamco proident tempor. Et sit cupidatat exercitation sint velit nostrud in aliquip quis deserunt. Mollit ipsum eu laborum reprehenderit adipisicing consectetur ad excepteur et cillum proident labore commodo. Exercitation non duis sit eu deserunt eiusmod aliquip quis eiusmod. Irure nisi in tempor adipisicing dolor cillum minim quis nulla et est cupidatat magna exercitation. Sit amet minim est commodo.',
                                categories: ["Tech", "Games", "Tech", "Games", "Tech", "Games"],
                                //thumbnail: 'https://www.dafont.com/forum/attach/orig/5/6/561721.jpg'
                        } 
                },
                revalidate: 1,
        }
      }

interface PostProps {
        title: string;
        date: string;
        content: string;
        categories: string[];
}

interface ArticlePageProps {
        article: PostProps;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({article}) => {        
        return <ArticleDetail title={article.title} content={article.content} categories={article.categories} date={article.date}/>;
}
export default ArticlePage;