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
          {
            text: "文档上传",
            link: "/upload",
          },
          {
            text: "图片音视频上传",
            link: "/WebsiteUploadFile",
          },
        ],
      },
      {
        text: "数据统计",
        items: [
          {
            text: "TopBox表格数据统计",
            link: "/TopBox",
          },
          {
            text: "图表Echart",
            link: "/EChart",
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
          { text: "bulkImport弹窗上传", link: "/bulkImport" },
          { text: "upload文档上传", link: "/upload" },
          {
            text: "图片音视频上传",
            link: "/WebsiteUploadFile",
          },
          {
            text: "TopBox表格数据统计",
            link: "/TopBox",
          },
          {
            text: "图表Echart",
            link: "/EChart",
          },
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
