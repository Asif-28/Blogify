/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

env:{
  DB_URI:'mongodb+srv://next13-auth:9KjNQsrsrsO3F1ke@cluster0.fvx6uwn.mongodb.net/test',
  NEXTAUTH_SECRET:'codingwithasif'
}
};

module.exports = nextConfig
