import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setData } from '../../store/stock-actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalSales = ({ open, handleClose, info, setInfo, initialValues }) => {
  
  const { products, brands } = useSelector(state => state.stock);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    handleClose();
    if (info.id) 
      dispatch(setData('put', 'sale', info, navigate, '/stock/sales'));
    else 
      dispatch(setData('post', 'sale', info, navigate, '/stock/sales'));
    setInfo(initialValues);
    }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value })
  }
  return (
    <Modal open={ open } onClose={ handleClose }>

      <Box sx={ style }>
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 4 } } component="form" onSubmit={ submitHandler }>

          <FormControl>
            <InputLabel variant='outlined' id="brand-select-label"> Brand</InputLabel>
            <Select labelId='brand-select-label' label="Brand" name="brand_id"
              onChange={ handleChange }
              required
              value={ info.brand_id }
            >
              { brands?.map(item => (<MenuItem key={ item.id } value={ item.id }>
                { item.name }
              </MenuItem>)) }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel variant='outlined' id="product-select-label"> Product</InputLabel>
            <Select labelId="product-select-label" label="Product" name="product_id"
              onChange={ handleChange }
              required
              value={ info.product_id }
            >
              { products?.map(item => (<MenuItem key={ item.id } value={ item.id }>
                { item.name }
              </MenuItem>)) }
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              label="Quantity" name="quantity" id="quantity" variant="outlined" value={ info.quantity }
              type="number" InputProps={ { inputProps: {min:0} } }
              required onChange={ handleChange }
            />
          </FormControl>

          <FormControl>
            <TextField
              label="Price" name="price" id="price" variant="outlined" value={ info.price }
              type="number"  InputProps={ { inputProps: {min:0} } }
              required onChange={ handleChange }
            />
          </FormControl>

          <Button type="submit" variant="contained" size="large">{info.id? "Update Sale": "Add New Sale" } </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalSales