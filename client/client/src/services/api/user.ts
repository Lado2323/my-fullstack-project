import axios from "axios";

export interface UserInterFace {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  verified: boolean;
  role: string;
  password: string;
  refresh_token: string;
}

const API_URL = "http://localhost:3000/user/current-user";

export const tryFetchingUser = async (
  token: string
): Promise<UserInterFace> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error("Failed to get current user");
  }
};

export const tryUpdatingUser = async (
  token: string,
  data: Partial<UserInterFace>
): Promise<UserInterFace> => {
  try {
    const response = await axios.put("http://localhost:3000/user", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (err) {
    throw new Error("Failed to update current user");
  }
};
