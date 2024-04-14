import React from 'react';

export const useFetch = ({ resource }) => {
  const [dataSource, setDataSource] = React.useState([]);
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=5&_page=${page}`)
      .then(json => json.json())
      .then(data => {
        setDataSource(data)
      })
  }, [resource, page])

  function prevPage() {
    setPage(prevState => {
      if(prevState >= 0) return 1;
      return prevState - 1;
    })
  }

  function nextPage() {
    setPage(prevState => prevState + 1)
  }

  return {
    dataSource,
    page,
    prevPage,
    nextPage
  }
}