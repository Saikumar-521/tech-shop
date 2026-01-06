import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "./EmptyCart";
import { INCREMENT, DECREMENT, REMOVECART } from "./CartSlice";
import Header from "../pages/Header";
import { FaTrash } from "react-icons/fa";

export default function Cart() {

  const cartitems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (!cartitems || cartitems.length === 0) {
    return <EmptyCart />;
  }
  const getPrice = (item) =>
    Number(item.finalPrice || item.price || 0);

  const getMRP = (item) =>
    Number(item.originalPrice || item.mrp || item.finalPrice || 0);
  const originalPrice =
    cartitems.reduce(
      (sum, item) => sum + getMRP(item) * item.quantity,
      0
    );

  const totalPrice =
    cartitems.reduce(
      (sum, item) => sum + getPrice(item) * item.quantity,
      0
    );

  const discount = originalPrice - totalPrice;

  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">

            <h6 className="text-secondary mb-3">
              Cart Items ({cartitems.length})
            </h6>

            <div className="cart-scroll">

              {cartitems.map(item => {

                const price = getPrice(item);
                const mrp = getMRP(item);

                return (
                  <div
                    key={item.id}
                    className="position-relative d-flex border-bottom py-4 align-items-center"
                  >
                    <FaTrash
                      className="position-absolute top-0 end-0 text-white m-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(REMOVECART(item.id))}
                    />
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      style={{
                        width: "110px",
                        height: "110px",
                        objectFit: "contain"
                      }}
                    />

                    <div className="ms-3 flex-grow-1">

                      <h5 className="text-light mb-1">{item.title}</h5>
                      <p className="text-secondary small mb-1">{item.info}</p>
                      <h5 className="text-white mb-2">
                        ₹{price.toLocaleString()}
                        {mrp > price && (
                          <span className="text-secondary text-decoration-line-through ms-2 small">
                            ₹{mrp.toLocaleString()}
                          </span>
                        )}
                      </h5>
                      <div className="d-flex align-items-center">

                        <button
                          className="btn btn-outline-light px-2"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(DECREMENT(item));
                            } else {
                              dispatch(REMOVECART(item.id));
                            }
                          }}
                        >
                          −
                        </button>

                        <span className="mx-3 fw-bold">{item.quantity}</span>

                        <button
                          className="btn btn-outline-light px-2"
                          onClick={() => dispatch(INCREMENT(item))}
                        >
                          +
                        </button>

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded-3 p-4">

              <h6 className="text-secondary mb-3">
                Order Summary ({cartitems.length} items)
              </h6>

              <div className="d-flex justify-content-between mb-2">
                <span>Original Price</span>
                <span>₹{originalPrice.toLocaleString()}</span>
              </div>

              <div className="d-flex justify-content-between text-success mb-2">
                <span>Discount</span>
                <span>-₹{discount.toLocaleString()}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Delivery</span>
                <span className="text-success">Free</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total Price</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <button className="btn btn-danger w-100 py-2">
                Checkout
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
