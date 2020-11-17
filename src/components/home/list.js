import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { getPoliticalParty, getMembers } from '../../services/home'
import { FormGroup } from '@material-ui/core'


const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'politicalParty', label: 'Partido', minWidth: 100 },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  form: {
    width: '15%'
  }
})

const List = () => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [isUpdate, setUpdate] = useState(false)
  const [politicians, setPoliticians] = useState([])
  const [politicalParties, setPoliticalParties] = useState([])
  const [id, setId] = useState(36898)

  useEffect(() => {
    setUpdate(false)
    let get = async () => {
      try {
        const { data: { dados: politicianList } } = await getMembers(id)
        setPoliticians(politicianList)

        const { data: { dados: politicalPartiesList } } = await getPoliticalParty()
        setPoliticalParties(politicalPartiesList)

      } catch (error) {
        console.error(error)
      }
    }

    if (!isUpdate) {
      get()
    }
    return () => get = () => { }

  }, [isUpdate, id])

  function createData(id, name, politicalParty) {
    return { id, name, politicalParty }
  }

  const mapPoliticians = politicians.map(data => (
    createData(data.id, data.nome, data.siglaPartido)
  ))

  const rows = [
    ...mapPoliticians
  ]

  const handleChangeOption = async (event) => {
    const newId = event.target.value
    return setId(newId)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      {
        <FormGroup className={classes.form}>
          <select name="parties" id="parties" onChange={handleChangeOption} >{
            politicalParties.map(data => (
              <option value={data.id} key={data.id}>{data.nome}</option>
            ))}
          </select>
        </FormGroup>
      }
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default List