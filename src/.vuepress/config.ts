import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小电动的大电池",
  description: "小电动的个人博客",
  
  port: 9810,

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
