import { useParams } from "react-router-dom";
import productsData from "../data1/productsData";

export const Overview = () => {
  const { id } = useParams();
  const product = productsData.find(item => item.id === Number(id));

  if (!product) return null;

  return (
    <div className="container my-5 text-light">

      <h5 className="fw-bold mt-3">
        The {product.title} {product.info} provides fabulous sound quality
      </h5>

      <ul className="mt-3 ms-3 text-secondary">
        <li className="mb-1">Sound tuned to perfection</li>
        <li className="mb-1">Comfortable to wear</li>
        <li className="mb-1">Long playback time</li>
      </ul>

      <p className="mt-3 text-secondary">
        Buy the {product.title} {product.info} to enjoy an amazing music
        experience with high-quality sound output and superior performance.
      </p>

    </div>
  );
};

export default Overview;
