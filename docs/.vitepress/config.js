import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'/2025-1-YANBING/',
  title: "2025 Fablab",
  description: "使用VitePress构建的文档网站",
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/images/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course', link: '/course/' },
      { text: 'Final project', link: '/project/' },
    ],
    sidebar: {
      '/course/': [
        {
          text: 'Course',
          items: [
            { text:'week 1 Web Construction', link: '/course/Week1/Week1'},
            { text:'week 2 Arduino Application', link: '/course/Week2/Week2'},
            { text:'week 3 Electric Design', link: '/course/Week3/Week3'},
            { text:'week 4 CAD', link: '/course/Week4/Week4'},
            { text:'week 5 PCB Production', link: '/course/Week5/Week5'},
            { text:'week 6 3D Printing', link: '/course/Week6/Week6'},
          ]
        }
      ],
      '/project/': [
        {
          text: 'Final Project',
          items: [
            { text: '项目介绍', link: '/project/' },
            { text: '设计文档', link: '/project/design' },
            { text: '开发日志', link: '/project/devlog' }
          ]
        }
      ]
    }
  }
})