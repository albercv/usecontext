import './App.css';
import { Router } from './routing/Router';
import { Context } from './context/Context';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    let userLocalStorage = JSON.parse(localStorage.getItem("user"))
    setUser(userLocalStorage)
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user]);

  return (
    <div className="App">
      <Context.Provider value={{
        user,
        setUser
      }}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
