import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: false,
	},
	// extension: /\.(md|mdx)$/, // added me as other way to handle by webpack
};

export default withContentlayer(nextConfig);



// const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// module.exports = {
//   output: 'export',
//   trailingSlash: true,
//   basePath: isGitHubPages ? '/mindalioni' : '',
//   assetPrefix: isGitHubPages ? '/mindalioni/' : '',
// };

