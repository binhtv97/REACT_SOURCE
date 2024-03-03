import { useState } from 'react';
import ReactJSX from './ReactJSX';
import Props from './Props';
import State from './State';
import Component from './Component';
import ConditionalRendering from './ConditionalRendering';

/* muốn render react component JSX phải:
- viêt PascalCase: Button, Card, Welcome, ProductList
- <NameComponent />: <Button />, <Card />, <Welcome />, <ProductList />

*/


function App() {
  return (
    <>
      
      <ReactJSX />

      <br />
      <Props />

      <br />
      <State />

      <br />
      <Component />

      <br />
      <ConditionalRendering />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
