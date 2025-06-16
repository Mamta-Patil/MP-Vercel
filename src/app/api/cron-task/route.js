export const runtime = 'node'; // 'edge' is NOT supported for scheduled functions

export async function GET() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();
  const date = new Date().toISOString();

  console.log("Cron job executed at:", date);

  return Response.json({
    message: `Cron ran at ${date}`,
    productCount: data.length,
  });
}
