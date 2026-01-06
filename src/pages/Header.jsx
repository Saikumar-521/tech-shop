import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import SignIn from "../Features/Authentication/SignIn";
import { SignUp } from "../Features/Authentication/SignUp";
import Search from "../Features/Search";
import { useSelector } from "react-redux";

export const Header = () => {
  const name = "Tech-Shop";

  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const cartItems = useSelector(state => state.cart);
  const cartlength = cartItems.length;
  useEffect(() => {
    document.body.style.overflow = showModal || showSearch ? "hidden" : "";
  }, [showModal, showSearch]);
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
        setShowSearch(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <>
      <header className="bg-dark text-white py-2 px-4 d-flex justify-content-between align-items-center">
        <Link to="/" className="fw-bold fs-3 text-white text-decoration-none">
          {name}
        </Link>

        <div className="d-flex align-items-center gap-4">
          <IoIosSearch
            className="fs-4 cursor-pointer text-white"
            onClick={() => setShowSearch(true)}
            title="search"
            aria-label="search"
          />
          <div className="position-relative cursor-pointer" onClick={() => window.location.href = "/cart"}>
            <LuShoppingCart className="fs-4 text-white"  title="cart"/>
            {cartlength > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
                {cartlength}
              </span>
            )}
          </div>
          <FaRegUserCircle
            className="fs-4 cursor-pointer text-white"
            onClick={() => setShowModal(true)}
            title="user/login"
          />
        </div>
      </header>
{showModal && (
  <div
    className="modal d-block"
    tabIndex="-1"
    onClick={() => setShowModal(false)}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content bg-dark text-white">

        <div className="modal-header">
          <h5 className="modal-title">
            {isLogin ? "Login" : "Create Account"}
          </h5>

          <button
            className="btn-close btn-close-white"
            onClick={() => setShowModal(false)}
          ></button>
        </div>

        <div className="modal-body">
          <div className="w-100 mb-3 text-center">

            <p className="mb-2 text-secondary small">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"
              }
            </p>

            <p className="fw-semibold">
              <span
                className="text-white"
                style={{ cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>

              <span className="mx-2 text-secondary">/</span>

              <span
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Create Account
              </span>
            </p>
          </div>
          {isLogin ? (
            <SignIn onSuccess={() => setShowModal(false)} />
          ) : (
            <SignUp onSuccess={() => setIsLogin(true)} />
          )}

        </div>
      </div>
    </div>
  </div>
)}
      {showSearch && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-start z-3">
          <div className="bg-dark p-3 rounded shadow mt-4" style={{ width: "480px" }}>
            <div className="position-relative">

              <Search />

              <span
                className="position-absolute top-0 end-0 translate-middle-y me-4 text-secondary"
                style={{ cursor: "pointer", fontSize: "28px", fontWeight: "bold", lineHeight: 1 }}
                onClick={() => setShowSearch(false)}
              >
                &times;
              </span>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
