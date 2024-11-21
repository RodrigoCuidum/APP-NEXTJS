import { LikeButton } from './LikeButton.jsx'
import Link from 'next/link.js'
const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

export async function ListOfPosts () {
  const posts = await fetchPost()

  return posts.slice(0, 10).map((post) => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09F' }}>
          {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}
