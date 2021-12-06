import React from 'react';
import SignUp from './formSignUp';
//import Login from './components/Login';
import { useState } from 'react';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import { render } from 'react';




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
   
  return(
    <BrowserRouter>
    <div className="App">
         <Routes>
            <Route path="/" element= {<Logout/> } />
            <Route path="/formSignUp" element= {<SignUp/> } />
            <Route path="components/Login" element= {<Login/> } />
          </Routes>
      </div>
    </BrowserRouter>
 
  );
 }

export default App;
