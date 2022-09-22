import React ,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PlaceRounded } from '@mui/icons-material';
import { Slider } from '@mui/material';


export default function Slide(props) {
const {title ,body ,state ,setState ,stateChange}=props //need to add another prop
  return (
    <Card sx={{ maxWidth: 275 }}>
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
      <Slider defaultValue={20} step={10} min={0} max={100} onChange={(getAriaValueText)=>setState(stateChange(getAriaValueText))}/>
      </CardActions>
    </Card>
  );
}
