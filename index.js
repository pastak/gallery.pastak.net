'use strict'
const app = new require('koa')()
const serve = require('koa-static')

app.use(serve('./static'))
app.use(serve('./public'))
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
