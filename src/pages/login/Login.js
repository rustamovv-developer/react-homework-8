import React, { memo, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../sass/login.scss";

const url = "https://fakestoreapi.com/auth/login/";

function Login() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(url, { username, password })
      .then((res) => {
        const data = res.data;
        console.log(data.message);
        if (data.message === "Error") {
          toast.error();
        } else {
          console.log(data);
          localStorage.setItem("token", data.token);
          window.open("/admin", "_self");
          toast.warn("Welcome");
        }
      })
      .catch((err) => {
        toast.error("Email or password incorred");
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      {loading && (
        <div id="loading">
          <span class="loader"></span>
        </div>
      )}
      <div class="wrapper">
        <div class="login-box">
          <form onSubmit={handleSubmit} action="">
            <h2>Login</h2>

            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              ></input>
              <label>Email</label>
            </div>

            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              ></input>
              <label>Password</label>
            </div>

            <div class="remember-forgot">
              <label>
                <input type="checkbox"></input> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

            <div class="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(Login);
