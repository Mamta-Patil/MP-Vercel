"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [serverlessData, setServerlessData] = useState(null);
  const [products, setProducts] = useState([]);
  const [edgeData, setEdgeData] = useState(null);




  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setEdgeData(null); // reset
        setServerlessData(data.message);
        setProducts(data.products || []);

      });

    // fetch("/api/edge")
    //   .then((res) => res.json())
    //   .then((data) => setEdgeData(data.message));

  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      {/* // inside your component JSX: */}

      <Link href="/isr-products" className="text-blue-600 underline mt-4 block">
        Go to ISR Products Page
      </Link>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Vercel Functions Demo
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Serverless Function:</h2>
          <p className="text-gray-700 mb-4">{serverlessData}</p>

          {products.length > 0 && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-md p-4 bg-gray-50 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-sm text-indigo-700 truncate mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-800">${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Edge Function:</h2>
          <p className="text-gray-700">{edgeData}</p>
        </div> */}

      </div>
    </main>
  );
}
