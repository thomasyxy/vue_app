// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var express = require('express')
var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
// var routers = require('../config/routers')()
var router = express.Router()

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})


var port = 8001;
var uri = 'http://127.0.0.1:' + port

var app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function (req, res) {
  res.redirect(uri + '/index.html');
});

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at ' + uri + '\n')
})
