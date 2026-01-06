import { useParams } from "react-router-dom";
import productsData from "../data1/productsData";

export const ProductType = () => {
  const { id } = useParams();
  const product = productsData.find(item => item.id === Number(id));

  if (!product) return null;

  return (
    <div className="container my-5">

      <h5 className="fw-bold text-light mb-3">Product Specifications</h5>

      <div className="table-responsive">
        <table className="table table-dark table-striped align-middle">

          <tbody className="text-secondary">

            <tr>
              <th className="fw-semibold w-25">Brand</th>
              <td className="text-light">{product.brand}</td>
            </tr>

            <tr>
              <th className="fw-semibold">Model</th>
              <td className="text-light">{product.title}</td>
            </tr>

            <tr>
              <th className="fw-semibold">Generic Name</th>
              <td className="text-light">{product.category}</td>
            </tr>

            <tr>
              <th className="fw-semibold">Headphone Type</th>
              <td className="text-light">{product.type}</td>
            </tr>

            <tr>
              <th className="fw-semibold">Connectivity</th>
              <td className="text-light">{product.connectivity}</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ProductType;
