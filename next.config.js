/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configuration options...

  // Add the exportPathMap function for static HTML export
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other routes as needed
    };
  },
};

module.exports = nextConfig;
