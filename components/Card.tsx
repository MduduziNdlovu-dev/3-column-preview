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
        backgroundColor:color 
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
        }}>
            {title}
        </Typography>
        <Typography sx={{
            color: '#ffffff',
        }}>
            {description}
        </Typography>

        <Button sx={{
            backgroundColor: color, 
            color: '#ffffff', 
            padding: '0.75rem 2rem', 
            borderRadius: '25px',
            '&:hover': {
                backgroundColor: color,
                opacity: 0.8
            }
        }}>
            Learn More
        </Button>
    </Box>
  )
}

export default Card