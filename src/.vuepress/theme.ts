import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://xddcloud.net",

    author: {
        name: "你为什么骑着小电动",
        url: "/intro",
        email: "me@venti.love",
    },

    license: "CC BY-NC-ND 4.0",

    iconAssets: "iconify",

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    repo: "handsomexdd1024/battery",
    editLink: false,
    contributors: false,

    docsDir: "src",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: "牵引你我相遇的，想必是自由之风",
    displayFooter: true,

    // 博客相关
    blog: {
        description: "风带来了新的故事",
        intro: "/intro.html",
        medias: {
            //   Baidu: "https://example.com",
            BiliBili: "https://space.bilibili.com/106577936",
            //   Bitbucket: "https://example.com",
            //   Dingding: "https://example.com",
            // Discord: "https://example.com",
            //   Dribbble: "https://example.com",
            Email: "mailto:me@venti.love",
            //   Evernote: "https://example.com",
            //   Facebook: "https://example.com",
            //   Flipboard: "https://example.com",
            //   Gitee: "https://example.com",
            GitHub: "https://github.com/handsomexdd1024",
            //   Gitlab: "https://example.com",
            //   Gmail: "mailto:info@example.com",
            //   Instagram: "https://example.com",
            // Lark: "https://example.com",
            //   Lines: "https://example.com",
            //   Linkedin: "https://example.com",
            //   Pinterest: "https://example.com",
            //   Pocket: "https://example.com",
            // QQ: "https://example.com",
            //   Qzone: "https://example.com",
            // Reddit: "https://example.com",
            // Rss: "https://example.com",
            Steam: "https://steamcommunity.com/id/454232910",
            //   Twitter: "https://example.com",
            // Wechat: "https://example.com",
            // Weibo: "https://example.com",
            //   Whatsapp: "https://example.com",
            //   Youtube: "https://example.com",
            // Zhihu: "https://example.com",
            //   VuePressThemeHope: {
            //     icon: "https://theme-hope-assets.vuejs.press/logo.svg",
            //     link: "https://theme-hope.vuejs.press",
            //   },
        },
        avatar: "/avatar.jpg"
    },

    // 加密配置
    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {
        blog: true,
        
        comment: {
            provider: "Giscus",
            repo: "handsomexdd1024/battery",
            repoId: "R_kgDONRqLpQ",
            category: "General",
            categoryId: "DIC_kwDONRqLpc4CkeRi",
            strict: false,
        },

        components: {
            components: ["Badge", "VPCard"],
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        markdownImage: {
            figure: true,
            lazyload: true,
            size: true,
        },

        markdownMath: {
            type: "katex",
        },

        // 此功能被开启用于演示，你应仅当使用时保留。
        markdownTab: true,

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            component: true,
            demo: true,
            include: true,
            mark: true,
            plantuml: true,
            spoiler: true,
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tasklist: true,
            vPre: true,

            // 在启用之前安装 chart.js
            chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // 在启用之前安装 mermaid
            // mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },

        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
        // revealjs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
    },
});
