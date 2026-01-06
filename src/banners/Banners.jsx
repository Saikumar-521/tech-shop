// import Slider from "react-slick";
// import productsData from "../data/data/productsData";
// import { useCallback, useMemo } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Banners() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   const taglineFilter = useCallback(
//     () => productsData.filter(item => item.tagline),
//     []
//   );

//   const finalTagline = useMemo(() => taglineFilter(), [taglineFilter]);

//   const navigate = useNavigate();

//   const shopProduct = (id) => navigate(`/product/${id}`);

//   return (
//     <>
//       <Slider {...settings}>
//         {finalTagline.map(item => (
//           <div key={item.id}>
//             <div className="container py-5">
//               <div className="row align-items-center">

//                 {/* Left section */}
//                 <div className="col-md-6">
//                   <p className="fs-5 text-secondary mb-1">{item.title}</p>

//                   <h2 className="fw-bold mb-3">{item.tagline}</h2>

//                   <div className="d-flex align-items-center gap-3 mb-3">
//                     <p className="fs-4 mb-0">₹{item.finalPrice}</p>

//                     <p className="fs-5 mb-0 text-decoration-line-through text-muted">
//                       ₹{item.originalPrice}
//                     </p>
//                   </div>

//                   <button
//                     className="btn btn-danger fw-semibold px-4"
//                     onClick={() => shopProduct(item.id)}
//                   >
//                     Shop Now
//                   </button>
//                 </div>

//                 {/* Right image */}
//                 <div className="col-md-6 text-center mt-4 mt-md-0">
//                   <img
//                     src={item.heroImage}
//                     alt={item.title}
//                     className="img-fluid"
//                     style={{ maxHeight: "340px" }}
//                   />
//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </>
//   );
// }

import Slider from "react-slick";
import productsData from "../data1/productsData";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
const SliderComponent = Slider.default ? Slider.default : Slider;

export default function Banners() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  // show only items that have a tagline
  const finalTagline = useMemo(
    () => productsData.filter(item => item.tagline),
    []
  );

  const navigate = useNavigate();
  const shopProduct = (id) => navigate(`/product/${id}`);

  return (
    <div className="banner-wrapper py-5 bg-dark">
      <SliderComponent {...settings}>

        {finalTagline.map(item => {
          const img = item.heroImage || item.images?.[0];   

          return (
            <div key={item.id}>
              <div className="container">

                <div className="row align-items-center hero-card text-white">

                  <div className="col-md-6">
                    <p className="text-secondary mb-2 fw-semibold">{item.title}</p>

                    <h1 className="fw-bold display-2 mb-3">
                      {item.tagline}
                    </h1>

                    <div className="d-flex align-items-center gap-3 mb-3">
                      <h3 className="fw-bold mb-0">₹{item.finalPrice}</h3>
                      <span className="text-secondary text-decoration-line-through">
                        ₹{item.originalPrice}
                      </span>
                    </div>

                    <button
                      className="btn btn-danger px-4 py-2 fw-semibold"
                      onClick={() => shopProduct(item.id)}
                    >
                      Shop Now
                    </button>
                  </div>

                  <div className="col-md-6 text-center mt-4 mt-md-0">
                    <img
                      src={img}
                      alt={item.title}
                      className="img-fluid"
                      style={{ maxHeight: "500px" }}
                    />
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </SliderComponent>
    </div>
  );
}
