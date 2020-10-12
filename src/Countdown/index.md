## Countdown

> 倒计时组件

### 特点

- [x] 在 `webworker` 中运行计算倒计时, 避免触摸滑动的渲染卡顿
- [x] 倒计时存在 未开始/已开始/已结束/已下线 四个状态
- [x] 支持镜像模式
- [x] 支持倒计时格式化 天/时/分/秒
- [x] 支持自定义渲染倒计时的天/时/分/秒

### 示例:

<code src='./demos/index.tsx' title='倒计时组件' desc='根据传入的 剩余总秒数`initialSecond` 进行倒计时,获得剩余 天/时/分/秒' />

### Props

| 属性          |                     描述                      |                           类型                            | 是否必需 | 默认值                                                                            |
| :------------ | :-------------------------------------------: | :-------------------------------------------------------: | :------: | :-------------------------------------------------------------------------------- |
| className     |               倒计时 class 类名               |                         `string`                          |    否    | jsany-rc-countdown                                                                |
| prefixCls     |            倒计时 class 类名 前缀             |                         `string`                          |    否    | jsany-rc                                                                          |
| initialSecond |                 初始 剩余秒数                 |                         `number`                          |    是    | 0                                                                                 |
| status        |   倒计时的状态(未开始/已开始/已结束/已下线)   |           `enum`: `not_start/start/end/offline`           |    否    | start                                                                             |
| replaceTxt    |            非开始状态下的提示文案             |             `not_start/end/offline : string`              |    否    | not_start: 'Not start yet', <br>end: 'Already end',<br>offline: 'Already offline' |
| RTL           |         是否启用镜像模式(阿拉伯语等)          |                         `boolean`                         |    否    | false                                                                             |
| icon          |                  倒计时图标                   |                        `ReactNode`                        |    否    | [FontAwesomeIcon](https://fontawesome.com/icons/stopwatch?style=solid)            |
| formatter     |         格式化展示倒计时的天/时/分/秒         | `{{DD}}-string-{{HH}}-string-{{mm}}-string-{{ss}}-string` |    否    | {{DD}}-Day-{{HH}}-h-{{mm}}-m-{{ss}}-s                                             |
| renderCustom  | 自定义渲染倒计时的天/时/分/秒(formatter 失效) |            `Function: ({DD,HH,mm,ss})=> viod`             |    否    | 无                                                                                |
