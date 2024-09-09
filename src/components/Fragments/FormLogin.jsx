import InputForm from "../Elements/input/index";
import Button from "../Elements/Button/button";
import DontHaveAcc from "../Elements/input/DontHaveAcc";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // console.log("Login Rayhan");
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    // window.location.href = "/product";

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="**********"
        name="password"
      ></InputForm>
      <Button classname="bg-blue-700 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-600 mt-3 text-center">{loginFailed}</p>
      )}
      <DontHaveAcc
        detail="Dont have an account ? "
        to="/register"
        info="Sign Up"
      />
    </form>
  );
};

export default FormLogin;

// else {
//   setLoginFailed(res.response.data);
//   console.log(res);
// }
