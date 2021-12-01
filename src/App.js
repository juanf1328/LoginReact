import React from 'react';
import SignUp from './formSignUp';
import Login from './components/Login';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { render } from 'react';




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

 
 /*const SignUpp = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const buttonHandler = () => {
      setIsLoading(current => !current)
    }
  
    useEffect( () => {
      console.log(isLoading);
  }, [isLoading]);
 */

  render() 
    return <>
      
    <BrowserRouter>
   <div className="app">
        <Routes> 
          <Route path="/Login" element={<Login/>}/>
          <Route path="/formSignUp" element={<SignUp/>}/>
        </Routes>
      
    <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
  </div>
</BrowserRouter>
  ) : (
    <Login login={login} error={error} SignUp={SignUp} />
    );
    </>

  }

export default App;
