/** @type {import('next').NextConfig} */
const nextConfig = {
    //add hostname placeholder.co
    reactStrictMode: true,
    images: {
        domains: ["localhost", "placeholder.co"],
    },
};

export default nextConfig;
