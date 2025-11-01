import React, { useState } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Testimonio({id, nombre, pais, trabajo, empresa, testimonio, imagen}) {
    const [like, setLiked] = useState(false);

    return (
        <Card sx={{maxWidth: 600}}>
            <CardActionArea>
                <CardMedia component="img" height="200" image={imagen} alt={`Imagen de ${nombre}`} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{nombre} de {pais}</Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>{trabajo} en {empresa}</Typography>
                    <Typography variant="body1" sx={{marginTop: 2}}>"{testimonio}"</Typography>
                    <IconButton onClick={() => setLiked(!liked)}>
                        {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </CardContent>
            </CardActionArea>
        </Card>
    
    )
}
export default Testimonio