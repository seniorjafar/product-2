import React, { useEffect } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const initialState = {
  UserName: "john32",
  password: "12345678",
};
import { useUserIsLoginMutation } from "../../redux/api/userApi";
import { useGetInputValue } from "../../hooks/useGetInputValue";
const Login = () => {
  const navigate = useNavigate();
  const { data, handleChange } = useGetInputValue(initialState);
  const [loginUser, { isLoading, isSuccess, data: loginSuccess }] =
    useUserIsLoginMutation();
  const handleLoginUser = (e) => {
    e.preventDefault();
    loginUser(data);
  };
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", loginSuccess?.data?.token);
      navigate("/");
    }
  }, [isSuccess]);
  return (
    <>
      <form onSubmit={handleLoginUser} action="" className="login__form">
        <h2 className="login__title">Log In</h2>
        <label htmlFor="username">Username</label>
        <input
          value={data.UserName}
          name="UserName"
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="Username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={data.password}
          name="password"
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <button>{isLoading ? "Loading..." : "Log In"}</button>
      </form>
      <div className="model__owerley model__owerley-1"></div>
    </>
  );
};

export default Login;
