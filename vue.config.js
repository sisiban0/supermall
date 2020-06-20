const path = require ('path')
const resolve = dir => {
  return path.join(__dirname,dir)
}
module.exports = {
  chainWebpack(config){
    config.resolve.alias
    .set('assets',resolve('src/assets'))
    .set('common',resolve('src/components/common'))
    .set('content',resolve('src/components/content'))
    .set('network',resolve('src/network'))
    .set('views',resolve('src/views'))
  }
}