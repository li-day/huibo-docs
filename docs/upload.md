# Upload上传

## Upload属性	

| 属性     | 类型   | 是否必传 | 可选值 | 默认值 | 描述         |
| -------- | ------ | -------- | ------ | ------ | ------------ |
| option   | object | 是       | ---    | ---    | 上传组件配置 |
| fileList | any[]  | 否       | ---    | ---    | 文件列表     |

## 属性option:object

| 属性          | 类型                   | 是否必传 | 可选值 | 默认值                                    | 描述                   |
| ------------- | ---------------------- | -------- | ------ | ----------------------------------------- | ---------------------- |
| tip           | string                 | 否       | ---    | ---                                       | 提示信息               |
| types         | string[]               | 否       | ---    | ['xlsx']                                  | 支持的文件类型数组     |
| action        | string                 | 是       | ---    | ''                                        | 上传地址               |
| maxSize       | number                 | 否       | ---    | 20                                        | 文件最大大小（MB）     |
| data          | `{ [key: string]: any }` | 否       | ---    | {}                                        | 上传时附带的数据       |
| name          | string                 | 否       | ---    | file                                      | 上传的文件字段名       |
| autoUpload    | boolean                | 否       | ---    | true                                      | 是否自动上传           |
| headers       | `{ [key: string]: any }` | 否       | ---    | { 'Content-Type': 'multipart/form-data' } | 请求头信息             |
| limit         | number                 | 否       | ---    | 1                                         | 文件数量限制           |
| isHttpRequest | boolean                | 否       | ---    | false                                     | 是否使用自定义上传方法 |

>**PS: option中的所有配置都会跟默认的合并与替换**
>
>具体逻辑自行查看代码

## 事件

| 事件名   | 类型               | 描述             |
| -------- | ------------------ | ---------------- |
| getFile  | (file,data)=>void  | 上传成功后的回调 |
| onError  | function           | 上传报错后的提示 |
| onRemove | (response) => void | 文件移除时触发   |

