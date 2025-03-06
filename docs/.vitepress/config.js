import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'2025-1-yanbing',
  title: "我的文档网站",
  description: "使用VitePress构建的文档网站",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ]
  }
})