// types
import type { NextConfig } from "next";
// libs
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: { remotePatterns: [{ pathname: "**", hostname: "**" }] },
};

export default withNextIntl(nextConfig);
