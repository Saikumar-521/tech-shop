import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import productsData from "../data1/productsData";
import { useDispatch } from "react-redux";
import { ADDCART } from "../cart/CartSlice";
import FiltersSidebar from "../Features/FiltersSidebar";

export const ProductsList = () => {

  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const clearFilters = () => {
  setSelectedBrands([]);
  setSelectedCategories([]);
  setPrice(200000);      // reset price max
  setSortType("Latest"); // reset sort
};


  const [sortType, setSortType] = useState("Latest");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [price, setPrice] = useState(200000); // price range max

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {

    let data = [...productsData];

  
    if (selectedCategories.length > 0) {
      data = data.filter(item =>
        selectedCategories.includes(item.category)
      );
    }
    if (selectedBrands.length > 0) {
      data = data.filter(item =>
        selectedBrands.includes(item.brand)
      );
    }

    data = data.filter(item => item.finalPrice <= price);

    switch (sortType) {

      case "Price(Lowest First)":
        data.sort((a, b) => a.finalPrice - b.finalPrice);
        break;

      case "Price(Highest First)":
        data.sort((a, b) => b.finalPrice - a.finalPrice);
        break;

      case "Top Rated":
        data.sort((a, b) => b.rateCount - a.rateCount);
        break;

      case "Featured":
        data.sort((a, b) => (b.featured || 0) - (a.featured || 0));
        break;

      case "Latest":
      default:
        data.sort((a, b) => b.id - a.id);
        break;
    }

    return data;

  }, [sortType, selectedBrands, selectedCategories, price]);

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 col-md-3 mb-4">
          <FiltersSidebar
            sortType={sortType}
            setSortType={setSortType}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            price={price}
            setPrice={setPrice}
            clearFilters={clearFilters} 
          />
        </div>
        <div className="col-12 col-md-9">
          <div className="row g-4">

            {filteredAndSortedProducts.map(item => (
              <div className="col-12 col-sm-6 col-md-4" key={item.id}>
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
                        <span key={i} className="text-danger">★</span>
                      ))}
                    </div>

                    <div className="card-body text-white">
                      <h6 className="fw-semibold">{item.title}</h6>
                      <p className="text-secondary small mb-2">{item.info}</p>

                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold fs-6">₹{item.finalPrice}</span>
                        <span className="text-muted text-decoration-line-through small">
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="card-footer bg-transparent border-0 px-3 pb-3">
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => dispatch(ADDCART({ ...item, quantity: 1 }))}
                    >
                      Add to Cart
                    </button>
                  </div>

                </div>
              </div>
            ))}

            {filteredAndSortedProducts.length === 0 && (
              <p className="text-secondary text-center mt-3">
                No products match your filters.
              </p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductsList;
