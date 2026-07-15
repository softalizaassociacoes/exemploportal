import type { MetadataRoute } from "next";

// Portal de demonstrações comerciais. Nenhuma rota deve ser indexada:
// as páginas reproduzem a identidade e o conteúdo institucional de entidades
// reais para fins de proposta, e não podem competir com os sites oficiais
// delas nos buscadores nem ser confundidas com eles.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
