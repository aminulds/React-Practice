import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Redmi 1', price: '$99.99'},
    {name: 'Redmi 2', price: '$98.99'},
    {name: 'Redmi 3', price: '$97.99'},
    {name: 'Redmi 4', price: '$96.99'},
    {name: 'Redmi 5', price: '$95.99'},
    {name: 'Redmi 6', price: '$94.99'},
    {name: 'Redmi 7', price: '$93.99'}
  ]
  //Return APP
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <Todos></Todos>
        <Counter></Counter>
        {
          products.map(product => <Products productDetails={product}></Products>)
        }
        <Person name='Aminul' job='JS Developer'></Person>
        <Person name='Tamanna' job='Student'></Person>
      </header>
     
    </div>
    
  );
}

// User API Data
function Todos(){
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  }, []);
  return(
    <div>
      <h3>Total Todos: {todos.length}</h3>
      {
        todos.map(todo => 
          <div>
            <p>Title: {todo.title} </p>
          </div>
        )
      }
    </div>
  )


}
// useState
function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div style={{marginBottom: '30px'}}>
      <h3>Count: {count}</h3>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button style={{cursor: 'pointer'}} onClick={() => setCount(count + 1)}>
        Like <span style={{color: 'green', fontWeight: 'bold'}}>{count}</span>
      </button>
    </div>
  )
}
//products
function Products(props){
  const productStyle = {
    height: '150px', 
    width: '150px', 
    backgroundColor: 'lightgray',
    borderRadius: '10px',
    padding: '10px 20px',
    marginBottom: '10px'
  };
  return (
    <div style={productStyle}>
      <h3>{props.productDetails.name}</h3>
      <p>{props.productDetails.price}</p>
    </div>
  )
}
//person
function Person(props){
  return (
    <div style={{backgroundColor : 'lightsalmon', margin: '10px', padding: '10px'}}>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job} </p>
    </div>
  )
}


export default App;
