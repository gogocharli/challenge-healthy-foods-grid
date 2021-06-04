import React from 'react'
import Chip from '@material-ui/core/Chip'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import type { Product, ProductPropertyEntryDTO } from '@/api/types'
import { useStyles } from './styles'

export function ProductCompareRow({
  productProperties,
  products
}: {
  productProperties: ProductPropertyEntryDTO[]
  products: Product[]
}) {
  const [productA, productB] = products

  return (
    <TableRow>
      {productProperties.map(({ name: property }) => {
        if (!productA[property] && !productB[property]) {
          return <ProductCell key={property} />
        }

        if (property == 'name') {
          return (
            <ProductCell key={property}>
              {`${productA.name}`} vs
              <br />
              {`${productB.name}`}
            </ProductCell>
          )
        }

        if (property == 'tags') {
          return <ProductCell key={property}>{`${productA.tags?.join(', ') ?? '-'}`}</ProductCell>
        }

        return (
          <ProductCell key={property}>
            <Chip
              size="small"
              color="primary"
              label={productA[property] ?? '-'}
              style={{ textDecoration: 'line-through', marginRight: '.25rem' }}
            />
            <Chip size="small" color="secondary" label={productB[property] ?? '-'} />
          </ProductCell>
        )
      })}
    </TableRow>
  )
}

function ProductCell({ children }: { children?: React.ReactNode }) {
  const classes = useStyles()
  return (
    <TableCell align="center" className={classes.cell}>
      {children || '-'}
    </TableCell>
  )
}
