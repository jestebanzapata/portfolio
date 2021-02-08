import React from 'react';
import { Article } from '../../components/Article/Article.component';


export async function getStaticProps(){
    return {
        props: {
            articles: []
        }
    };
}


export default function Blog({articles}) {
    return (
        <div>
            {
                articles && articles.map(article => <Article></Article>)
            }
        </div>
    )
}
