import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".open-next/**", ".wrangler/**"],
  },
];

export default eslintConfig;
