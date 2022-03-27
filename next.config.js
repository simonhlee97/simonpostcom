const withMDX = require('@next/mdx')();

module.exports = withMDX({
    pageExtensions: ['js', 'mdx', 'jsx', 'ts', 'tsx'],
    images: {
        domains: ['source.unsplash.com', 'picsum.photos']
    },
});