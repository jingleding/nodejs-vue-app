# Nodejs项目-nodejs-jzq-app

## 项目描述

  - 此项目为君子签的手机版项目，整个技术链为`nodejs + vue + webpack`

## 开发工具链

 - 强烈建议您使用 Visual Studio Code，个人喜好，勿喷

## vue页面路由

 - 对vue的路由文件会统一加一个`v`前缀来加以区分，nodejs其它路由不得以`v`开头，会有冲突，具体代码文件在`routes/vueRoute.js` 里面，比如 `resource/src/pages/demo/index` 页面的路由地址为： `http://localhost:3000/vdemo/index`

## 项目目录结构

```
├── README.md
├── app
│   ├── app.js
│   ├── api // api业务接口处理文件夹      
│   │   ├── api1.js
│   ├── lib // 公共逻辑文件      
│   │   ├── util.js
│   ├── resource   // 此目录为vue的相关打包配置和资源文件夹
│   │   ├── build  // webpack打包配置文件夹
│   │   │   ├── build.js
│   │   │   ├── check-versions.js
│   │   │   ├── dev-client.js
│   │   │   ├── dev-server.js
│   │   │   ├── index.js
│   │   │   ├── utils.js
│   │   │   ├── vue-loader.conf.js
│   │   │   ├── webpack.base.conf.js
│   │   │   ├── webpack.dev.conf.js
│   │   │   └── webpack.prod.conf.js
│   │   ├── config
│   │   │   ├── dev.env.js
│   │   │   ├── index.js
│   │   │   └── prod.env.js
│   │   ├── src
│   │   │   ├── global
│   │   │   │   ├── css
│   │   │   │   │   ├── common.less
│   │   │   │   │   └── reset.less
│   │   │   │   ├── index.js
│   │   │   │   ├── index.less
│   │   │   │   ├── js
│   │   │   │   └── loaded.js
│   │   │   ├── lib
│   │   │   ├── pages  // vue的page文件，一个文件夹算一个单页面应用
│   │   │   │   ├── demo
│   │   │   │   │   ├── App.vue
│   │   │   │   │   ├── components  // 单页应用的公共组件
│   │   │   │   │   │   ├── components1.vue
│   │   │   │   │   │   ├── orderPagination.vue
│   │   │   │   │   │   └── search.vue
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── router   // 单页应用的路由
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── views    // 单页应用的页面
│   │   │   │   │       └── index.vue
│   │   │   └── service
│   │   │       └── renderService.js
│   ├── routes
│   │   ├── error.js
│   │   ├── index.js
│   │   └── vueRouter.js
│   ├── schema // 接口配置文件
│   │   └── http.js
│   └── views // ejs模版文件
├── config // 配置文件
│   ├── dev.json
│   ├── testing.json
│   ├── production.json
└── package.json
```