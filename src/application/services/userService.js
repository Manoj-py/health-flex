import UserModel from '../../infrastructure/respositories/userRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserService {
  async registerUser({ username, password }) {
    const user = new UserModel({ username, password });
    await user.save();
    return user;
  }

  async loginUser({ username, password }) {
    const user = await UserModel.findOne({ username });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  async getAllUsers() {
    return await UserModel.find({});
  }
}

export default new UserService();
