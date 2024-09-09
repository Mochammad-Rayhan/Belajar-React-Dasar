import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oopss!!</h1>
      <p>sorry , an unexpected error has occured </p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
