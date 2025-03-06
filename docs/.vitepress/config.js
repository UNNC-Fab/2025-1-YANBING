import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'/2025-1-YANBING/',
  title: "YANBING",
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
          { text:'course', llink:'/course/Week1'},
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ]
  }
})