/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: "",
    // assetPrefix:'./',
    images: {
        unoptimized: true, // ✅ Ensures Next.js images work in static mode
    },
};

export default nextConfig;
