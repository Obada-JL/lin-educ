const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config options
};

module.exports = withNextIntl(nextConfig);
