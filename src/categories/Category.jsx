import { useState } from "react";
import Cards from "../cards/Cards";


export const Category = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Headphones",
    "Earbuds",
    "Earphones",
    "Neckbands"
  ];

  return (
    <>
       <div className="bg-dark">
      <h2 className="text-center display-5 fw-bold fs-1 text-white bg-dark">
        Top Products
      </h2>
      <div className="container mt-4 mb-4">
        <div className="d-flex flex-wrap justify-content-center gap-3">

          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                `btn px-4 py-2 fw-semibold ` +
                (activeCategory === cat
                  ? "btn-danger"
                  : "btn-outline-light")
              }
            >
              {cat}
            </button>
          ))}

        </div>
      </div>
      <Cards category={activeCategory} />
       </div>
    </>
  );
};

export default Category;
