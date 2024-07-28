import cloudinary from 'cloudinary';
import fs from 'fs';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

cloudinary.v2.config({
  cloud_name: "CLOUD_NAME",
  api_key: "API_KEY",
  api_secret: "API_SECRET",
  secure: true,
});

const upload = async () => {
  try {
    const folderPath = path.join(__dirname, "..", "..", "public", "assets","VIP-photos");
    const files = fs.readdirSync(folderPath);
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

    const imageFiles = files.filter(file => 
      allowedExtensions.includes(path.extname(file).toLowerCase())
    );

    console.log({imageFiles});

    const uploadResults = {};

    for (const file of imageFiles) {
      const filePath = path.join(folderPath, file);
      const result = await cloudinary.v2.uploader.upload(filePath, {
        folder: 'VIP-photos',
        public_id: path.parse(file).name, // Use original filename without extension
      });
      uploadResults[file] = result.secure_url;
    }

    console.log({uploadResults});

    const responseFilePath = './VIP-photos.json';
     fs.writeFileSync(responseFilePath, JSON.stringify(uploadResults, null, 2));

    console.log('Upload complete. Results saved to assets.json');
  } catch (error) {
    console.error('Error uploading photos:', error);
  }
};

upload();