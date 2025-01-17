// types
import type { NextConfig } from "next";
// libs
import createNextIntlPlugin from "next-intl/plugin";
import NTM from "next-transpile-modules";

const withTM = NTM(["gsap"]);
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: { remotePatterns: [{ pathname: "**", hostname: "**" }] },
};

// export default withTM(withNextIntl(nextConfig));
export default withNextIntl(nextConfig);
