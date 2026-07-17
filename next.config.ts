import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // A proposta comercial mora no CRM — quem tiver o link antigo chega lá.
      { source: "/sbmh/proposta", destination: "https://crm.softaliza.com.br/p/sbmh", permanent: false },
      // Typo recorrente da sigla: /sbhm/qualquer-coisa → /sbmh/…
      { source: "/sbhm/:path*", destination: "/sbmh/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
