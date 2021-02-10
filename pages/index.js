import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Article } from '../components/Article/Article.component';
import fetch from 'isomorphic-unfetch';

export default function Home({articles}) {

  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        articles && articles.map(({title, date, tags, shortDescription, thumbnail, slug}, index) => 
        <Article key={index+slug} title={title} date={date}  tags={tags.map(tag => ({id: tag.id, name: tag.name}))} shortDescription={shortDescription} thumbnail={thumbnail} slug={slug}></Article>)
      }

    </div>
  )
}


export async function getStaticProps(){
  const url = process.env.API_URL;
  const res = await fetch(`${url}/articles`);
  const articles = await res.json();
  return {
    props:{
      articles
    }
  }
}