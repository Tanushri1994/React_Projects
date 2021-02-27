 
import './App.css';
import List from './List'
import data from './data'
import React, { useState } from 'react'
function App(){

  // create a state variable here
	const [people, setPeople] = useState(data);
  const [items, setItems] = useState([]);

  const addMoreItem = () => {
    setItems(prevItems => [...prevItems, {
      id: prevItems.length,
      value: getRandomNumber()
    }]);
  }

  const getRandomNumber = () => {
    return Math.random().toString().substring(2, 8);
  }

	// this should clear all records
const clearAllRecords =() => {
  console.log("clearallrecords");
		setPeople([]);
       
	}

   
  return (          
    <>
      <nav className="navbar">
        <img src="" alt="Logo image" />
      </nav>

      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={clearAllRecords}>Clear All</button>
          </section>
       </main>
       <h2>
         
       <button onClick={addMoreItem}>Add More</button>
       
      <p>Output: </p>
      <pre>{JSON.stringify(items, null, 2)}</pre>
      {console.log(items)}
        </h2>
    </>
  );
}

export default App;
