import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Stock from './components/Stock'


import './App.css';

function App() {

let token = "";

const [ticker, setTicker] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [inputTicker, setInputTicker] = useState("");
const [searchTicker, setSearchTicker] = useState("");

const lookUpTicker = () => {
const getData = async () => {
setIsLoading(true);
setIsError(false);

try{
  const response = await fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${token}`)
  const data = await response.json();
  console.log(data)
  setTicker(data)

}

catch(error){
  setIsError(true);
  console.log(error)
}
setIsLoading(false);

}
getData();
}

useEffect(() => lookUpTicker(), [searchTicker])

  return (
    <div className = "App">
      <header className = "App-header">
        <input 
        type = "text"
        onChange={e => setInputTicker(e.target.value)}
        placeholder = "ticker"/>
        <br></br>
      <button onClick={e => setSearchTicker(inputTicker)}>Submit </button>

      {/* if/else statement */}
      {isLoading ? <p>Loading...</p> : (!isError && <Stock data = {ticker}/>)}    
      </header>


    </div>

  );
}

export default App;
