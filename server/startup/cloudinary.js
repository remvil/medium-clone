const config = require('config')
const cloudinary = require('cloudinary')

module.exports = () => {
    cloudinary.config({
        cloud_name: 'aladinsane',
        api_key: '',
        api_secret: ''
    })
}