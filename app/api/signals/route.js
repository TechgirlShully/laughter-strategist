let signals = [];

export async function GET() {
  return Response.json([
    { pair: "GBP/USD", entry: "1.2500", tp: "1.2600", sl: "1.2450" },
    { pair: "EUR/USD", entry: "1.0800", tp: "1.0900", sl: "1.0750" },
  ]);
}
