# CustomDescriptions

## CustomDescriptions属性

| 属性       | 类型     | 是否必传 | 可选值 | 默认值 | 描述         |
| ---------- | -------- | -------- | ------ | ------ | ------------ |
| modelValue | object   | 是       | ---    | ---    | 双向绑定数据 |
| options    | OptionTS | 是       | ---    | ---    | 描述列表配置 |

## 属性options:  OptionTS

| 属性      | 类型       | 是否必传 | 可选值 | 默认值 | 描述              |
| --------- | ---------- | -------- | ------ | ------ | ----------------- |
| list      | ListItem[] | 是       | ---    | ---    | 列表列数据配置项  |
| column    | number     | 否       | ---    | ---    | 一行展示几列      |
| title     | string     | 否       | ---    | ---    | 标题文案          |
| titleSlot | boolean    | 否       | ---    | ---    | 是否开启title插槽 |

### 属性options-list: ListItem[]

| 属性           | 类型           | 是否必传 | 可选值                           | 默认值 | 描述                                                         |
| -------------- | -------------- | -------- | -------------------------------- | ------ | ------------------------------------------------------------ |
| label          | string         | 是       | ---                              | ---    | 描述列表对应`key`                                            |
| title          | string         | 是       | ---                              | ---    | 列标签                                                       |
| type           | string         | 是       | text/img/time/select/money/phone | ---    | 列的内容类型                                                 |
| slot           | boolean        | 否       | ---                              | ---    | 列的内容是否开启插槽                                         |
| option         | objec          | 否       | ---                              | ---    | 当`type:select`时,必传(如:{1: '男'})                         |
| span           | number         | 否       | ---                              | ---    | 当前列的在一行中的占比                                       |
| formatter      | Function       | 否       | ---                              | ---    | 重置格式                                                     |
| width          | number\|string | 否       | ---                              | ---    | 宽度                                                         |
| className      | string         | 否       | ---                              | ---    | 列的内容自定义类名                                           |
| labelClassName | string         | 否       | ---                              | ---    | 列标签自定义类名                                             |
| imgSize        | string         | 否       | Large,Default,Small              | Small  | `type:img`时,设置图片的大小`{Large: '200px',Default: '100px',Small: 50px}` |
| unit           | string         | 否       | ---                              | ---    | `type:money`时用于设置单位                                   |

