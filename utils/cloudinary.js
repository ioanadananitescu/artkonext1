import {config, uploader} from 'cloudinary';

const cloudinaryConfig=()=>config({

    cloud_name:proces.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_SECRET
    

});

export {cloudinaryConfig, uploader};