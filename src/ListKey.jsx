import React from 'react';
import Button from './components/Button';

// map
// for ... 
// forEach

function ListKey() {
  const [products, setProducts] = React.useState([
    { title: 'apple', id: 1, isStock: true },
    { title: 'fruits', id: 2, isStock: false },
    { title: 'iphone', id: 3 , isStock: true},
  ])

  const renderProducts = products.map(item => {
    const color = item.isStock ? 'green' : 'red'
    return (
      <div 
        key={item.id} 
        className={`heading ${color}`}
        style={{
          textAlign: 'left',
          // color
        }}
      >
        Title: {item.title}
        <Button />
      </div>
    )
  })

  console.log('renderProducts: ', renderProducts)

  return (
    <div>
      <h1>ListKey</h1>

      {renderProducts}
    </div>
  )
}

export default ListKey