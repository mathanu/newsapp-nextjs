/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PRODAPI: 'https://gxcmef9ngc.execute-api.ap-south-1.amazonaws.com/news/list',
        LOCALAPI: 'http://localhost:8080',
      },
}
module.exports = nextConfig
