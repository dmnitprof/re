import {MainLayout} from '../components/MainLayout'
import Link from "next/link";
import {useState, useEffect} from 'react'

export default function Posts({ posts: serverPosts }) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(()=> {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout title={'Посты'}>
            <p className='loader'>Загрузка ...</p>
        </MainLayout>
    }

    return (
        <MainLayout title={'Посты'}>
            <h1>Список постов</h1>
            <hr />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                     <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                         <a>{post.title}</a>
                     </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null}
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()

    return {
        posts
    }
}