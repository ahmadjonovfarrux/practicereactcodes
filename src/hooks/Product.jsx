import { useEffect, useState } from "react";

export function Product(p, setShowModal) {
  const [localProduct, setLocalProduct] = useState(p.product);

  useEffect(() => {
    if (p.product) {
      setLocalProduct(p.product);
    }
  }, [p.product]);

  if (!localProduct) return null;
  return (
    <div className="modal__box">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={localProduct.thumbnail} alt="image of product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{localProduct.title}</h2>
          <p>{localProduct.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
