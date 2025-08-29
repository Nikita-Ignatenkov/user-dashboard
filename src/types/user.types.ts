import type { IPagination } from './root.types';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  address: {
    address: string;
    city: string;
  };
}

export interface IUsersResponse extends IPagination {
  users: IUser[];
}