import React, { useState } from 'react';
//import { render } from 'react';




function Login(login, error) {
	const [details, setDetails] = useState({username: "", email: "", password: ""});

	const submitHandler = e => {
		e.preventDefault();

		login(details);
	}
/*const adminUser = {
	email: this.email,
	password: this.password
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
*/
 /*const Logout = () => {
    setUser ({ name: "", email: ""});
  }

 
 /*const SignUpp = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const buttonHandler = () => {
      setIsLoading(current => !current)
    }
  
    useEffect( () => {
      console.log(isLoading);
  }, [isLoading]);*/
 


	return (
		<form onSubmit={submitHandler}>	
			<div className="form-inner">
				<h2>Login</h2>
				{(error !== "") ? ( <div className="error">{error}</div> ) : ""}
				<div className="form-group">
			   		<label htmlFor="name">User name:</label>
			   		<input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
				</div>	
				<div className="form-group">
					<label htmlFor="email">Email:</label>	
					<input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
				</div>	
				<div className="form-group">
					<label htmlFor="password">Password:</label>	
					<input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
				</div>
				<div className="form-group">
					<input type="submit" value="Login"/>	
				</div>
				
			
			</div>
		</form>
		);
	}


export default Login;