import React from 'react'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const Profit = () => {

  const totalProfit = useSelector(state => state.stock.totalProfit);
  console.log(totalProfit);


  return (
    <>
      <Typography> Total Profit</Typography>
      { totalProfit?.profitTotal > 0 ? (

        <Typography component="p" variant="h6" sx={ { color: "green" } }>
          ${totalProfit && JSON.stringify(totalProfit?.profitTotal) }
        </Typography>
      ) : (
        <Typography component="p" variant="h6" sx={ { color: "red" } }>
          ${ totalProfit && JSON.stringify(totalProfit?.profitTotal) }
        </Typography>
      ) }

      <Typography sx={ { color: "#1C2331" } }>Total Sale</Typography> 
      <Typography component="p" variant="h6">
        ${ totalProfit && JSON.stringify(totalProfit?.profitSale) }
      </Typography>

      <Typography sx={ { color: "#1C2331" } }>Total Purchase</Typography> 
      <Typography component="p" variant="h6">
        ${ totalProfit && JSON.stringify(totalProfit?.profitPurchase) }
      </Typography>
    </>
  )
}

export default Profit