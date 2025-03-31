'use client'
import { Box, useMediaQuery } from "@mui/material";
import Card from "../../components/Card";


export default function Home() {

  const mobile = useMediaQuery('(max-width: 800px)')
  
  const data = [{
        image: "/images/icon-sedans.svg", title:"Sedans", description:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.", color:'#E28625'
    },
    {
        image: "/images/icon-suvs.svg", title:"suv", description:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.", color:'#006971'
    },
    {
        image: "/images/icon-luxury.svg", title:"luxury", description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.", color:'#004140'
    }]
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: mobile ? 'auto' : '98vh',
      flexDirection: mobile ? 'column' : 'row',
    }}>
      
      {data.map((card) => {
        return <Card image={card.image} title={card.title} description={card.description} color={card.color} key={card.title}/>

      })}
    </Box>
    
  );
}
