import React, { useState } from 'react';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';

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
import StateHook from './StateHook';
import RefHooks from './RefHooks';
import SkipEffectRenderFirst from './SkipEffectRenderFirst';
import PerformanceHook from './PerformanceHook';
import CustomHooks from './CustomHooks';
import ReactPortal from './ReactPortal';
import User from './components/Outlet/User';
import Profile from './components/Outlet/Profile';
import Account from './components/Outlet/Account';
import Book from './components/Books/Book';
import BookDetail from './components/Books/BookDetail';
import SignIn from './components/Signin';
import MainLayout from './layouts/MainLayout';
import AuthComponent from './components/AuthComponent';
import GuestComponent from './components/GuestComponent';

/* muốn render react component JSX phải:
- viêt PascalCase: Button, Card, Welcome, ProductList
- <NameComponent />: <Button />, <Card />, <Welcome />, <ProductList />
*/

function App() {

  console.log('App render')

  // send error log when has online
  React.useEffect(() => {
    const error_log = window.localStorage.getItem('error_log');
    if(!error_log) return;
    if(window.navigator.onLine) {
      // send error log on BE
      // delete localstorage error_log
      console.log('send error log on BE')
    }
  },[])


  function onChangeTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // document.body.classList.toggle('dark');
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark')
  }
  return (
    <>
      <Routes>
       
     


        <Route 
          path="/"
          element={
            <AuthComponent>
              <MainLayout>
                <Outlet />
              </MainLayout>
            </AuthComponent>
          }
        >
          <Route path="/" element={<ReactJSX />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/component" element={<Component />} />
          <Route path="/user" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/form" element={<Form />} />
        </Route>

        <Route path="/signin" element={<GuestComponent><SignIn /></GuestComponent>} />
        <Route path="*" element={<div>this is not page</div>} />
      </Routes>
     

      <br />

     


      <br /><br /> <hr/>

      <Button 
        text="Change theme"
        onClick={onChangeTheme}
      />
      
      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <StyleComponent />

      <br />
      <LiftingStateUp />

      <br />

      <br />
      <GenerateBoxBinh />

      <br />
      <StateHook />

      <br />
      <RefHooks />

      <br />
      <SkipEffectRenderFirst />

      <br />
      <PerformanceHook />

      <br />
      <CustomHooks />

      <br />
      <ReactPortal />
      
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
