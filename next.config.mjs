/** @type {import('next').NextConfig} */
const nextConfig = {
  // PARA NETLIFY: descomenta la siguiente linea antes de hacer deploy
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
