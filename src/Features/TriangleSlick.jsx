import Slider from "react-slick";
import productsData from "../data1/productsData";
import { Link } from "react-router-dom";
const SliderComponent = Slider.default ? Slider.default : Slider;

export const TriangleSlick = () => {

    
 const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 600,
  autoplay: true,        // correct prop
  autoplaySpeed: 2000,   // auto slide timing
  pauseOnHover: true,
  arrows: false
};


  return (
    <div className="bg-dark text-white py-5 px-3">

      <h1 className="text-center fw-bold fs-1 mb-4 mt-4 display-1">
        Featured Products
      </h1>
<SliderComponent {...settings}>
  {productsData.map(item => (
    <div key={item.id}>
      <Link to={`/product/${item.id}`} className="text-decoration-none text-white">

        <div className="product-card">

          <p className="text-secondary small mb-2 text-truncate">
            {item.title}
          </p>

          <img
            src={item.heroImage}
            alt={item.title}
            className="product-image"
          />

          <div className="d-flex justify-content-center gap-2 mt-2">
            <span className="fw-bold">₹{item.finalPrice}</span>
            <span className="text-secondary text-decoration-line-through small">
              ₹{item.originalPrice}
            </span>
          </div>

        </div>

      </Link>
    </div>
  ))}
</SliderComponent>


    </div>
  );
};


