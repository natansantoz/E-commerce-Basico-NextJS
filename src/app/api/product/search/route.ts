import { NextResponse } from "next/server";
import data from "../data.json";
import type { NextRequest } from "next/server";

/**
 * Formato da url: http://localhost:3000/api/product/search?q=moletom
 * Trará todos os produtos que possuem moletom no título
 */
export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { searchParams } = request.nextUrl;

  const query = searchParams.get("q");

  if (query === null) {
    return Response.json({ error: 'Parâmetro "q" não encontrado na URL.' });
  }

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  return Response.json(products);
}
