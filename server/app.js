const express = require("express")
const app = express()
const {join} = require("path")
//配置模板引擎
// app.engine('html',require("express-art-template"))
// app.set('view engine','html')
// app.set('views',join(__dirname,"views"))

//处理静态资源
// app.use('/node_modules',express.static(join(__dirname,'node_modules')))
// app.use('/statics',express.static(join(__dirname,'statics')))
// app.get('/',(req,res)=>{
//     res.render('index')
// })
// 引入路由模块
const routerHome = require(join(__dirname,"routers/home/index"))
app.use(routerHome)

app.listen(3001,()=>{
    console.log('http://127.0.0.1:3001')
})