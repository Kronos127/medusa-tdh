import useSWR from "swr"
import { adminFetcher } from "../utils/admin-fetcher"

// Hook to fetch product types
export const useAdminProductTypes = () => {
  const { data, error } = useSWR("/admin/product-types", adminFetcher)

  return {
    product_types: data ? data.product_types : [],
    isLoading: !data && !error,
    isError: error,
  }
}

// Hook to create a product type
export const useAdminCreateProductType = () => {
  return async (productTypeData: { name: string }) => {
    const response = await adminFetcher("/admin/product-types", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productTypeData),
    })
    return response.product_type
  }
}
