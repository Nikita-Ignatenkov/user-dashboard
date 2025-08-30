import { axiosInstance } from '../api/root.interceptor';
import type { IUser, IUsersResponse } from '../types/user.types';
import type { IPagination } from '../types/root.types';

export class UserService {
  private static readonly BASE_URL = '/users';

  static async list(params?: Partial<Pick<IPagination, 'skip' | 'limit'>>) {
    const response = await axiosInstance.get(this.BASE_URL, { params });
    return response.data as IUsersResponse;
  }

  static async retrieve(id: number) {
    const response = await axiosInstance.get(`${this.BASE_URL}/${id}`);
    return response.data as IUser;
  }
}

// Улучшенный вариант
//class UserService {
//   private BASE_URL = '/users';

//   async list(params?: Partial<IPagination>) {
//     const response = await axiosInstance.get<IUsersResponse>(this.BASE_URL, { params });
//     return response.data
//   }

//   async retrieve(id: number) {
//     const response = await axiosInstance.get<IUser>(`${this.BASE_URL}/${id}`);
//     return response.data;
//   }
// }
//
// export const userService = new UserService()
