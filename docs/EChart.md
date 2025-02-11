## Echart图表

>目前只提供了Line折线图模式其他的模式暂未开发
>
>使用前请对照[Echart官网文档](https://echarts.apache.org/zh/option.html#title),方便开发

## line模式属性

| 属性         | 类型                     | 是否必传 | 可选值 | 默认值 | 描述                                                         |
| ------------ | ------------------------ | -------- | ------ | ------ | ------------------------------------------------------------ |
| width        | string                   | 否       | ---    | 100%   | 宽度                                                         |
| minWidth     | string                   | 否       | ---    | 400px  | 最小宽度                                                     |
| height       | string                   | 否       | ---    | 400px  | 高度                                                         |
| echartId     | string                   | 是       | ---    | ---    | id,唯一标识                                                  |
| xRotate      | string                   | 是       | ---    | -50    | 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠 |
| xAxisData    | any[]                    | 是       | ---    | ---    | 类目数据，在类目轴                                           |
| modelValue   | any[]                    | 是       | ---    | ---    | 图表数据                                                     |
| legendOption | `{[key:string]:any}` | 否       | ---    | ---    | [图例组件](https://echarts.apache.org/zh/option.html#legend) |
| echartOption | `{[key:string]:any}` | 否       | ---    | ---    | 图列配置                                                     |
| colorOption  | string[]                 | 否       | ---    | --     | 调色盘颜色列表                                               |

