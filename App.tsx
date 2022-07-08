import { Header } from "./components/header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ftiagof.png",
      name: "Tiago Farias",
      role: 'Web Developer Usina Estiva'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'tiago.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-23 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lidiane16.png",
      name: "Lidiane Reis",
      role: 'Analista de Sistemas NuBank'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-23 20:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author} 
              content={post.content}
              publishedAt={post.publishedAt}
            />
            
          ))}

        </main>
      </div>
    </>
  )
}
