import { userRepository } from '../repositories/user.repository.js';

export class UserService {
  constructor(repo = userRepository) {
    this.userRepository = repo;
  }

  async getAllUsers(filters = {}) {
    return await this.userRepository.findAll(filters);
  }

  async getUserById(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    return user;
  }

  async createUser(userData) {
    const existing = await this.userRepository.findByEmail(userData.email);
    if (existing) {
      const error = new Error('Email already registered');
      error.statusCode = 409;
      throw error;
    }
    return await this.userRepository.create(userData);
  }

  async updateUser(id, updateData) {
    // Check user exists
    await this.getUserById(id);

    // If email is changed, check collision
    if (updateData.email) {
      const existing = await this.userRepository.findByEmail(updateData.email);
      if (existing && existing._id.toString() !== id) {
        const error = new Error('Email is already taken by another account');
        error.statusCode = 409;
        throw error;
      }
    }

    return await this.userRepository.updateById(id, updateData);
  }

  async deleteUser(id) {
    await this.getUserById(id);
    return await this.userRepository.deleteById(id);
  }
}

export const userService = new UserService();
