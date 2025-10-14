import axios from "axios";

const API_LOGIN_URL = "http://localhost:3000/auth/login";

export interface attemptLoginInterface {
  access_token: string;
  refresh_token: string;
}

export interface loginFromInterface {
  email: string;
  password: string;
}

export const tryLogin = async (
  formData: loginFromInterface
): Promise<attemptLoginInterface> => {
  try {
    const response = await axios.post(API_LOGIN_URL, formData);
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  } catch (err) {
    throw new Error("Failed to login");
  }
};

const API_SIGNUP_URL = "http://localhost:3000/auth/register";

interface signUpFormInterface {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
}

export const trySignUp = async (
  formData: signUpFormInterface
): Promise<number> => {
  try {
    const response = await axios.post(API_SIGNUP_URL, formData);
    return response.status;
  } catch (err) {
    throw new Error("Failed to login");
  }
};
