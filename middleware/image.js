const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images/')
    },
    filename(req, file, cb) {
        cb(null, new Date() + '_' + file.originalname)
    }
})

const types = ['image/jpeg', 'image/jpg', 'image/png']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})