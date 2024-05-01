import data from "../data.json";

/**
 * Simulando um backend
 * Como é um Route Handler, que roda na camada Node, podemos simular um backend
 * Como o método exposto é GET, quando o front bater aqui, será retornada a lista de produtos
 */
export async function GET() {

  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const featuredProducts = data.products.filter((product) => product.featured);

  return Response.json(featuredProducts);
} 