import React from 'react';
import UseForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const SignUp = (submitForm) =>  {

    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    Welcome.
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">User Name:</label>
                    <input id="name" type="text" name="username" className="form-input" placeholder="Enter your username" value={values.username} onChange={handleChange}></input>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="Enter your Email" value={values.username} onChange={handleChange}></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input id="password" type="password" name="password" className="form-input" placeholder="Enter your Password" value={values.username} onChange={handleChange}></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password:</label>
                    <input id="password2" type="password" name="password2" className="form-input" placeholder="Repeat your Password" value={values.username} onChange={handleChange}></input>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">Register User</button>
            </form>
        </div>
    );


}

export default SignUp;