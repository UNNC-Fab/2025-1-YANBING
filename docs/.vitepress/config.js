import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'/2025-1-YANBING/',
  title: "2025 Fablab",
  description: "使用VitePress构建的文档网站",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course', link: '/guide/' }
    ],
    sidebar: [
      {
        text: 'Course',
        items: [
          { text:'week 1', link: '/course/Week1/Week1'},
          { text:'week 2', link: '/course/Week2/Week2'},
          { text:'week 3', link: '/course/Week3/Week3'},
          { text:'week 4', link: '/course/Week4/Week4'},
          { text:'week 5', link: '/course/Week5/Week5'},
          { text:'week 6', link: '/course/Week6/Week6'},
          { text:'week 7', link: '/course/Week7/Week7'},
          { text:'week 8', link: '/course/Week8/Week8'},
          { text:'week 9', link: '/course/Week9/Week9'},
          { text:'week 10', link: '/course/Week10/Week10'},
          { text:'week 11', link: '/course/Week11/Week11'},
          { text:'week 12', link: '/course/Week12/Week12'},
          { text:'week 13', link: '/course/Week13/Week13'},
          { text:'week 14', link: '/course/Week14/Week14'},
          { text:'week 15', link: '/course/Week15/Week15'},
          { text:'week 16', link: '/course/Week16/Week16'},
          { text:'week 17', link: '/course/Week17/Week17'},
          { text:'week 18', link: '/course/Week18/Week18'},
          
        ]
      },
    ]
  }
})