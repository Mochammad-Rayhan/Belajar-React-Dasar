import InputForm from "../Elements/input/index";
import Button from "../Elements/Button/button";
import DontHaveAcc from "../Elements/input/DontHaveAcc";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="name"
        type="text"
        placeholder="Enter Your Name"
        name="name"
      ></InputForm>
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="text"
        placeholder="**********"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="text"
        placeholder="**********"
        name="confirmpassword"
      ></InputForm>
      <Button classname="bg-blue-700 w-full">Register</Button>
      <DontHaveAcc detail="Have an account ? " to="/login" info="Login" />
    </form>
  );
};

export default FormRegister;
