const aws = require("aws-sdk");
const multer = require("multer");
const path = require('path')
const multerS3 = require("multer-s3");

const s3 = new aws.S3();

aws.config.update({
  AWSAccessKeyId: 'AKIAIK3BPFWANBWWS4AQ',
  AWSSecretKey: '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',
  region: "us-east-2",
});

export const uploadImage = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    //TODO update bucked
    bucket: "flask-react-app",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      console.log(file)
      cb(null, Date.now().toString( + file.originalnameib));
    },
  }),
  fileFilter: function(req, file, cb) {
    const filetypes = /jpeg|jpg|png/; //regex   
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Allow images only of extensions jpeg|jpg|png !");
    }
  }
}).single("image");
