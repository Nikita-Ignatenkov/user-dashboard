import { axiosInstance } from '../api/root.interceptor';
import type { IUser, IUsersResponse } from '../types/user.types';

export const UserService = {
  // private BASE_URL = '/users' лучше использовать, если все тоды стартуют с одного названия

  // Здесь бы тебе пригодился IPagionation из root.types.ts
  // Можно не уточнять в названии, что ты получаешь список пользователей, навазние класса и так об этом говорит
  // В идеале использовать везде примерно такие названия методов: list, retieve, create, update, destroy
  async getAllUsers(skip = 0, limit = 20): Promise<IUsersResponse> {
    const response = await axiosInstance.get(
      // query параметры лучше передавать через params: {} в axios
      `/users?limit=${limit}&skip=${skip}&select=firstName,lastName,id`
      // `${this.BASE_URL}, {params: {...}}`
    );
    return response.data;
  },

  // Можно явно не указывать, что возвращаемый тип Promise<IUser>, в typescipt есть автоматическое выведение типов
  async getUserById(id: number): Promise<IUser> {
    const response = await axiosInstance.get(
      `/users/${id}?select=firstName,lastName,age,gender,address`
    );
    return response.data;
  }
};
   