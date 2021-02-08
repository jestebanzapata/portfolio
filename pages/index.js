import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Article } from '../components/Article/Article.component';

export default function Home() {

  const [articles, setArticles] = useState([
    {
      title: 'Nostrud sunt consequat id sint.',
      date: '02/02/2021',
      shortDescription: 'Culpa ipsum aliquip reprehenderit eu duis in cupidatat et. Nisi ipsum aute pariatur amet labore ullamco proident tempor. Et sit cupidatat exercitation sint velit nostrud in aliquip quis deserunt. Mollit ipsum eu laborum reprehenderit adipisicing consectetur ad excepteur et cillum proident labore commodo. Exercitation non duis sit eu deserunt eiusmod aliquip quis eiusmod. Irure nisi in tempor adipisicing dolor cillum minim quis nulla et est cupidatat magna exercitation. Sit amet minim est commodo.',
      categories: ["Tech", "Games", "Tech", "Games", "Tech", "Games"],
      //thumbnail: 'https://www.dafont.com/forum/attach/orig/5/6/561721.jpg'
    },
    {
      title: 'Nostrud sunt consequat id sint.',
      date: '02/02/2021',
      shortDescription: 'Culpa ipsum aliquip reprehenderit eu duis in cupidatat et. Nisi ipsum aute pariatur amet labore ullamco proident tempor. Et sit cupidatat exercitation sint velit nostrud in aliquip quis deserunt. Mollit ipsum eu laborum reprehenderit adipisicing consectetur ad excepteur et cillum proident labore commodo. Exercitation non duis sit eu deserunt eiusmod aliquip quis eiusmod. Irure nisi in tempor adipisicing dolor cillum minim quis nulla et est cupidatat magna exercitation. Sit amet minim est commodo.',
      categories: ["Tech", "Games", "Tech", "Games", "Tech", "Games"],
      //thumbnail: 'https://www.dafont.com/forum/attach/orig/5/6/561721.jpg'
    },
    {
      title: 'Nostrud sunt consequat id sint.',
      date: '02/02/2021',
      shortDescription: 'Culpa ipsum aliquip reprehenderit eu duis in cupidatat et. Nisi ipsum aute pariatur amet labore ullamco proident tempor. Et sit cupidatat exercitation sint velit nostrud in aliquip quis deserunt. Mollit ipsum eu laborum reprehenderit adipisicing consectetur ad excepteur et cillum proident labore commodo. Exercitation non duis sit eu deserunt eiusmod aliquip quis eiusmod. Irure nisi in tempor adipisicing dolor cillum minim quis nulla et est cupidatat magna exercitation. Sit amet minim est commodo.',
      categories: ["Tech", "Games", "Tech", "Games", "Tech", "Games"],
      //thumbnail: 'https://www.dafont.com/forum/attach/orig/5/6/561721.jpg'
    }
  ])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        articles && articles.map(({title, date, categories, shortDescription, thumbnail}) => 
        <Article title={title} date={date}  categories={categories} shortDescription={shortDescription} thumbnail={thumbnail}></Article>)
      }

    </div>
  )
}
