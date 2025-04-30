import mdx from "@next/mdx";
import rehypeRaw from "rehype-raw";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeRaw],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
