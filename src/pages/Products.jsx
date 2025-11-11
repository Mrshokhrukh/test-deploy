import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/productsSlice';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Products = () => {
  const { products, isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Products</h2>
          <p className="text-sm text-gray-500">{products.length} items</p>
        </header>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading &&
            Array(16)
              .fill('')
              .map((item) => {
                return (
                  <div>
                    <Skeleton variant="rectangular" width={290} height={118} />
                    <Box sx={{ pt: 0.5 }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </div>
                );
              })}

          {products?.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-56 object-contain bg-gray-50 p-6"
                />

                <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm">
                  {p.category}
                </span>

                <span className="absolute top-3 right-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                  ${p.price}
                </span>
              </div>

              <div className="p-4 space-y-3">
                <h3
                  className="text-sm font-medium line-clamp-2"
                  title={p.title}
                >
                  {p.title}
                </h3>

                <div className="flex items-center justify-between">
                  {/* <RatingStars value={p.rating?.rate ?? 0} /> */}
                  <span className="text-xs text-gray-500">
                    ({p.rating?.count ?? 0})
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {p.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-transparent bg-gray-100 hover:bg-gray-200 transition">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h14l-2-7M9 21a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                    Add to cart
                  </button>

                  <button className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                    Quick view
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          Built with ♥️ using React + TailwindCSS
        </footer>
      </div>
    </div>
  );
};

export default Products;
