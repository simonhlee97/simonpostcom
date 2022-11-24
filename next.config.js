// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: "@mdx-js/react",
//   },
// })
// module.exports = withMDX({
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//   images: {
//     domains: ['source.unsplash.com', 'picsum.photos', 'images.unsplash.com', 'i.ytimg.com']
//   },
// })

// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/submit-form",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
