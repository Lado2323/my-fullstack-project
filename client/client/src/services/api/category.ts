import axios from "axios";

const API_URL = "http://localhost:3000/product-category";

export interface CategoryInterface {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  image: string;
}

export const tryGettingCategoryNames = async (): Promise<CategoryInterface[]> => {
  try {
    const response = await axios.get(API_URL);
    const result = await response.data.map((item: CategoryInterface) => item.name)
    return result 
  } catch (err) {
    throw new Error("Failed to get current user");
  }
};
