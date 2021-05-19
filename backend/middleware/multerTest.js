// const path = require('path');
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadPath = path.join(__dirname, '../uploads/img/users')
//         cb(null, uploadPath);
//     },
//     filename: (req, file, cb) => {
//         const ext = file.mimetype.split('/')[1];
//         cb(null, file.originalname + '-' + Date.now() + '.' + ext);
//     }
// })

// const multerFilter = (req, file, cb) => {
//     if(file.mimetype.startsWith('image')) {
//         cb(null, true);
//     } else {
//         cb(new AppError('Not an Image! Please upload an image', 400), false);
//     }
// }

// const upload = multer({ 
//     storage, 
//     fileFilter: multerFilter,
//     limits: { fileSize: 1024 * 1024 }
//  });

//  const uploadFile = upload.single('photo');

//  exports.uploadProfilePicture = (req, res, next) => {
//     uploadFile(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         return res.status(413).json({ error: err.message });
//       } else if (err) {
//         console.log(err);
//         return res.status(409).json({ error: 'Cannot upload File due to unknown err'})
//       }
  
//       req.profilePath = req.file.path;
//       next();
//     });
//   };
  
