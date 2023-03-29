import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser> 
    </div>
  );
} 


function ExternalUser (){
  const [users, setUsers] = useState([]);

  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data) );
  }, [])

  return(
    <div>
       <h2>External User</h2>
       <p>{users.length}</p>
       {
        users.map(user => <User name={user.name} email={user.email} city={user.address.city}></User>)
       }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid black', margin: '15px', background: 'tomato', borderRadius:'10px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
    </div>
  )
}

 


function Counter(){
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button><br /><br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
} 



function Product(props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
