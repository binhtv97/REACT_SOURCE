import { useState } from 'react';
import ReactJSX from './ReactJSX';
import Props from './Props';
import State from './State';
import Component from './Component';
import ConditionalRendering from './ConditionalRendering';
import ListKey from './ListKey';
import StyleComponent from './StyleComponent';
import Button from './components/Button';
import GenerateBoxBinh from './sample-app-binh/GenerateBoxBinh';
import LiftingStateUp from './LiftingStateUp';
import Form from './Form';

/* muốn render react component JSX phải:
- viêt PascalCase: Button, Card, Welcome, ProductList
- <NameComponent />: <Button />, <Card />, <Welcome />, <ProductList />

*/


function App() {

  function onChangeTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // document.body.classList.toggle('dark');
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark')
  }
  return (
    <>

      <Button 
        text="Change theme"
        onClick={onChangeTheme}
      />
      
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
      <ListKey />

      <br />
      <StyleComponent />

      <br />
      <LiftingStateUp />

      <br />
      <Form />

      <br />
      <GenerateBoxBinh />

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
