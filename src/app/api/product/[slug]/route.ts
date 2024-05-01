import { NextResponse } from "next/server";
import data from "../data.json";

/**
 * Simulando um backend
 * Como é um Route Handler, que roda na camada Node, podemos simular um backend
 * Como o método exposto é GET, quando o front bater aqui, será retornada a lista de produtos
 */
export async function GET(request: Request, { params }: { params: { slug: string } }) {

  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const product = data.products.find((product) => product.slug === params.slug);

  if (!product) {
    return new NextResponse("Product not found", { status: 404 });
  }

  return Response.json(product);
} 