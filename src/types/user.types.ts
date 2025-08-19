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

export interface IUsersResponse {
  users: IUser[];

  // total, skip и limit лучше вынеси в отделный интерфейс в отдельном файле (пример ниже)
  total: number;
  skip: number;
  limit: number;
}

// ./types/root.types.ts
/** 
 * exprot interface IPagination {
    total: number;
     skip: number;
    limit: number;
 * }
 * 
 * а потом просто
 * export interface IUserResponse extends IPagination {
*    users: IUser[]
 * } 
 */