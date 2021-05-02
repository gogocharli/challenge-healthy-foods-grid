import { ProductPropertyEntryDTO, Product } from '@/api/types'

export interface ProductsTableProps {
  productProperties: ProductPropertyEntryDTO[]
  products: Product[]
}

export interface MaterialTableColumn {
  id?: 'name' | 'code' | 'population' | 'size' | 'density'
  minWidth?: number
  align?: 'left' | 'right' | 'center'
  format?: (value: any) => any
}

export interface ProductTableProperty extends ProductPropertyEntryDTO, MaterialTableColumn {}
