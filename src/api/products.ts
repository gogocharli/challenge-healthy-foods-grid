import { ProductDTO, Product, ProductPropertyEntryDTO } from './types'

const HOST_URL =
  process.env.NODE_ENV === 'production' ? 'https://healthy-foods-inventory.vercel.app' : 'http://localhost:3000'
const API_URL = `${HOST_URL}/api`
const PRODUCTS_API = `${API_URL}/products`
const PRODUCTS_PROPERTIES_API = `${API_URL}/products/properties`

export const getProductProperties = async (): Promise<ProductPropertyEntryDTO[]> => {
  return fetchData(PRODUCTS_PROPERTIES_API) ?? null
}

export const getProducts = async (): Promise<Product[]> => {
  const productsDTO: ProductDTO[] = await fetchData(PRODUCTS_API)
  return productsDTO?.map(mapProduct) ?? null
}

const mapProduct = (dto: ProductDTO): Product => {
  const { nutrition, ...restDto } = dto
  return { ...restDto, ...nutrition }
}

const fetchData = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  try {
    const res = await fetch(input, init)
    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
