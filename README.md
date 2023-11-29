koa框架搭建爬虫系统

参考文档地址：https://front-end.toimc.com/notes-page/basic/node/01-koa.html#%E5%88%9D%E8%AF%86-koa

1.使用nodemon 第三方依赖来自动监听文件的变化并重新启动

npm i nodemon

```json
---package.json
{
  "name": "acquaintance",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.13.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```



2.配置koa路由

2.1 安装@koa/router   npm install @koa/router

2.2 定义路由

```js
---app.js
//在 app.js 中引入@koa/router，然后再实例化
const Router = require('@koa/router')
const router = new Router({ prefix: '/api/v1' }) // 实例化的时候可以自定义一个接口前缀
//注册 router
app.use(router.routes()).use(router.allowedMethods())
//定义接口
router.get('/', async ctx => {
  ctx.body = {
    status: 200,
    message: 'hi @koa/router'
  }
})

router.get('/user', async ctx => {
  ctx.body = {
    status: 200,
    message: 'success',
    data: {
      nickname: 'Forest',
      age: 18,
      jobs: '前端攻城狮',
      skills: '搬砖'
    }
  }
})

app.use(router.routes()).use(router.allowedMethods())
```


