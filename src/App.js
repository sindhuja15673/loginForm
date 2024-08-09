import { useState } from 'react';
import './App.css';
import Product from './product';
import Login from './Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState('');

  const handleLogin=()=>{
    setLoggedIn(true);
  }
  return (
    <div className="App">
      {isLoggedIn ? <Product /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
