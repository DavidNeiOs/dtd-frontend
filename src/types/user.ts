interface DataFromBackEnd {
  _id: string
  password: string
}


export interface User {
  name: string;
  email: string;
}

export interface UserRegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export interface UserLoginForm {
  email: string;
  password: string;
}