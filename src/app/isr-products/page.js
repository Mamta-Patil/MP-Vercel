// app/isr-products/page.js
export const revalidate = 60; // Enable ISR with 60-second revalidation

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export default async function ISRProductsPage() {
    const products = await fetchProducts();

    return (
        <main className="min-h-screen p-6 bg-gray-100">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
                
                <h1 className="text-3xl font-bold text-indigo-600 mb-6">
                    ISR Products Page (Revalidates every 60s)
                </h1>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-50 border rounded-lg p-4 shadow hover:shadow-md transition"
                        >
                            <h2 className="text-sm font-semibold text-indigo-700 truncate mb-2">
                                {product.title}
                            </h2>
                            <p className="text-gray-800 text-sm">${product.price}</p>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
