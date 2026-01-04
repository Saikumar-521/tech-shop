import Slider from "react-slick";

export default function Product() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container my-5">
      <Slider {...settings}>

   
        <div>
          <div className="row align-items-center bg-dark text-white rounded-4 p-5">
            <div className="col-md-6">
              <p className="text-secondary mb-2 fw-semibold">70% Lim 600NC</p>

              <h1 className="fw-bold display-5">
                Keep The Noise <br />
                Out, Or In. You <br />
                Choose.
              </h1>

              <div className="d-flex align-items-center gap-3 my-3">
                <h3 className="fw-bold mb-0">₹13,999</h3>
                <span className="text-secondary text-decoration-line-through">
                  ₹19,499
                </span>
              </div>

              <button className="btn btn-danger px-4 py-2 fw-semibold">
                Shop Now
              </button>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="/headphone.png"
                alt="Headphones"
                className="img-fluid"
                style={{ maxWidth: "380px" }}
              />
            </div>
          </div>
        </div>

        
        <div>
          <div className="row align-items-center bg-dark text-white rounded-4 p-5">
            <div className="col-md-6">
              <p className="text-secondary mb-2 fw-semibold">Wireless Pro X</p>

              <h1 className="fw-bold display-5">
                Crystal Clear <br />
                Sound Experience
              </h1>

              <div className="d-flex align-items-center gap-3 my-3">
                <h3 className="fw-bold mb-0">₹9,999</h3>
                <span className="text-secondary text-decoration-line-through">
                  ₹14,999
                </span>
              </div>

              <button className="btn btn-danger px-4 py-2 fw-semibold">
                Shop Now
              </button>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="/headphone2.png"
                alt="Headphones"
                className="img-fluid"
                style={{ maxWidth: "380px" }}
              />
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
}
