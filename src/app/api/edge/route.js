// // app/api/edge/route.js

// export const runtime = "edge"; // 👈 Required for Edge Function

// export async function GET(request) {
//   return new Response(
//     JSON.stringify({ message: "Hello from Edge Function (deployed globally)!" }),
//     {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     }
//   );
// }

export const runtime = "edge"; // Required for edge functions

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Hello from Edge Function!" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
