/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // list of domains we allow optimization
  images:{
    domains: ['bit.ly', 'pbs.twimg.com', 'cdnb.artstation.com', 'cdna.artstation.com'],
  }
}
