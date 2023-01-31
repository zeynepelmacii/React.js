import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
      <div className="title"><h1>Beden Kitle İndeksi Hesaplama</h1></div>
      <div className='components'>
        <Navbar/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
