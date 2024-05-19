import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './components/Card';

import { addTodo } from './states/todoAction';

function Welcome({ title }) {
  return (
    <div>
     Welcome component {title}
    </div>
  );
}

function Props() {
  const dispatch = useDispatch();
  const title = 'Card 1';

  function _addTodo() {
    const newTodo = {
      id: Date.now(),
      title: `Todo ${Date.now()}`
    }
    dispatch(addTodo(newTodo))
  }

  return (
    <div>
      <h2>Props</h2>
      
      <Card 
        title={title}
        description="description 1" // string
        color="red" // string
        isShowLoading={true} // boolean
        numbs={[1, 2, 3]} // array
        obj={{ name: 'name 1', age: 20 }} // object
        onClick={() => {}} // function
        component={Welcome} // pass function
        component2={<Welcome title={title} />} // pass React Element
      >
        this is children
      </Card>

      <button type="button" onClick={_addTodo}>Add Todo</button>
      

    </div>
  )
}

export default Props