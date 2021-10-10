import './App.css';
import { useEffect, useState } from 'react';

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
  //Student
  // const students = [
  //   {name: 'Aminul', age: 22, height: '5.4"', weight: '68kg'},
  //   {name: 'Tamanna', age: 20, height: '5.3"', weight: '55kg'},
  //   {name: 'Shaon', age: 21, height: '5.5"', weight: '62kg'},
  //   {name: 'Shaon', age: 21, height: '5.5"', weight: '62kg'},
  //   {name: 'Shaon Ali', age: 21, height: '5.5"', weight: '60kg'},
  // ]
  // useEffect
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  //Return APP
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {
          users.map(user => <Student userDetails={user} key={user.id} />)
        }
        <MovieCount/>
        {
          // students.map(student => <Student name={student.name} age={student.age} height={student.height} weight={student.weight} />)
        }

        <Counter/>
        {
          products.map(product => <Products productDetails={product}/>)
        }
        
      </header>
     
    </div>
    
  );
}

// movie count useState
function MovieCount(){
const [count, setCount] = useState(1);
  return(
    <div style={{marginBottom: '20px'}}>
      <h3>I have completed {count} movies.</h3>
      <button onClick={() => setCount(count + 1)} style={{padding: '10px', cursor: 'pointer'}}>Add Movie</button>
    </div>
  )
}
// Student
function Student(props){
  const studentStyle = {
    width: '300px', 
    backgroundColor: 'gray',
    borderRadius: '10px',
    padding: '10px 20px',
    marginBottom: '10px'
  };
  // const {name, age, height, weight} = props.studentDetails;
  const {name, username, email, website} = props.userDetails;
  return (
    <div style={studentStyle}>
      <h3>Name: {name}</h3>
      <p>UserName: {username} </p>
      <p>Email: {email} </p>
      <p>Website: {website} </p>
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



export default App;
