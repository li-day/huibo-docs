# website-pagination分页组件

## website-pagination属性

| 属性      | 类型        | 是否必传 | 可选值 | 默认值           | 描述                         |
| --------- | ----------- | -------- | ------ | ---------------- | ---------------------------- |
| small     | boolean     | 否       | ---    | false            | 是否使用小型分页样式         |
| total     | number      | 是       | ---    | ---              | 总条目数                     |
| pageArray | number[]    | 否       | ---    | [10, 20, 30, 50] | 每页显示个数选择器的选项设置 |
| listQuery | ListQueryTS | 是       | ---    | ---              | 当前页数与当前页面数集合     |

## 属性listQuery: ListQueryTS

| 属性     | 类型   | 是否必传 | 可选值 | 默认值 | 描述       |
| -------- | ------ | -------- | ------ | ------ | ---------- |
| pageNum  | number | 是       | ---    | ----   | 当前页数   |
| pageSize | number | 是       | ---    | ---    | 当前页面数 |

## 事件

| 事件名         | 类型                    | 描述               |
| -------------- | ----------------------- | ------------------ |
| current-change | (value: number) => void | pageNum改变时触发  |
| size-change    | (value: number) => void | pageSize改变时出发 |

