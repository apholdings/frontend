/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'boomslagauth.s3.us-east-2.amazonaws.com',
      'boomslag.s3.us-east-2.amazonaws.com',
      'boomslagcart.s3.us-east-2.amazonaws.com',
      'boomslagcoupons.s3.us-east-2.amazonaws.com',
      'boomslagcourses.s3.us-east-2.amazonaws.com',
      'boomslagcryptocurrency.s3.us-east-2.amazonaws.com',
      'boomslagemail.s3.us-east-2.amazonaws.com',
      'boomslagmessages.s3.us-east-2.amazonaws.com',
      'boomslagnotifications.s3.us-east-2.amazonaws.com',
      'boomslagorders.s3.us-east-2.amazonaws.com',
      'boomslagpayments.s3.us-east-2.amazonaws.com',
      'boomslagproducts.s3.us-east-2.amazonaws.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
