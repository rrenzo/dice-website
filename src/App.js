import {useState} from "react";
import './App.css';
import Axios from 'axios';
import diceRoll from './components/diceRoll.js'

function App() {

  const [results, setResults] = useState([]);

  function handleClick() {
    Axios.get('http://localhost:5000/randomNumber')
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(response.data[0]);
      setResults(results => [...results, response.data[0]]);
    })
    
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Roll Website</h1>
       <div>
        <button type="button" onClick={handleClick()}>Generate New Roll</button>
        </div>
        <div> {diceRoll(results[results.length - 1])} </div>
      </header>
    </div>
  );
}

export default App;
