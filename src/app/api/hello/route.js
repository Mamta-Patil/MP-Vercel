export async function GET() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return new Response(
      JSON.stringify({
        message: "Hello from Serverless Function!",
        products: products.slice(0, 5), // just return first 5 for demo
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch products", error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
