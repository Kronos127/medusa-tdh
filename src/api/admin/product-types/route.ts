import type { 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const productTypeService = req.scope.resolve("productTypeService");
  const productTypes = await productTypeService.listProductTypes();
  return res.status(200).json({ product_types: productTypes });
}

export const POST = async (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  console.log("DSAKJNKADSNKDNSAJKJADSNKJDSANJKDSAJNK")
  // const productTypeService = req.scope.resolve("productTypeService");
  // const productType = await productTypeService.createProductType(req.body);
  return null;
}