import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul
      style={{
        background: '#eee',
        fontSize: '13px',
        listStyle: 'none',
        padding: '10px'
      }}
    >
      {comments.map((comment) => (
        <li
          key={comment.id}
          style={{
            marginBottom: '20px',
            textAlign: 'left',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px'
          }}
        >
          <h4 style={{ textAlign: 'center', marginBottom: '5px' }}>
            {comment.name}
          </h4>
          <small style={{ display: 'block', marginBottom: '10px' }}>
            {comment.body}
          </small>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px'
            }}
          >
            <Image
              width={50}
              height={50}
              src={`https://avatar.iran.liara.run/public/${comment.id}`}
              alt={comment.name}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
