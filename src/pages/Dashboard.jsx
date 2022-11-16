import React from 'react'
import Chart from '../components/Dashboard/Chart'
import Profit from '../components/Dashboard/Profit'
import SaleTransaction from '../components/Dashboard/SaleTransaction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getAllTransactions } from '../store/stock-actions';
import { Container, Paper, Grid, Typography } from "@mui/material"

const Dashboard = () => {

  const totalProfit = useSelector(state => state.stock.totalProfit);
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getAllTransactions())
  }, [])

  return (  
    <Container>
      <Typography component="h1" variant="h5" color="inherit" noWrap sx={ { p: 2 } }>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={ 12 } md={ 8 } lg={ 9}>
          <Paper sx={ {p:2, display: 'flex' , flexDirection:'column', height: 240} }>
            <Chart /> 
          </Paper>
        </Grid>
        <Grid item xs={ 12 } md={ 4 } lg={ 3 }>
          <Paper sx={ {
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            backgroundColor: '#348888', 
            color: 'white'
          } }>
             <Profit /> 
          </Paper>
        </Grid>

        <Grid item xs={ 12}> 
          <Paper sx={ { p: 2, display: 'flex', flexDirection: 'column' } }>
            <SaleTransaction/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard