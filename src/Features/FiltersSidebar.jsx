import { sortMenu } from "../data1/filterBarData";
import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFiliter";


export default function FiltersSidebar({
  sortType,
  setSortType,
  selectedBrands,
  toggleBrand,
  selectedCategories,
  toggleCategory,
  price,
  setPrice,
    clearFilters
}) {
  return (
    <div className="bg-dark border border-secondary rounded p-3 text-white">
      
      <button
  className="btn btn-outline-danger w-100 m-2"
  onClick={clearFilters}
>
  Clear All Filters
</button>


      <h6 className="mb-2 ">Sort By</h6>
      <ul className="list-group list-group-flush mb-3">
        {sortMenu.map(option => (
          <li
            key={option.id}
            className={`list-group-item bg-dark text-white border-secondary
              ${sortType === option.title ? "fw-bold text-warning" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => setSortType(option.title)}
          >
            {option.title}
          </li>
        ))}
      </ul>

      <hr className="border-secondary" />
      <h6 className="mb-2">Brands</h6>
      {["Sony", "JBL", "boAt"].map(brand => (
        <div key={brand} className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleBrand(brand)}
          />
          <label className="form-check-label" htmlFor={brand}>
            {brand}
          </label>
        </div>
      ))}

      <hr className="border-secondary" />
      <CategoryFilter
        categories={["Headphones", "Earphones", "Earbuds", "Neckbands"]}
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />
      <PriceRangeFilter
  price={price}
  setPrice={setPrice}
  min={0}
  max={200000}
/>

    </div>

  );
}
