// types
import type { NextConfig } from "next";
// libs
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    /* config options here */
};

export default withNextIntl(nextConfig);
