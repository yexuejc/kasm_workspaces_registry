/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Server By yexuejc',
    description: 'Kasm workspaces provided by LSIO expertise',
    icon: 'https://yexuejc.github.io/kasm_workspaces_registry/1.0/head.png',
    listUrl: 'https://yexuejc.github.io/kasm_workspaces_registry/',
    contactUrl: 'https://github.com/yexuejc/kasm_workspaces_registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
