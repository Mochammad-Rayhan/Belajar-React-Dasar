import { useContext } from "react";
import { DarkMode } from "../../contex/DarkMode";

const AuthLayout = (props) => {
  const { children, title } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs rounded-2xl border-2 px-4 py-4">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className=" text-3xl font-bold mb-2 text-center text-blue-600">
          {title}
        </h1>
        <p className="font-medium text-center text-slate mb-9">
          Welcome , Please enter your detail
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
