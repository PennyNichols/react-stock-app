import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/stock-actions';

const initialValues = {
  "name": "",
  "category_id": "",
  "brand_id": ""
}

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

const ModalProduct = ({ open, handleClose }) => {
  const { categories, brands } = useSelector(state => state.stock);
  const [productInfo, setProductInfo] = useState(initialValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => { 
    e.preventDefault();
    dispatch(setData('post', 'product', productInfo, navigate, '/stock/products'));
    setProductInfo(initialValues);
    handleClose();
  }

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setProductInfo({...productInfo, [name]: value})
  }

  return (
  
    <Modal open={ open } onClose={ handleClose}>

      <Box sx={style}>
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 4 } } component="form" onSubmit={ submitHandler}>
          
          <FormControl>
            <InputLabel variant='outlined' id="category-select-label"> Category</InputLabel>
            <Select labelId='category-select-label' label="Category" name="category_id"
              onChange={ handleChange }
              required
              value={ productInfo.category_id}
            >
              { categories?.map(item => (<MenuItem key={ item.id } value={ item.id }>
                { item.name }
              </MenuItem>)) }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel variant='outlined' id="brand-select-label"> Brand</InputLabel>
            <Select labelId='brand-select-label' label="Brand" name="brand_id"
              onChange={ handleChange }
              required
              value={ productInfo.brand_id}
            >
              { brands?.map(item => (<MenuItem key={ item.id } value={ item.id }>
                { item.name }
              </MenuItem>)) }
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              label="Product Name" name="name" id="name" variant="outlined" value={ productInfo.name }
              required onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" variant="contained" size="large">ADD NEW PRODUCT </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalProduct

