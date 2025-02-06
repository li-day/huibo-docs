# CustomTable

## CustomTable表格参数

|       属性       |          类型           | 是否必传 | 可选值 |      默认值       | 描述                                |
| :--------------: | :---------------------: | :------: | :----: | :---------------: | :---------------------------------- |
|   `modelValue`   | `Array<{} | undefined>` |    是    |  ---   |        ---        | 表格数据                            |
|     `column`     |      `ColumnTS[]`       |    是    |  ---   |        ---        | 表格配置数据                        |
|     `rowKey`     |        `string`         |    否    |  ---   |        ---        | 行数据的 Key，用来优化 Table 的渲染 |
|   `emptySlot`    |        `boolean`        |    否    |  ---   |        ---        | 是否自定义空数据的展示内容          |
|   `toolEvent`    |      `ToolEventTs`      |    否    |  ---   |        ---        | 操作栏配置数据                      |
|  `isOperation`   |        `boolean`        |    否    |  ---   |        ---        | 是否显示操作栏                      |
|   `selection`    |        `boolean`        |    否    |  ---   |        ---        | 是否显示选择框                      |
| `indexNumLabel`  |        `string`         |    否    |  ---   |        ---        | 是否显示固定索引                    |
| `isSelectChange` |        `string`         |    否    |  ---   |        ---        | 是否禁用选择框                      |
|   `spanMethod`   |       `Function`        |    否    |  ---   | spanMethodDefault | 表格合并                            |
|  `tableLoading`  |        `object`         |    否    |  ---   |        ---        | 表格的loading控制                   |

## 参数column: ColumnTS[]

|     属性     |           类型           | 是否必传 |             可选值             |       默认值       |                             描述                             |
| :----------: | :----------------------: | :------: | :----------------------------: | :----------------: | :----------------------------------------------------------: |
|    `prop`    |         `string`         |    是    |              ---               |        ---         |                 表格行标识用于数据渲染的key                  |
|   `label`    |         `string`         |    是    |              ---               |        ---         |                      表格表头的展示名称                      |
|   `width`    |         `string`         |    否    |              ---               | 已文案大小为默认值 |                           表格宽度                           |
|   `center`   |         `string`         |    否    |              ---               |        ---         |                         表格对齐方式                         |
|    `slot`    |        `boolean`         |    否    |              ---               |        ---         |                           是否插槽                           |
|    `type`    |        `boolean`         |    否    | datetime/time/select/img/phone |        ---         |  表格展示类型;time为毫秒时间戳,datetime秒时间戳,select选择   |
|   `color`    |         `string`         |    否    |              ---               |        ---         |            当type为select时选择,文案展示多种颜色             |
|   `option`   |         `string`         |    否    |              ---               |        ---         |        当type为select时选择,多文案展示 例如：{a:"A"}         |
|  `tooltip`   |        `boolean`         |    否    |              ---               |        ---         |               element组件show-overflow-tooltip               |
|    `auth`    |         `string`         |    否    |              ---               |        ---         |                    配置权限,是否显示该列                     |
| `formatter`  |        `Function`        |    否    |              ---               |        ---         |                      表格对应列的格式化                      |
| `headerSlot` |        `boolean`         |    否    |              ---               |        ---         |                     表格头部文案是否插槽                     |
|   `fixed`    |         `string`         |    否    |              ---               |        ---         |                      表格对应列是否固定                      |
|  `imgSize`   |         `string`         |    否    |      Large/Default/Small       |      Default       |    type=img时,控制图片大小Large=200;Default=100;Small=50     |
|   `class`    | `Array<string | number>` |    否    |              ---               |        ---         | 针对tabs下多表格列区别做逻辑判断,可参考项目classOrder_item文件 |

### formatter参数说明

```ts
(row: any, column: any, cellValue: any, index: number) => string | number
```



## 参数toolEvent: ToolEventTs

| 属性    | 类型     | 是否必传 | 可选值 | 默认值 | 描述                   |
| ------- | -------- | -------- | ------ | ------ | ---------------------- |
| `align` | `string` | 否       | ---    | ----   | 表格操作栏对齐方式     |
| `width` | `string` | 否       | ---    | ---    | 表格操作栏宽度         |
| `btns`  | `[]`     | 否       | ---    | ---    | 表格操作栏按钮数组配置 |

### toolEvent-btns

| 属性         | 类型                         | 是否必传 | 可选值                                                       | 默认值 | 描述                              |
| ------------ | ---------------------------- | -------- | ------------------------------------------------------------ | ------ | --------------------------------- |
| `type`       | `string`                     | 是       | primary/success/warning/danger/info                          | ---    | 按钮类型与element按钮text类型一致 |
| `auth`       | `string`                     | 否       | ---                                                          | ---    | 按钮权限                          |
| `title`      | `string`                     | 是       | ---                                                          | ---    | 按钮文案                          |
| `emitCb`     | `string`                     | 是       | ---                                                          | ---    | 按钮点击事件的key                 |
| `handStatus` | `{ key: string; title: {} }` | 否       | ---                                                          | ---    | 根据当行的参数进行动态设置文案    |
| `color`      | `string`                     | 否       | ---                                                          | ---    |                                   |
| `disabled`   | `string`                     | 否       | ---                                                          | ---    | 是否禁用                          |
| `indexCon`   | `string`                     | 否       | ---                                                          | ---    | 是否隐藏                          |
| `tooltip`    | `string`                     | 否       | ---                                                          | ---    | 文字提示                          |
| `placement`  | `string`                     | 否       | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | ---    | 文字提示位置                      |

## 参数tableLoading

| 属性          | 类型      | 是否必传 | 可选值 | 默认值 | 描述                |
| ------------- | --------- | -------- | ------ | ------ | ------------------- |
| `loading`     | `boolean` | 是       | ---    | ---    | 是否显示loading效果 |
| `loadingText` | `string`  | 否       | ---    | ---    | loading效果下的文案 |

## 参数spanMethod说明

```ts
spanMethod:(data: { row: any; rowIndex: number; column: any; columnIndex: number }) => number[] | {
        rowspan: number
        colspan: number
      }
// 默认 [1, 1]
const spanMethodDefault = () => {
  return [1, 1]
}
```

## tabel表格方法

| 方法名               | 参数               | 描述                                                         |
| -------------------- | ------------------ | ------------------------------------------------------------ |
| `toggleRowSelection` | row,message,status | 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否 |

## tabel事件

| 事件名         | 参数                                                         | 描述                         |
| -------------- | ------------------------------------------------------------ | ---------------------------- |
| `toolEvent`    | item(对应toolEvent-btns对象), row(当前行数据), event(当前的点击事件源) | 操作列表按钮click事件        |
| `rowClick`     | (row: any, column: any, event: Event) => void                | 当某一行被点击时会触发该事件 |
| `selectChange` | selection(表格选中的数据)                                    | 左侧复选框change事件         |

