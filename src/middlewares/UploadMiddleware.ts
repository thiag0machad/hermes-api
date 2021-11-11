import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION
})

const s3 = new aws.S3()

export const uploadMiddleware = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString())
    }
  })
})
