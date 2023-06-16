import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({


creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, 
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },

  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }, 

  medium: {
    type: String, 
    required: [true, 'Please choose a medium']
  }, 

  imageUrl: {
    type: String, 
    required:[true, 'Set an image, please']
  }
});

const Prompt =models.Prompt || model('Prompt', PromptSchema);

export default Prompt;