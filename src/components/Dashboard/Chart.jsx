import React from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip} from 'recharts'
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Chart = () => {
  const transaction = useSelector(state => state.stock.transaction);
  const data = transaction.map(item => ({time: item.time_hour, price_total: parseInt(item.price_total)}))
  const theme = useTheme();
  return (
    <>
      <Typography sx={ { color: "white", letterSpacing: "3px" } }>Today</Typography>
      <ResponsiveContainer>
        <LineChart data={ data} margin={ {top:16, right:16, bottom:0, left:24} }>
          <XAxis dataKey="time" stroke={ theme.palette.text.secondary } style={ theme.typography.body2} />
          <YAxis dataKey="price_total" stroke={ theme.palette.text.secondary } style={ theme.typography.body2 } >
            <Label angle={ 270 } position="left" style={ 
              {
                textAnchor: 'middle', 
                fill: theme.palette.text.secondary,
              }
            }> Sale ($)</Label>
          </YAxis>
          <Line isAnimationActive={ false } type="monotone" datakey="price_total" stroke={ theme.palette.text.secondary } dot={ true}/>
          <Tooltip/>

      </LineChart>
      </ResponsiveContainer>
    </>

  )
}

export default Chart