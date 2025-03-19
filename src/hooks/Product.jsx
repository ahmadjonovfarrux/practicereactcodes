import { useEffect, useState } from "react";

export function Product({ product:p, setShowModal }) {
  const { title, thumbnail, id, description } = p;

  return (
    <div className="modal__box">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={thumbnail} alt="image of product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
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
