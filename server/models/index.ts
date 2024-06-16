import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    description: {
      type: String,
      require: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

const Todo = model('Todo', schema);

export default Todo;
