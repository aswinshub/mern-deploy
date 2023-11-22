

import { Card, CardContent, Grid, Typography } from '@mui/material';
import axiosInstance from './axiosinterceptor'
import { useEffect, useState } from 'react';

const Home = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("mern-deploy-api-silk.vercel.app/emp/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);




  return (
    
    <div style={{margin:"7%"}}>

<Grid container spacing={2}>
            {data.map((val,i)=>(
            <Grid item key={i} xs={12} sm={6} md={4}>
       <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">{val.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">{val.location}
        </Typography>
      </CardContent>

    </Card>
    </Grid>
    ))}
    </Grid>

  
</div>
  )
}

export default Home
