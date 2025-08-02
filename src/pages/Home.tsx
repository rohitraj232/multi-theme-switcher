import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json()).then(setProducts); 
  }, []);
  return (
    <main className="px-4 main-content">
      <div className="title my-5">
        <h1 className='text-2xl font-bold text-center py-2'>Welcome to Multi Theme Switcher App</h1>
      </div>

      <div className="mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 8).map((p, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">

              {/* Product Image with Hover Zoom */}
              <div className="overflow-hidden rounded mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="product-details mb-2">
                <h2 className="text-lg text-dark text-bold mb-1">
                  {p.title.length > 20 ? p.title.slice(0, 20) + "..." : p.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  {p.description.length > 90 ? p.description.slice(0, 90) + "..." : p.description}
                </p>
                <span className="inline-block text-lg font-semibold text-green-600 mb-1">
                  $ {p.price}
                </span>
              </div>

              {/* Button */}
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Read More
              </button>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}