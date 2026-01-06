import { Link, useParams } from "react-router-dom";
import productsData from "../data1/productsData";

export const RelatedProducts = () => {

  const { id } = useParams();
  const currentProduct = productsData.find(item => item.id === Number(id));

  const relatedProducts = productsData
    .filter(item =>
      item.category === currentProduct.category &&
      item.id !== currentProduct.id
    )
    .slice(0, 4);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container my-4">
      <h4 className="text-light fw-semibold mb-3">
        Related Products
      </h4>

      <div className="row g-4">

        {relatedProducts.map(item => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card bg-dark border border-secondary-subtle h-100">

              <Link to={`/product/${item.id}`} onClick={scrollToTop} className="text-decoration-none">

                {/* Image */}
                <div className="d-flex justify-content-center p-3">
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    className="img-fluid"
                    style={{ height: "140px", objectFit: "contain" }}
                  />
                </div>

                {/* Rating */}
                <div className="px-3">
                  {[...Array(item.rateCount)].map((_, i) => (
                    <span key={i} className="text-danger text-bold ">★</span>
                  ))}
                </div>

                {/* Card body */}
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
                </div>
              </Link>

              {/* Add to Cart */}
              <div className="card-footer bg-transparent border-0 px-3 pb-3">
                <button className="btn btn-danger w-100">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default RelatedProducts;
