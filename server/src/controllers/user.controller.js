import { userService } from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

export class UserController {
  constructor(service = userService) {
    this.userService = service;
  }

  getUsers = async (req, res) => {
    const users = await this.userService.getAllUsers();
    return ApiResponse.success(res, users, 'Users retrieved successfully');
  };

  getUserById = async (req, res) => {
    const user = await this.userService.getUserById(req.params.id);
    return ApiResponse.success(res, user, 'User retrieved successfully');
  };

  createUser = async (req, res) => {
    const newUser = await this.userService.createUser(req.body);
    return ApiResponse.success(res, newUser, 'User created successfully', 201);
  };

  updateUser = async (req, res) => {
    const updatedUser = await this.userService.updateUser(req.params.id, req.body);
    return ApiResponse.success(res, updatedUser, 'User updated successfully');
  };

  deleteUser = async (req, res) => {
    await this.userService.deleteUser(req.params.id);
    return ApiResponse.success(res, null, 'User deleted successfully');
  };
}

export const userController = new UserController();
