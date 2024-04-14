import React from 'react'

import { useFetch } from '../hooks/useFetch';

function Laptop() {
  const { dataSource, page, nextPage, prevPage } = useFetch({
    resource: '/todos'
  })

  return (
    <div>
      <h2>Fragrance</h2>
      <div>
        {dataSource.map(data => (
          <div key={data.id}>Title: {data.title} </div>
        ))}
      </div>
      <br />
      <button type="text" onClick={prevPage}>Prev</button>
      <span>{page}</span>
      <button type="text" onClick={nextPage}>Next</button>
    </div>
  )
}

export default Laptop