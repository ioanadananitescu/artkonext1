import cloudinary from 'cloudinary';
import multer from 'multer';
import { multerUploads } from '@utils/multer';

import { connectToDB } from '@utils/database';
import Image from '@models/image';
import cloudinary from '@utils/cloudinary';
import cloudinary from 'cloudinary';
import multer from 'multer';

const storage = multer.diskStorage({});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_KEY
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      upload.single('file')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }

        const file = req.file;
        if (!file) {
          return res.status(400).json({ error: 'Please upload a file.' });
        }

        const result = await cloudinary.v2.uploader.upload(file.path);

        return res.status(200).json({ url: result.secure_url });
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload image.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
