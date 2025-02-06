import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "汇播后台管理系统组件",
  description: "汇播后台管理系统组件",
  themeConfig: {
    nav: [
      { text: 'CustomTable', link: '/CustomTable' },
      { text: 'CustomForm', link: '/CustomForm' },
      { text: 'CustomDescriptions', link: '/CustomDescriptions' },
    ],

    sidebar: [
      {
        text: '公共组件',
        items: [
          { text: 'CustomTable表格', link: '/CustomTable' },
          { text: 'CustomForm表单', link: '/CustomForm' },
          { text: 'CustomDescriptions描述列表', link: '/CustomDescriptions' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  outDir: "dist",
  base: '/huibo-docs/'
})
