import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../app/store';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <>
    <div className= "login-container">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input className='input-user' name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input className='input-user' name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
      </div>
      <div className="policy-container">
      <p>
        By signing up and logging in, you agree to our{" "}
        <a href="/content-policy">Cool Content Policy</a> and{" "}
        <a href="/privacy-policy">Private Parts Policy</a>.
      </p>
    </div>
    </>
  );
};

export default AuthForm;
