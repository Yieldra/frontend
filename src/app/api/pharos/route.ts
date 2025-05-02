import { NextRequest } from "next/server";

const PHAROS_DEVNET_URL = "https://devnet.dplabs-internal.com";

export async function GET() {
  const response = await fetch(PHAROS_DEVNET_URL);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function POST(req: NextRequest) {
  let body = {};
  try {
    body = await req.json();
  } catch (e) {
    console.warn("Invalid JSON or empty body", e);
  }

  const response = await fetch(PHAROS_DEVNET_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
