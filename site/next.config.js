/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Server By yexuejc',
    description: 'Kasm workspaces provided by LSIO expertise',
    icon: 'https://yexuejc.github.io/kasm_workspaces_registry/1.0/head.png',
    listUrl: 'https://yexuejc.github.io/kasm_workspaces_registry/',
    contactUrl: 'https://github.com/yexuejc/kasm_workspaces_registry',
  },
  reactStrictMode: true,
  basePath: '/kasm_workspaces_registry/1.0',
  assetPrefix: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
