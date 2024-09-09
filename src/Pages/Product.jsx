import Button from "../components/Elements/Button/button";
import { useEffect, useRef, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { json } from "react-router-dom";
import { getProduct } from "../services/product.services";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../contex/DarkMode";

//tangkap email

const ProductPage = () => {
  // Hooks (Usestate)
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  //components didmount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); //didupdate , tambahkan []

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  //components didupdate
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleJson = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  //useRef

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div>
      <div className="flex h-20 items-center text-xl capitalize text-white justify-end bg-blue-600 px-10">
        {username}
        <Button classname="bg-black ml-3" onClick={handleLogout}>
          Logout
        </Button>
        <button
          className="right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
      <div
        className={`w-full flex flex-wrap justify-center py-5 ${
          isDarkMode && "bg-slate-900"
        }`}
      >
        {/* Iterasi Array */}
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  id={product.id}
                  image={product.image}
                ></CardProduct.Header>
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                >
                  {product.price}
                </CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3x ml-5 mb-2 text-blue-600 font-bold">Cart</h1>
          <table
            className={`text-left table-auto border-separate border-spacing-x-5 ${
              isDarkMode && "text-white"
            }`}
          >
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id} className="text-center">
                      <td>{product.title.substring(0, 15)}</td>
                      <td>
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.quantity}</td>
                      <td>
                        Rp{" "}
                        {(item.quantity * product.price).toLocaleString(
                          "id-ID",
                          {
                            styles: "currency",
                            currency: "IDR",
                          }
                        )}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
              <tr>
                <td>
                  <Button onClick={handleJson} classname="bg-blue-700">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
