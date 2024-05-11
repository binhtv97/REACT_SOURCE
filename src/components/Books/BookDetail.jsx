import React from 'react'
import { useParams } from 'react-router-dom'
// https://jsonplaceholder.typicode.com/posts/1


function BookDetail() {
  const [book, setBook] = React.useState(null);
  const params = useParams();
  const id = params.id;

  React.useEffect(() => {
    if(!id) return;
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setBook(data);
    }
    fetchData();
  }, [id])

  if(!book) return (
    <div>Loading...</div>
  )

  return (
    <div>
      <h2>Book Detail</h2>
      <h3>{book.title}</h3>
      <p>{book.body}</p>
    </div>
  )
}

export default BookDetail