import React ,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PlaceRounded, SelectAllRounded } from '@mui/icons-material';
import { Select } from '@mui/material';



export default function Selector(props) {
const {title ,body ,state ,setState ,stateChange,option}=props
console.log(state) //need to add another prop
  return (
    <Card sx={{ maxWidth: 300,height:250 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <div className='card-title-container'>
        <Typography variant="body2">
        {body}
        </Typography>
        </div>
      </CardContent>
      <CardActions>
      <Select  value="High"  onChange={(value)=>setState(stateChange(value))}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </Select>
      </CardActions>
    </Card>
  );
}
