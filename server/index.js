const express = require('express')
const helmet = require('helmet')
const multer = require('multer')
const upload = multer()

const app = express()

app.use(helmet())
app.set('view engine', 'pug')
app.set('views', process.cwd() + '/views')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/get-file-size', upload.single('file'), (req, res, next) => {

  if(!req.file) {
    return res.status(400).send('no file uploaded')
  }

  res.render('index', {size: req.file.size})
})

app.listen(process.env.PORT || 27010, () => {
  console.log('node.js listening')
})
