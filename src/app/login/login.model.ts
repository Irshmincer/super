export interface Login {
  status: number;
  message: string;
  data: UserData;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: number;
}