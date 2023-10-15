import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ROSG",
  description: "A guide for begineers to learn open source",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Introduction",
        link: "/guide/introduction",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
