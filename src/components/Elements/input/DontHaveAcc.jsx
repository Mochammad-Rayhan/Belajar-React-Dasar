import { Link } from "react-router-dom";

const DontHaveAcc = (props) => {
  const { detail, info, to } = props;
  return (
    <p className="text-center mt-3 text-sm">
      {detail}{" "}
      <Link to={to} className=" font-bold py-1 px-1 rounded text-blue-600">
        {info}
      </Link>
    </p>
  );
};

export default DontHaveAcc;
