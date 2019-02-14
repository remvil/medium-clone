const config = require('config')
const cloudinary = require('cloudinary')
const cloudinaryConf = config.get('cloudinaryConf')

module.exports = () => {
    cloudinary.config({
        cloud_name: cloudinaryConf.cloud_name,
        api_key: cloudinaryConf.api_key,
        api_secret: cloudinaryConf.api_secret
    })
}