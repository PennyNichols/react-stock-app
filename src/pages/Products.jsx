import React, { useState, useEffect} from 'react'
import ModalProduct from '../components/layout/ModalProduct';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, Button, Typography, TableContainer, Paper, Stack } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData, getData } from "../store/stock-actions";

const Products = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.stock.products);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    dispatch(getData('category'));
    dispatch(getData('brand'));
    dispatch(getData('product'));
  }, []);


  const handleClick = (id) => { 
    dispatch(setData('delete', 'product', id, navigate, '/stock/products')) 
  }
  const rows = products?.map(item => ({...item}))

  return (
    <Grid item xs={ 12 } sx={ { p: 2, display: 'flex', flexDirection: 'column' } }>
      <Typography component="h1" variant="h5" color="inherit" noWrap
        sx={ {p:2, pt:"2px"} }
      > Products
      </Typography>
      <Stack direction="row" spacing={ 2 }>
        <Button variant="contained" onClick={handleOpen}> New Product</Button>
      </Stack>
      <TableContainer component={ Paper } sx={ {mt:1} }>
        <Table sx={ { minWidth: 650 } }>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows?.map((row, index) => (
              <TableRow key={ row.id }>
                <TableCell>{ index+1}</TableCell>
                <TableCell>{ row.category}</TableCell>
                <TableCell>{ row.brand}</TableCell>
                <TableCell>{ row.name }</TableCell>
                { !row.stock ? (
                  <TableCell sx={ {color: 'red'} }>0</TableCell>
                ) : (
                    <TableCell>{ row.stock}</TableCell>
                )}

                <TableCell>
                  <DeleteOutlineIcon
                    sx={ { cursor: "pointer" } }
                    onClick={ () => handleClick(row.id) }
                  />
                </TableCell>
              </TableRow>

            ))}
          </TableBody>
      </Table>
      </TableContainer>
      <ModalProduct open={ open } handleClose={ handleClose} />
    </Grid>
  )
}

export default Products