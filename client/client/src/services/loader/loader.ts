import { defer } from "react-router-dom";
import { tryGettingProducts } from "../api/product";

export const productsLoader = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const filters = {
    page: params.get("page") || "1",
    pageSize: params.get("pageSize") || "10",
    minPrice: params.get("minPrice"),
    maxPrice: params.get("maxPrice"),
    onlySales: params.get("onlySales"),
    search: params.get("search"),
    categoryName: params.get("category_name"),
  };

  const productPromise = tryGettingProducts(filters);

  // ✅ Wrap it with `defer`
  return defer({
    productsResponse: productPromise,
  });
};
