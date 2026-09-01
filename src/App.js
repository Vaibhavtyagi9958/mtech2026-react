import logo from './logo.svg';
import './App.css';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href='https://reactjs.org'
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>navigate('/Header',{state:{id:1,name:"abc"}})}>Go To Header</button>
        <button onClick={()=>navigate('/footer')}>Go To Footer</button>

      </header>
    </div>
  );
}

export default App;
