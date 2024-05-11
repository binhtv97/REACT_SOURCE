import React from 'react';
import { useNavigate } from 'react-router-dom';

function Book() {
  const [books, setBooks] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1');
      const data = await res.json();
      console.log('data', data)
      setBooks(data);
    }
    fetchData();
  }, [])

  function gotoDetail(bookId) {
    navigate(`/book/${bookId}`)
  }

  return (
    <div>
      <h2>Book</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => gotoDetail(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Book