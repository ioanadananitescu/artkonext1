import {Schema, model, models} from 'mongoose';

const ImagineSchema = new Schema({
  imageUrl: {
    type: String,
    required: [true,'Please upload an url image'],
  },

});

const Imagine= models.Imagine || model('Imagine', ImagineSchema);

export default Imagine;
