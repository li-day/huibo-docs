# CustomForm

## CustomForm属性

| 属性       | 类型         | 是否必传 | 可选值 | 默认值 | 描述             |
| ---------- | ------------ | -------- | ------ | ------ | ---------------- |
| modelValue | object       | 是       | ---    | ---    | 表单绑定数据     |
| formItem   | formItemTS[] | 是       | ---    | ---    | 表单配置数组     |
| rightBtns  | Btns[]       | 否       | ---    | ---    | 表单右侧按钮数组 |

## 属性formItem：formItemTs[]

| 属性       | 类型    | 是否必传 | 可选值                   | 默认值 | 描述                                                         |
| ---------- | ------- | -------- | ------------------------ | ------ | ------------------------------------------------------------ |
| label      | string  | 是       | ---                      | ---    | 表单双向绑定的key                                            |
| title      | string  | 是       | ---                      | ---    | 表单左侧的文案描述                                           |
| pla        | string  | 否       | ---                      | ---    | 输入框内的placeholder文案                                    |
| width      | string  | 否       | ---                      | ---    | 输入框宽度                                                   |
| isTitle    | boolean | 否       | ---                      | ---    | 是否显示左侧文案                                             |
| type       | string  | 否       | select/time/input/number | input  | 表单类型                                                     |
| options    | array   | 否       | ---                      | ---    | `select`框的配置,`type=select`时,必传不然无效果,(示例:`[{id:1,name:'男'}]`) |
| selectVal  | string  | 否       | ---                      | ---    | `select`框的value,对应`options`中的`id`key进行回传到`modelValue`对象中,`type:select`时必传 |
| selectLab  | string  | 否       | ---                      | ---    | `select`框的name,`type: select`时必传                        |
| startPla   | string  | 否       | ---                      | ---    | 时间范围选择框的开始文案,`type:time`时必传                   |
| endPla     | string  | 否       | ---                      | ---    | 时间范围选择框的结束文案,`type: time`时必传                  |
| slot       | boolean | 否       | ---                      | ---    | 是否插槽                                                     |
| labelWidth | string  | 否       | ---                      | ---    | 表格formItem的宽度                                           |
| auth       | string  | 否       | ---                      | ---    | 权限                                                         |

## 属性rightBtns: Btns[]

| 属性    | 类型   | 是否必传 | 可选值                              | 默认值 | 描述                                                |
| ------- | ------ | -------- | ----------------------------------- | ------ | --------------------------------------------------- |
| title   | string | 是       | ---                                 | ----   | 按钮文案                                            |
| emitCb  | string | 是       | ---                                 | ---    | 按钮点击事件,配合`CustomForm`中的事件`rightBtn`使用 |
| type    | string | 否       | primary/success/info/warning/danger | ''     | 按钮类型                                            |
| auth    | string | 否       | ---                                 | ---    | 权限                                                |
| icon    | string | 否       | ---                                 | ---    | 按钮左侧`icon`                                      |
| endIcon | string | 否       | ---                                 | ---    | 按钮右侧`icon`                                      |

## 事件

| 事件名   | 参数                    | 描述                 |
| -------- | ----------------------- | -------------------- |
| onSubmit | ---                     | 搜索按钮点击事件     |
| onReset  | ---                     | 重置按钮点击事件     |
| rightBtn | `(emitCb) => void`      | 左侧按钮点击事件集合 |
| onChange | `({val, item}) => void` | 表单的项的change事件 |

