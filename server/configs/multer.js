import multer, { diskStorage } from 'multer'

const storage = diskStorage({})

export  const upload = multer({storage})