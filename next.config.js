/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML 내보내기 활성화
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  basePath: process.env.NODE_ENV === 'production' ? '/seven-segment' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/seven-segment/' : '',
}

module.exports = nextConfig
