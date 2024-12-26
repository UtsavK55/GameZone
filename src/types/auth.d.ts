interface LoginResponse {
  key: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

type LoginError = {non_field_errors: string};

type SignupError = {
  email?: string;
  password?: string;
  username?: string;
};

type Credentials = {email: string; password: string};
type SignupCredentials = Credentials & {username: string};
