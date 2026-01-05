// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCartShopping,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { Link } from "react-router-dom";

// export const Header = () => {
//   const name = "Tech-Shop";

//   return (
//     <header className="bg-dark text-white py-2 px-4 d-flex justify-content-between align-items-center">

//       <Link className="fw-bold fs-3 text-white text-decoration-none" to="/">
//         {name}
//       </Link>

//       <div className="d-flex align-items-center gap-4">

//         {/* Search */}
//         <div className="position-relative">
//           <FontAwesomeIcon className="fs-4 cursor-pointer" icon={faMagnifyingGlass} />

//           <span className="position-absolute top-100 start-50 translate-middle-x mt-1
//             bg-dark text-white small px-2 py-1 rounded opacity-0 hover-opacity">
//             Search
//           </span>
//         </div>

//         {/* Cart */}
//         <div className="position-relative">
//           <FontAwesomeIcon className="fs-4 cursor-pointer" icon={faCartShopping} />

//           <span className="position-absolute top-100 start-50 translate-middle-x mt-1
//             bg-dark text-white small px-2 py-1 rounded opacity-0 hover-opacity">
//             Cart
//           </span>
//         </div>

//         {/* User */}
//         <div className="position-relative">
//           <FontAwesomeIcon className="fs-4 cursor-pointer" icon={faUser} />

//           <span className="position-absolute top-100 start-50 translate-middle-x mt-1
//             bg-dark text-white small px-2 py-1 rounded opacity-0 hover-opacity">
//             User
//           </span>
//         </div>

//       </div>
//     </header>
//   );
// };
// export default Header;
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  const name = "Tech-Shop";

  return (
    <header className="bg-dark text-white py-2 px-4 d-flex justify-content-between align-items-center">

      <Link className="fw-bold fs-3 text-white text-decoration-none" to="/">
        {name}
      </Link>

      <div className="d-flex align-items-center gap-4">

        {/* Search */}
        <div className="position-relative">
          <FaSearch className="fs-4 cursor-pointer" />

          <span className="position-absolute top-100 start-50 translate-middle-x mt-1
            bg-dark text-white small px-2 py-1 rounded opacity-0 hover-opacity">
            Search
          </span>
        </div>

        {/* Cart */}
        <div className="position-relative">
          <FaShoppingCart className="fs-4 cursor-pointer" />

          <span className="position-absolute top-100 start-50 translate-middle-x mt-1
            bg-dark text-white small px-2 py-1 rounded opacity-0 hover-opacity">
            Cart
          </span>
        </div>

        {/* User */}
        <div className="position-relative">
          <FaUser className="fs-4 cursor-pointer" />

          <span className="position-absolute top-100 start-50 translate-middle-x mt-1
            bg-dark text-white small px-2 py-1 rounded opacity-0 hover-opacity">
            User
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
