const Koa = require("koa");
const Router = require("@koa/router")

const app = new Koa();

const router = new Router({
    prefix: "/api/v1"//定义接口前缀
})


router.get("/", async (ctx) => {//默认get返回
    ctx.body = {
        status: 200,
        message: "hi koa router!"
    }
})

router.get("/user", async (ctx) => {//user 接口请求
    ctx.body={
        status: 200,
        message: "success",
        data:{
            id:"1",
            username:"前端攻城狮",
            level:"高级开发"
        }
    }
})


app.use(router.routes()).use(router.allowedMethods())

//启动应用程序
app.listen("8989")