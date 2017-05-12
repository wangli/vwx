# vwx
项目依赖vue和vue-router 使用webpack打包
# 安装

## Npm

```
npm install --save vwx
```
# 项目使用

Require the script:

```javascript
import { App } from "vwx";
import pageA from 'pageA.js';
import pageB from 'pageB.js';

App({
    pages: [
        { path: '/', component: pageA },
        { path: '/my', component: pageB }
    ]
});

```
# 运行示例 
```
npm run exp
```