export interface User {
  name: string;
  email: string;
  passwords: {
    password: string;
    confirm_password: string;
  };
}
