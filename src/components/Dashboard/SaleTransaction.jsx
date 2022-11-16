import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';


const SaleTransaction = () => {

  const transaction = useSelector(state => state.stock.transaction);


  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Firm's Name</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell align="right">Sale Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { transaction.map((row) => (
          <TableRow key={ row.id }>
            <TableCell>{ row.createds } { row.time_hour }</TableCell>
            <TableCell>{ row.firm }</TableCell>
            <TableCell>{ row.product }</TableCell>
            <TableCell>{ row.quantity }</TableCell>
            <TableCell align="right">{ `$${row.price_total}` }</TableCell>
          </TableRow>
        )) }
      </TableBody>
    </Table>


  )
}

export default SaleTransaction