# WebsiteUploadFile音视频上传组件

## WebsiteUploadFile属性

| 属性        | 类型    | 是否必传 | 可选值                   | 默认值 | 描述                                                         |
| ----------- | ------- | -------- | ------------------------ | ------ | ------------------------------------------------------------ |
| imgList     | object  | 是       | ---                      | ---    | 默认值                                                       |
| value       | string  | 是       | ---                      | ---    | 默认值地址                                                   |
| imgType     | string  | 否       | ---                      | ‘other | 图片类型,表示                                                |
| rgb         | boolean | 否       | ---                      | false  | 是否获取图片rgb                                              |
| onlyOne     | boolean | 否       | ---                      | false  | 是否只传一张                                                 |
| fixWidth    | number  | 否       | ---                      | 0      | 固定宽度                                                     |
| fixHeight   | number  | 否       | ---                      | 0      | 固定高度                                                     |
| maxSize     | number  | 否       | ---                      | 102400 | 文件大小 kb                                                  |
| fileIndex   | number  | 否       | ---                      | 0      | 当前文件的索引值                                             |
| needUpload  | boolean | 否       | ---                      | true   | 是否需要开启后台上传图片的支持                               |
| inputAccept | string  | 否       | ---                      | ''     | 允许访问的文件类型                                           |
| isFiles     | boolean | 否       | ---                      | false  | 是否是文件类型                                               |
| maxNum      | number  | 否       | ---                      | 0      | 上传最大张数                                                 |
| type        | number  | 否       | ---                      | 0      | 上传类型集合 看typeConfig参数集合 (ps: 根据产品需要)         |
| layerAlways | string  | 否       | click/hover/always/never | hover  | click：点击播放器区域。hover：移动到播放器区域。always：控制面板一直显示。never：隐藏整个控制面板。 |
| onlyView    | boolean | 否       | ---                      | false  | 是否只读                                                     |
| cloudType   | number  | 否       | 0/1/2                    | 0      | 视频上传方式 0: 隐藏选择框,1:阿里云,2:腾讯云                 |

## 属性imgList

| 属性名    | 类型     | 是否必传 | 可选值 | 默认值 | 描述       |
| --------- | -------- | -------- | ------ | ------ | ---------- |
| filePaths | string[] | 是       | ---    | ---    | 默认地址   |
| videoId   | string   | 否       | ---    | ---    | 视频点播id |

## 事件

| 事件名   | 类型                                                         | 描述               |
| -------- | ------------------------------------------------------------ | ------------------ |
| view-img | （url:string）=> void                                        | 查看大图时触发     |
| remove   | (data:{index:number;fileIndex:number}) => void               | 移除文件时触发     |
| finished | （data:{imgList:string[];path: string;thumbnail:string;fileIndex:number}）=> void | 文件上传完成时触发 |
| rgbColor | （rbg:string）=> void                                        | 获取主题色         |

## 方法

| 方法名     | 类型                    | 描述     |
| ---------- | ----------------------- | -------- |
| fileCancel | （index:number）=> void | 取消上传 |

