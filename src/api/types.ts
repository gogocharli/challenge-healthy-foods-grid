export type ProductId = number

interface ProductNutritionDTO {
  energy: number
  protein: number
  saturatedFat: number
  carbohydrate: number
  sugars: number
  dietaryFibre: number
  sodium: number
}

interface ProductDTOBase {
  id: ProductId
  name: string
  tags: string[]
}

export interface ProductDTO extends ProductDTOBase {
  nutrition: ProductNutritionDTO
}

export interface Product extends ProductDTOBase, ProductNutritionDTO {}

export type ProductsMap = Record<ProductId, Product>

export interface ProductPropertyEntryDTO {
  name: keyof Product
  label: string
}
