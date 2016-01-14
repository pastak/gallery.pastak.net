'use strict'

const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname, '../static/images'), (err, files) => {
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  fs.writeFile(path.join(__dirname, '../public/images.json'), JSON.stringify(files), (err) => {
    if (!err) return
    console.error(err)
    process.exit(1)
  })
})
