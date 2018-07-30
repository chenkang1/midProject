const express = require('express')
const Users = require('../controller/Users')
const Menus = require('../controller/Menus')
const Outlines = require('../controller/Outlines')
const Items = require('../controller/Items')
const Classes = require('../controller/Classes')
const Papers = require('../controller/Papers')
const Answer = require('../controller/Answer')


const router = express.Router()
router.all('*', (req, res, next) => {
  // next();return;
  // 登录权限设置
  if (['/users/login', '/users/add','/users/isexist','/papers/publish'].indexOf(req.path) >= 0) {
    next()
  } else {
    if (req.session.logined) {
      next()
    } else {
      res.send({
        error:'4',
        message:'没有权限,请先登录！'
      })
    }
  }
})

/* 用户管理 */
router.get('/users/list', Users.list)
router.post('/users/add', Users.add)
router.get('/users/delete', Users.delete)
router.post('/users/edit', Users.edit)
router.get('/users/resetpassword', Users.resetpassword)
router.get('/users/isexist', Users.isexist)
router.post('/users/login', Users.login)
router.get('/users/one', Users.one)
router.get('/users/logout', Users.logout)


/* 班级管理 */
router.get('/classes/list', Classes.list)
router.post('/classes/add', Classes.add)
router.get('/classes/delete', Classes.delete)
router.post('/classes/edit', Classes.edit)
router.get('/classes/isexist', Classes.isexist)


/* 菜单管理 */
router.get('/menus/list', Menus.list)
router.post('/menus/add', Menus.add)
router.get('/menus/delete', Menus.delete)
router.post('/menus/edit', Menus.edit)
router.post('/menus/sort', Menus.sort)
router.get('/menus/status', Menus.status)

/* outlines2 */
router.get('/outlines2/list', Menus.list)
router.post('/outlines2/add', Menus.add)
router.get('/outlines2/delete', Menus.delete)
router.post('/outlines2/edit', Menus.edit)
router.post('/outlines2/sort', Menus.sort)
router.get('/outlines2/status', Menus.status)

/* 大纲管理 */
router.get('/outlines/list', Outlines.list)
router.post('/outlines/add', Outlines.add)
router.get('/outlines/delete', Outlines.delete)
router.post('/outlines/edit', Outlines.edit)
router.post('/outlines/sort', Outlines.sort)
router.get('/outlines/status', Outlines.status)

/* 选项管理 */
router.get('/items/list', Items.list)
router.post('/items/add', Items.add)
router.get('/items/delete', Items.delete)
router.post('/items/edit', Items.edit)
router.post('/items/sort', Items.sort)
router.get('/items/status', Items.status)

/* 问卷管理 */
router.get('/papers/list', Papers.list)
router.post('/papers/edit', Papers.edit)
router.get('/papers/delete', Papers.delete)
router.post('/papers/add', Papers.add)
router.get('/papers/one', Papers.one)
router.get('/papers/publish', Papers.publish)

/* answer */
router.post('/answer/add', Answer.add)
router.get('/answer/count', Answer.count)
router.get('/answer/countrow', Answer.countrow)

module.exports = router