export default function CategoryFilter({
  categories,
  selectedCategories,
  toggleCategory
}) {
  return (
    <div className="mt-3">

      <h6 className="mb-2">Categories</h6>

      {categories.map(cat => (
        <div key={cat} className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id={cat}
            checked={selectedCategories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
          <label className="form-check-label" htmlFor={cat}>
            {cat}
          </label>
        </div>
      ))}

    </div>
  );
}
