import axios from "axios";

const API_URL = "http://localhost:3000/product";

export interface ProductInterface {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  image: string;
  price: number;
  salePrice: null | number;
  category_name: string;
}

export interface ProductFilters {
  page?: string;
  pageSize?: string;
  minPrice?: string;
  maxPrice?: string;
  onlySales?: string;
  search?: string;
  category_name?: string;
}

export interface GetProductsInterface {
  products: ProductInterface[],
  total: string
}

export const tryGettingProducts = async (
  filters: ProductFilters = {}
): Promise<GetProductsInterface> => {
  try {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value);
      }
    });

    const response = await axios.get(API_URL, {
      params,
    });

    return response.data;
  } catch (err) {
    throw new Error("Failed to get current user");
  }
};

export const tryUpdateProduct = async (
  productId: string,
  updatedData: Partial<ProductInterface>
): Promise<number> => {
  try {
    const token = localStorage.getItem("token");
    console.log({ id: productId, ...updatedData });
    const response = await axios.put(
      API_URL,
      { id: productId, ...updatedData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.status;
  } catch (err) {
    throw new Error("Failed to get current user");
  }
};
