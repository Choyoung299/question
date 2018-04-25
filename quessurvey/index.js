const express = require('express') //引入模块
const bodyParser = require('body-parser') //引入模块
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(express.static('static'))//设置静态目录
app.use(bodyParser.urlencoded({ extended: false }))//post数据获取和解析
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.get('/index',require('./src/index.js'))

app.get('/nav/:filename',require('./src/nav.js'))

//获取用户数据
app.get('/users/get', require('./src/users.get.js'))

//删除用户数据
app.get('/users/del', require('./src/users.del.js'))

//注册
app.get('/regist',require('./src/get.regist.js'))

//判断表字段是否存在
app.get('/chkExist',require('./src/get.chkExist.js'))

//添加用户信息
app.post('/users/add',require('./src/post.user.add.js'))

//登录
app.get('/login',require('./src/get.login.js'))

//验证用户登录
app.post('/login',require('./src/post.login.js'))

//注销
app.get('/logout',require('./src/get.logout.js'))

//展示大纲
app.get('/outline/show',require('./src/get.outline.show.js'))

//获取大纲记录
app.get('/outline',require('./src/get.outline.js'))

//添加大纲节点
app.post('/outline/add',require('./src/post.outline.add.js'))

//编辑大纲
app.post('/outline/edit',require('./src/post.outline.edit.js'))

//删除大纲
app.get('/outline/del',require('./src/get.outline.del.js'))

//排序
app.post('/outline/sort',require('./src/post.outline.sort.js'))

//显示问卷管理界面
app.get('/papers/show',require('./src/get.papers.show.js'))

//保存问卷
app.post('/papers/add',require('./src/post.papers.add.js'))

//编辑问卷
app.post('/papers/edit',require('./src/post.papers.edit.js'))

//读取问卷列表
app.get('/papers/list',require('./src/get.papers.list.js'))

//根据条件返回问卷列表
app.get('/papers/find',require('./src/get.papers.find.js'))

//显示问卷回答页面
app.get('/papers/release',require('./src/get.release.js'))

//添加用户答卷
app.post('/papers/release/add',require('./src/post.release.add.js'))

//获取用户提交的问卷列表
app.get('/papers/answer',require('./src/get.papers.answer.js'))

//获取用户信息
app.get('/user/getuser',require('./src/get.getuser.js'))

//修改用户邮箱
app.get('/edit/email',require('./src/get.edit.email.js'))

//修改用户手机号
app.get('/edit/phone',require('./src/get.edit.phone.js'))
app.listen(8080) //设置端口
