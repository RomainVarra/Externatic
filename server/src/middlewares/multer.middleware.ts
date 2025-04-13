import path from "node:path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function stock(req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function nameFile(req, file, cb) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase(),
    );

    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    return cb(
      new Error("Une erreur s'est produite lors du chargement des fichiers"),
    );
  },
}).fields([
  { name: "photo", maxCount: 1 },
  { name: "cv", maxCount: 1 },
]);
