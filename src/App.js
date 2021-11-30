import React from 'react';

import Login from './components/Login';
import { useState, useEffect } from 'react';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
 const adminUser = {
    email: "juancito@gmail.com",
    password: "juancito75"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);

   if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

 const Logout = () => {
    setUser ({ name: "", email: ""});
  }

 
  const SignUp = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const buttonHandler = () => {
      setIsLoading(current => !current)
    }
  
    useEffect( () => {
      console.log(isLoading);
  }, [isLoading]);
  
  return (
    
   

    <div className="App">
       <button onClick={buttonHandler} type="button">
        Change (now {"" + isLoading})
      </button>
       {isLoading? "Loading...": null}
      {(user.email !== "") ? (
       <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
         ) : (
        <Login login={login} error={error} SignUp={SignUp} />
        )}
    </div>
    
  );
         }

}
export default App;
