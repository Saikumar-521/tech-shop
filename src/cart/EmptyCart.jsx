import { useNavigate } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import Header from "../pages/Header";

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
      <>
      <Header/>
      <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "100vh" }}
    >
      <BsCartX size={300} className="text-danger mb-3" />

      <h2 className="mb-2">Your cart is empty</h2>
      <p className="text-muted mb-4">Add some items to your cart</p>

      <button
        className="btn btn-danger text-white px-4 py-2"
        onClick={() => navigate("/products")}
      >
        Shop Now
      </button>
    </div>
      </>
  );
};
