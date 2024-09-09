import { Children } from "react";
import Button from "../Elements/Button/button";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full flex flex-col justify-between max-w-sm bg-gray-800 mb-6 border border-gray-700 mr-3 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 object-cover h-60 w-full rounded-t-lg"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-4 pb-2 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold tracking-light text-white mb-2">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { children, handleAddToCart, id } = props;
  return (
    <div className="flex items-center px-5 py-3 justify-between mb-2">
      <span className="text-xl font-bold text-white">
        Rp{" "}
        {children.toLocaleString("id-ID", {
          styles: "currency",
          currency: "IDR",
        })}
      </span>
      <Button classname="bg-blue-700" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

// Nested Components
