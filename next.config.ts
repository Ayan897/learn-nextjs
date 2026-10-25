import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... preserve your existing config here ...
  experimental: {
    // ... preserve existing experimental flags ...
    agentUpgrade: "security",
  },
};

export default nextConfig;
