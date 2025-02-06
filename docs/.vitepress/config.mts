import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "汇播后台管理系统组件",
  description: "汇播后台管理系统组件",
  themeConfig: {
    nav: [
      { text: 'CustomTable', link: '/CustomTable' },
      { text: 'CustomForm', link: '/CustomForm' }
    ],

    sidebar: [
      {
        text: '公共组件',
        items: [
          { text: 'CustomTable表格组件', link: '/CustomTable' },
          { text: 'CustomForm表单组件', link: '/CustomForm' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: "/repo/"
})
