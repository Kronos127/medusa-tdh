import { BaseService } from "medusa-interfaces"
import { EntityManager } from "typeorm"

class ProductTypeService extends BaseService {
  private manager: EntityManager

  constructor({ manager }) {
    super()

    this.manager = manager
  }

  async createProductType(typeData: any) {
    const productTypeRepository = this.manager.getRepository("ProductType")

    const newType = productTypeRepository.create(typeData)
    await productTypeRepository.save(newType)

    return newType
  }

  async listProductTypes() {
    const productTypeRepository = this.manager.getRepository("ProductType")
    return await productTypeRepository.find()
  }
}

export default ProductTypeService
