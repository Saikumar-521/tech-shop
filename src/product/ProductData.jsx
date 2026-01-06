// import { useParams } from "react-router-dom";
// import productsData from "../data1/productsData";
// import Header from "../pages/Header";
// import { Details } from "../productdetails/Details";
// import RelatedProducts from "./RelatedProducts";
// import { useDispatch } from "react-redux";
// import { ADDCART } from "../cart/CartSlice";
// import { useState } from "react";

// export const ProductData = () => {
//   const { id } = useParams();
//   const product = productsData.find(item => item.id === Number(id));
//   const dispatch = useDispatch();

//   const [activeImage, setActiveImage] = useState(product?.heroImage);

//   if (!product) return <p className="text-center fs-4 mt-5">Product not found</p>;

//   return (
//     <>
//       <Header />

//       <div className="container my-5">
//         <div className="row g-4">

//           {/* LEFT — Thumbnail column */}
//           <div className="col-md-2 d-flex flex-column align-items-center">
//             {product.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt="thumb"
//                 onClick={() => setActiveImage(img)}
//                 className={`img-thumbnail mb-3 ${
//                   activeImage === img ? "border border-danger" : "opacity-75"
//                 }`}
//                 style={{
//                   height: "90px",
//                   objectFit: "contain",
//                   cursor: "pointer",
//                   transition: "0.2s"
//                 }}
//               />
//             ))}
//           </div>

//           {/* CENTER — Main image */}
//           <div className="col-md-5 text-center">
//             <img
//               src={activeImage}
//               alt={product.title}
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "420px", objectFit: "contain" }}
//             />
//           </div>

//           {/* RIGHT — Product info panel */}
//           <div className="col-md-5">

//             <h3 className="fw-bold text-light">{product.title}</h3>
//             <p className="text-secondary">{product.info}</p>

//             {/* Ratings */}
//             <div className="d-flex align-items-center mt-2">
//               {[...Array(product.rateCount)].map((_, i) => (
//                 <span key={i} className="text-warning small">★</span>
//               ))}
//               <span className="ms-2 text-muted">
//                 {product.ratings} Ratings
//               </span>
//             </div>

//             <hr className="opacity-25" />

//             {/* Pricing Section */}
//             <div className="d-flex align-items-center justify-content-between">

//               <div>
//                 <h2 className="fw-bold text-light">
//                   ₹{product.finalPrice}
//                 </h2>

//                 <div className="d-flex align-items-center gap-2">
//                   <span className="text-decoration-line-through text-muted">
//                     ₹{product.originalPrice}
//                   </span>

//                   <span className="text-success fw-semibold">
//                     You save ₹{product.originalPrice - product.finalPrice}
//                   </span>
//                 </div>

//                 <small className="text-muted">
//                   (Inclusive of all taxes)
//                 </small>
//               </div>

//               <span className="badge bg-success px-3 py-2 fs-6">
//                 In Stock
//               </span>
//             </div>

//             <hr className="opacity-25" />

//             {/* Offers */}
//             <p className="fw-semibold text-light">Offers & Discounts</p>

//             <div className="d-flex gap-3 mt-2">
//               <div className="border rounded px-3 py-2 text-secondary">
//                 No Cost EMI on Credit Card
//               </div>
//               <div className="border rounded px-3 py-2 text-secondary">
//                 Pay Later & Avail Cashback
//               </div>
//             </div>

//             <hr className="opacity-25" />

//             {/* Add to Cart */}
//             <button
//               className="btn btn-danger w-100 py-2 fw-semibold mt-2"
//               onClick={() => dispatch(ADDCART({ ...product, quantity: 1 }))}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <Details />
//       <RelatedProducts />
//     </>
//   );
// };

// export default ProductData;

import { useParams } from "react-router-dom";
import productsData from "../data1/productsData";
import Header from "../pages/Header";
import { Details } from "../productdetails/Details";
import RelatedProducts from "./RelatedProducts";
import { useDispatch } from "react-redux";
import { ADDCART } from "../cart/CartSlice";

export const ProductData = () => {

  const { id } = useParams();
  const product = productsData.find(item => item.id === Number(id));
  const dispatch = useDispatch();

  if (!product) {
    return <p className="text-center fs-4 mt-5">Product not found</p>;
  }

  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row g-4">

          {/* LEFT — Thumbnails (static) */}
          <div className="col-md-2 d-flex flex-column align-items-center">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                className="img-thumbnail mb-3 opacity-75"
                style={{
                  height: "90px",
                  objectFit: "contain"
                }}
              />
            ))}
          </div>

          {/* CENTER — Main image (fixed) */}
          <div className="col-md-5 text-center">
            <img
              src={product.heroImage}
              alt={product.title}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "420px", objectFit: "contain" }}
            />
          </div>

          {/* RIGHT — Product details */}
          <div className="col-md-5">

            <h3 className="fw-bold text-light">{product.title}</h3>
            <p className="text-secondary">{product.info}</p>

            {/* Ratings */}
            <div className="d-flex align-items-center mt-2">
              {[...Array(product.rateCount)].map((_, i) => (
                <span key={i} className="text-danger text-bold">★</span>
              ))}
              <span className="ms-2 text-muted">
                {product.ratings} Ratings
              </span>
            </div>

            <hr className="opacity-25" />

            {/* Pricing */}
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="fw-bold text-light">₹{product.finalPrice}</h2>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-decoration-line-through text-muted">
                    ₹{product.originalPrice}
                  </span>

                  <span className="text-success fw-semibold">
                    You save ₹{product.originalPrice - product.finalPrice}
                  </span>
                </div>

                <small className="text-muted">(Inclusive of all taxes)</small>
              </div>

              <span className="badge bg-success px-3 py-2 fs-6">In Stock</span>
            </div>

            <hr className="opacity-25" />

            {/* Offers */}
            <p className="fw-semibold text-light">Offers & Discounts</p>

            <div className="d-flex gap-3 mt-2">
              <div className="border rounded px-3 py-2 text-secondary">
                No Cost EMI on Credit Card
              </div>
              <div className="border rounded px-3 py-2 text-secondary">
                Pay Later & Avail Cashback
              </div>
            </div>

            <hr className="opacity-25" />

            {/* Add to Cart */}
            <button
              className="btn btn-danger w-100 py-2 fw-semibold mt-2"
              onClick={() => dispatch(ADDCART({ ...product, quantity: 1 }))}
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      <Details />
      <RelatedProducts />
    </>
  );
};

export default ProductData;
