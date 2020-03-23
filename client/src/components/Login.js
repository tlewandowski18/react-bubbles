import React, {useState} from "react";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(creds)
    axios.post('http://localhost:5000/api/login', creds)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          name="username"
          value={creds.username}
          onChange={handleChange}
          className="login-input"
        />
        <input
          placeholder="Password"
          name="password"
          value={creds.password}
          onChange={handleChange}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </>
  );
};

export default Login;
