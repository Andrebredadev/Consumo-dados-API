import React from 'react'
import { Table } from 'react-bootstrap'

const List = () => {

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Partido Politico</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nome do Partido</td>
                </tr>
            </tbody>
        </Table>

    )
}
export default List
