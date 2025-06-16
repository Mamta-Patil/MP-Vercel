"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [serverlessData, setServerlessData] = useState(null);
  const [products, setProducts] = useState([]);
  const [edgeData, setEdgeData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setServerlessData(data.message);
        setProducts(data.products || []);
      });

    fetch("/api/edge")
      .then((res) => res.json())
      .then((data) => setEdgeData(data.message));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vercel Functions Example</h1>

      <div className="mb-4">
        <p><strong>Serverless Function:</strong> {serverlessData}</p>
        {products.length > 0 && (
          <ul className="list-disc ml-6 mt-2">
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p><strong>Edge Function:</strong> {edgeData}</p>
      </div>
    </main>
  );
}
