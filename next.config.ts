import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // A proposta comercial da SBMH é um documento estático protegido por senha
      // em public/sbmh/proposta/ — o rewrite dá a ela uma URL limpa.
      { source: "/sbmh/proposta", destination: "/sbmh/proposta/index.html" },
    ];
  },
  async redirects() {
    return [
      // Typo recorrente da sigla: /sbhm/qualquer-coisa → /sbmh/…
      { source: "/sbhm/:path*", destination: "/sbmh/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
