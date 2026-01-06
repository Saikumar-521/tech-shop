export default function PriceRangeFilter({ price, setPrice, min, max }) {
  return (
    <div className="mt-3">
      <h6 className="mb-2">Price Range</h6>

      <p className="text-secondary small mb-1">
        ₹{price}
      </p>

      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        step="500"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
    </div>
  );
}
