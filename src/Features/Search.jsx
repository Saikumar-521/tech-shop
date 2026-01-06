import { useCallback, useMemo, useState } from "react";
import productsData from "../data1/productsData";
import { Link } from "react-router-dom";

export const Search = () => {

  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const dataFilter = useCallback(() => {
    return productsData.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filterProducts = useMemo(() => dataFilter(), [dataFilter]);

  return (
    <>
     <form
  className="position-fixed top-0 start-50 translate-middle-x mt-3"
  style={{ zIndex: 1000, width: "100%", display: "flex", justifyContent: "center" }}
>
  <div className="position-relative" style={{ width: "420px" }}>

    <input
      type="text"
      className="form-control form-control-lg text-center bg-dark text-white border-secondary"
      placeholder="Search product..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setDropDown(true);
      }}
      onFocus={() => search && setDropDown(true)}
    />

    {dropDown && search && (
      <div className="position-absolute bg-dark border rounded shadow-sm mt-1 w-100">
        <ul className="list-group list-group-flush">
          {filterProducts.length > 0 ? (
            filterProducts.map(item => (
              <li
                key={item.id}
                className="list-group-item list-group-item-action bg-dark text-white"
                onClick={() => {
                  setSearch(item.title);
                  setDropDown(false);
                }}
              >
                <Link
                  to={`/product/${item.id}`}
                  className="text-decoration-none text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">
              No products found
            </li>
          )}
        </ul>
      </div>
    )}

  </div>
</form>
    </>
  );
};

export default Search;
