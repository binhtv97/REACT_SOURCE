import React from 'react'

function ConditionalRendering() {
  const [forceUpdate, setForcUpdate] = React.useState(Date.now());
  const [products, setProducts] = React.useState(null);

  // &&
    // 'tony' && 'hello' -> true && 'hello' -> 'hello' 
    // false && 'hello' -> false
    // 'tony' && true -> true && true -> true
  // ||
  // ??
  // !
  // !'tony' -> !true -> false
  // !'' -> !false -> true
  // !!'tony' -> !!true -> !false -> true
  // !!{} -> !!true -> !false -> true

  return (
    <div>
      <h1>ConditionalRendering</h1>
      Total: {[].length ?? 'empty car'} $

      <br />
      {products && Array.isArray(products) && products.length > 0 && (
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
      
    </div>
  )
}

export default ConditionalRendering