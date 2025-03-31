import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


interface CardProps {
    image: string,
    title: string,
    description: string,
    color: string
}

const Card = ({image, title, description, color}: CardProps) => {
    
    
  return (
    <Box sx={{
        height: '32rem',
        width: '18.75rem',
        backgroundColor:color ,
        padding: '3rem',
        
    }}>
        <Image 
            src={image}
            alt={title}
            height={40}
            width={64}
        />
        <Typography sx={{
            color: '#ffffff',
            textTransform: 'uppercase',
            fontSize: '2.5rem',
            fontWeight: 600,
            margin:"2rem 0"
        }}>
            {title}
        </Typography>
        <Typography sx={{
            color: 'hsla(0, 0.00%, 100.00%, 0.52)',
            fontSize: '1.125rem',
            lineHeight: '2rem',
            fontWeight: 400,
            paddingRight: '1rem',
            marginBottom: '5rem',
        }}>
            {description}
        </Typography>

        <Button sx={{
            backgroundColor: 'white', 
            color: color, 
            padding: '0.75rem 2rem', 
            borderRadius: '25px',
            border: '3px solid white',
            '&:hover': {
                backgroundColor: color,
                color: 'white',
            }
        }}>
            Learn More
        </Button>
    </Box>
  )
}

export default Card