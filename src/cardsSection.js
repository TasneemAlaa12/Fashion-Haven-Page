import React, { useEffect } from "react";

const CardSection = () => {
  const [products, setProducts] = React.useState([]);
  const [DesignType, setDesign] = React.useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6">
        <a
          onClick={() => {
            setDesign((prev) => !prev);
          }}
          href="#shop"
          className="inline-block px-8 py-3 text-white bg-indigo-500 hover:bg-indigo-600 font-medium text-lg rounded-full shadow-md transition duration-300 mb-12"
        >
          {DesignType ? "List Layout" : "Grid Layout"}
        </a>

        <div
          className={
            DesignType
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              : "flex flex-col items-center gap-10"
          }
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white mb-10 rounded-lg shadow-lg border border-gray-200 overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col justify-between ${
                DesignType ? "" : "w-[70%]"
              }`}
            >
              <div className="relative flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`h-48 rounded-t-lg ${
                    DesignType ? "w-full" : "w-[70%] object-contain"
                  }`}
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {product.description}
                </p>
                <div className="text-lg font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-md inline-block">
                  {product.price}
                </div>
              </div>

              <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
                <a
                  href="#details"
                  className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600 transition duration-300"
                >
                  Details
                </a>
                <a
                  href="#add-to-cart"
                  className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition duration-300"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
