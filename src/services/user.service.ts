import { axiosInstance } from '../api/root.interceptor';
import type { IUser, IUsersResponse } from '../types/user.types';

export const UserService = {
  async getAllUsers(skip = 0, limit = 20): Promise<IUsersResponse> {
    const response = await axiosInstance.get(
      `/users?limit=${limit}&skip=${skip}&select=firstName,lastName,id`
    );
    return response.data;
  },

  async getUserById(id: number): Promise<IUser> {
    const response = await axiosInstance.get(
      `/users/${id}?select=firstName,lastName,age,gender,address`
    );
    return response.data;
  }
};
   