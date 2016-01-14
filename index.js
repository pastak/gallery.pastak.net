'use strict'
const app = new require('koa')()
const serve = require('koa-static')

app.use(serve('./static'))
app.use(serve('./public'))

app.listen(3000)
console.log('listening on port 3000')
