import mongoose from '../db/db.js';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 8,
    match: /^[a-z0-9]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!$%^@&*()_+|~=`{}\[\]:";'<>?,.\/]).+$/,
  },
}, {
  timestamps: true
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
