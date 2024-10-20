import ProductTypeService from "../services/product-type-service"

export default async ({ container, logger }, options) => {
  const productTypeService = new ProductTypeService({ manager: container.resolve("manager") })
  container.register("productTypeService", productTypeService)
}
