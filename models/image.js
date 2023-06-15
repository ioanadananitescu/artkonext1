import { Schema, model, models } from 'mongoose';


const ImageSchema = new Schema({
  imageUrl: {
    type: String,
    required: [true, 'image is required']
  }
  
});

const Imagine = model("Imagine", ImageSchema);

export default Imagine;
