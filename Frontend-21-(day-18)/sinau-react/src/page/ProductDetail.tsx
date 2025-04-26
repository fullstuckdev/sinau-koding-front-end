import { useParams, useNavigate } from "react-router";

export default function ProductDetail() {
  // contoh dari useParams
  // /product/1
  // /product/2
  // /product/3
  // /product/4

  const { id } = useParams();

  // di case ini, useNavigate digunakan untuk ke halaman sebelumnya.
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product Detail for ID: {id}</h2>
      <button onClick={() => navigate(-1)}>🔙 Back</button>
    </div>
  );
}
