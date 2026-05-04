export type LoginResponse = {
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type PayloadToken = {
  sub: string;
  exp: number;
  iat: number;
};
