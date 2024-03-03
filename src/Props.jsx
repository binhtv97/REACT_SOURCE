import React from 'react';
import Card from './components/Card';

function Welcome({ title }) {
  return (
    <div>
     Welcome component {title}
    </div>
  );
}

function Props() {
  const title = 'Card 1';

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
      

    </div>
  )
}

export default Props