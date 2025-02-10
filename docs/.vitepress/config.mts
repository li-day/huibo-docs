import { defineConfig } from "vitepress";

export default defineConfig({
  title: "汇播后台管理系统组件",
  description: "汇播后台管理系统组件",
  themeConfig: {
    nav: [
      {
        text: "常用组件",
        items: [
          { text: "表格", link: "/CustomTable" },
          { text: "表单", link: "/CustomForm" },
          { text: "描述列表", link: "/CustomDescriptions" },
          { text: "分页", link: "/website-pagination" },
        ],
      },
      {
        text: "上传组件",
        items: [
          {
            text: "白名单弹窗上传",
            link: "/bulkImport",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "公共组件",
        items: [
          { text: "CustomTable表格", link: "/CustomTable" },
          { text: "CustomForm表单", link: "/CustomForm" },
          { text: "CustomDescriptions描述列表", link: "/CustomDescriptions" },
          { text: "website-pagination分页", link: "/website-pagination" },
          { text: "白名单弹窗上传", link: "/bulkImport" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  outDir: "dist",
  base: "/huibo-docs/",
});
