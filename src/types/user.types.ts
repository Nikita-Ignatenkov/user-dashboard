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
  total: number;
  skip: number;
  limit: number;
}