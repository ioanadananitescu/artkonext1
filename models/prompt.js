import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({


creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }, 

  title: {
    type: String,
    required:[true, 'A title is required'],
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },

  artist: {
    type: String,
    required:[true, 'Artist name is required'],
  },

  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }, 

  size: {
    type: String,
    required:[true, 'Specify a size, small, medium, big or large'],
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