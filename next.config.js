/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async()=>{
    return[
      {
        source:'/news',
        destination:'/',
        permanent:false
      }
    ]
  }
}

module.exports = nextConfig
