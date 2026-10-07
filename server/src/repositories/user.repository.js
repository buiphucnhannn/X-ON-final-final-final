import { BaseRepository } from './base.repository.js';
import { User } from '../models/user.model.js';

export class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  /**
   * Find user by email
   * @param {string} email
   */
  async findByEmail(email) {
    return await this.model.findOne({ email });
  }

  /**
   * Example custom repository query
   * @param {string} role
   */
  async findByRole(role) {
    return await this.model.find({ role }).sort({ createdAt: -1 });
  }
}

export const userRepository = new UserRepository();
