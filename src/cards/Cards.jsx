import { Link, useNavigate } from "react-router-dom";
import productsData from "../data1/productsData";
import { useDispatch } from "react-redux";
import { ADDCART } from "../cart/CartSlice";

export const Cards = ({ category }) => {

    let dispatch=useDispatch();

    const filteredProducts =
        category === "All"
            ? productsData.slice(0, 11)
            : productsData.filter(item => item.category === category);

    const navigate = useNavigate();

    const goToProducts = () => navigate("/products");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="container py-4">
            <div className="row g-4">

                {filteredProducts.map(item => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                        <div className="card bg-dark border border-secondary-subtle h-100">
                            <Link
                                to={`/product/${item.id}`}
                                onClick={scrollToTop}
                                className="text-decoration-none"
                            >
                                <div className="d-flex justify-content-center p-3">
                                    <img
                                        src={item.heroImage}
                                        alt={item.title}
                                        className="img-fluid"
                                        style={{ height: "140px", objectFit: "contain" }}
                                    />
                                </div>

                                <div className="px-3">
                                    {[...Array(item.rateCount)].map((_, i) => (
                                        <span key={i} className="text-danger text-bold big">★</span>
                                    ))}
                                </div>
                            </Link>
                            <div className="card-body text-white">

                                <h6 className="fw-semibold">{item.title}</h6>

                                <p className="text-secondary small mb-2">
                                    {item.info}
                                </p>

                                <div className="d-flex align-items-center gap-2">
                                    <span className="fw-bold fs-6">₹{item.finalPrice}</span>
                                    <span className="text-muted text-decoration-line-through small">
                                        ₹{item.originalPrice}
                                    </span>
                                </div>

                                <button className="btn btn-danger w-100 mt-3" onClick={() => dispatch(ADDCART({ ...item, quantity: 1 }))}>
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <button
                        onClick={goToProducts}
                        className="btn w-100 h-100 border border-secondary bg-dark text-light fw-semibold"
                    >
                        Browse All Products →
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cards;
