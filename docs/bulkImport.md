# bulkImport白名单批量导入弹窗

## bulkImport属性

| 属性       | 类型    | 是否必传 | 可选值 | 默认值 | 描述                 |
| ---------- | ------- | -------- | ------ | ------ | -------------------- |
| modelValue | boolean | 是       | ---    | ---    | 是否展示弹窗         |
| option     | object  | 是       | ---    | ---    | 上传配置设置接口地址 |
| tipText    | string  | 否       | ---    | ---    | 上传框下方描述       |
| isFooter   | boolean | 否       | ---    | true   | 是否展示底部按钮     |
| isSlice    | boolean | 否       | ---    | true   | 是否手动分页         |

## 属性option: {}

| 属性 | 类型   | 是否必传 | 可选值 | 默认值 | 描述             |
| ---- | ------ | -------- | ------ | ------ | ---------------- |
| url  | string | 是       | ---    | ---    | 设置上传接口地址 |

## 事件

| 事件         | 类型                                           | 描述           |
| ------------ | ---------------------------------------------- | -------------- |
| importSubmit | (data:formData) => void                        | 上传保存按钮   |
| download     | ()=>void                                       | 模板下载按钮   |
| onPageChange | (data: {pageNum:number;pageSize:number})=>void | 分页改变时触发 |

