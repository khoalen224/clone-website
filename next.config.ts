import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects(){
    return[
      {
        source: '/',
        destination:'/homepage',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
