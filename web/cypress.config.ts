import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'awrm3b',
  e2e: {
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
