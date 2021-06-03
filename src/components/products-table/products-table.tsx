import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ClearAllOutlinedIcon from '@material-ui/icons/ClearAllOutlined'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import type { Product, ProductPropertyEntryDTO } from '@/api/types'
import { useStyles } from './styles'
import { ProductCompareRow } from './product-compare-row'

function ProductsTable({
  productProperties,
  products
}: {
  productProperties: ProductPropertyEntryDTO[]
  products: Product[]
}) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const [isCompared, setIsCompared] = React.useState(false)
  const [selected, setSelected] = React.useState<number[]>([])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleSelection = (name: number) => () => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: number[] = []

    if (selectedIndex === -1) {
      newSelected = [...selected, name]
    } else if (selectedIndex === 0) {
      newSelected = [...selected.slice(1)]
    } else if (selectedIndex === selected.length - 1) {
      newSelected = [...selected.slice(0, -1)]
    } else if (selectedIndex > 0) {
      newSelected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)]
    }

    setSelected(newSelected)
  }

  const clearSelection = () => {
    setSelected([])
    setIsCompared(false)
  }

  const currentTableStart = page * rowsPerPage
  const currentTableEnd = page * rowsPerPage + rowsPerPage
  const isSelection = selected.length > 0
  const isComparable = selected.length == 2
  const productsToCompare = products.filter(({ id }) => selected.includes(id)).slice(0, 2)
  return (
    <Paper className={classes.root}>
      <Toolbar>
        <Box className={classes.clearBox}>
          <IconButton edge="start" color="inherit" aria-label="clear selection" onClick={clearSelection}>
            <ClearAllOutlinedIcon />
          </IconButton>
          {isSelection && (
            <Typography className={classes.title}>{`${selected.length} product${
              selected.length > 1 ? 's' : ''
            } selected`}</Typography>
          )}
        </Box>
        <Button
          color="inherit"
          disabled={!isComparable}
          className={isComparable ? classes.buttonActive : classes.buttonDisabled}
          onClick={() => setIsCompared(true)}
        >
          {isComparable ? 'Compare Products' : 'Select 2 Products to Compare'}
        </Button>
      </Toolbar>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="product inventory">
          <TableHead>
            <TableRow>
              {productProperties.map(({ label, name }) => (
                <TableCell align="center" className={classes.cell} key={name}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
            {isCompared && isComparable && (
              <ProductCompareRow productProperties={productProperties} products={productsToCompare} />
            )}
          </TableHead>
          <TableBody>
            {products.slice(currentTableStart, currentTableEnd).map((product) => (
              <TableRow
                hover
                role="checkbox"
                aria-checked={selected.includes(product.id)}
                key={product.id}
                tabIndex={-1}
                onClick={handleSelection(product.id)}
                selected={selected.includes(product.id)}
              >
                {productProperties.map(({ name }) => (
                  <TableCell align="center" className={classes.cell} key={`${product}-${name}`}>
                    {(name === 'tags' ? product[name]?.join(', ') : product[name]) ?? '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default ProductsTable
