const multer = require('multer')

exports.upload_profile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/profile_images/`)
        },
        filename: function (req, file, cb) {
            cb(null, `profile_image_` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('profile_image')

exports.upload_post = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/posts/`)
        },
        filename: function (req, file, cb) {
            cb(null, `post` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('post')
exports.upload_adventure = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/adventure/`)
        },
        filename: function (req, file, cb) {
            cb(null, `adventure` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('adventure')



