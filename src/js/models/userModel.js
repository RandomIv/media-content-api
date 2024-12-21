import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter a last name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
    unique: [true, 'Email must be unique'],
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
    unique: [true, 'Password must be unique'],
  },
});
const User = mongoose.model('User', UserSchema);

export default User;

