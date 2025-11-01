
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Testimonio({id, nombre, pais, trabajo, empresa, testimonio, imagen}) {
    const [like, setLiked] = useState(false);

    return (
        <Card sx={{maxWidth: 1000, margin: '20px auto', mb:3}}>
            <CardActionArea>
                <CardMedia component="img" image={imagen} alt={`Imagen de ${nombre}`} sx={{
                    width: 500,
                    height: 500,
                    mx: 'auto'
                }} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{nombre} de {pais}</Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>{trabajo} en {empresa}</Typography>
                    <Typography variant="body1" sx={{marginTop: 2}}>"{testimonio}"</Typography>
                    <IconButton onClick={() => setLiked(!like)}>
                        {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </CardContent>
            </CardActionArea>
        </Card>
    
    )
}
export default Testimonio