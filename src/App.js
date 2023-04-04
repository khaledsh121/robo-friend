import './App.css';

import { useEffect, useState } from 'react';
import SearchField from './component/searchField';
import CardList from './component/Card-List';

function App() {

  const [monster,setMonster] = useState([]);
  const [newText , setNewText] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => setMonster(users));
  } ,[]);

  const changeSearchHandler = (newText) =>{
    setNewText(newText);
  };

  const filteredMonster = monster.filter(monster => monster.name.includes(newText))
  

  if(filteredMonster.length ===0){
    return (
      <div>
        <SearchField onChangeSearch={changeSearchHandler} />
        <div>
         <h1>There was no found result</h1>
        </div>
    </div>
    )
  }

  return (
    <div>
      <SearchField onChangeSearch={changeSearchHandler} />
      <div >
      <CardList monsterList={filteredMonster} />
      </div>
    </div>
  );
}

export default App;
