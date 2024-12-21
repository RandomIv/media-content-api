import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please enter a first name'],
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model('User', UserSchema);
export default User;
