import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		// 启动partial prerednering
		// ppr: "incremental",
	},
};

export default nextConfig;
