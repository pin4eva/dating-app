export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  token: string;
}

export interface RegisterDTO {
  username: string;
  password: string;
}
