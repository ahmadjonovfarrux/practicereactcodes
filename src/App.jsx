import { useState, useEffect } from "react";
import { Product } from "./hooks/product";
import { useFetch } from "./hooks/useFetch";

export function App() {
  const { data, error, isPending } = useFetch("https://dummyjson.com/product");
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="main__container">
      {isPending && <h1>Loadding...</h1>}
      {error && <h2>{error}</h2>}
      <h1 className="text-3xl">Products:</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.products.map((product) => {
            const { id, title, description, thumbnail } = product;
            return (
              <div key={id}>
                {showModal && (
                  <Product product={product} setShowModal={setShowModal} />
                )}
                <div className="card bg-base-100 group w-full shadow-sm hover:shadow-lg">
                  <figure>
                    <img
                      className="transition duration-300 group-hover:scale-[1.2]"
                      src={thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="line-clamp-2">{description}</p>
                    <div className="card-actions justify-end">
                      <a href={`./product.html?id=${id}`}>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setShowModal(true)}
                        >
                          Read more
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default App;
