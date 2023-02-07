import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './productStyles'

const Product = ({ product, onAddToCart }) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>   {/*typegraphy for showing text */}
                        {product.name}
                    </Typography>
                    <Typography variant='h6' >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography variant='body2' dangerouslySetInnerHTML={{ __html: product.description }} color='textSecondary' >

                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions} >
                <IconButton aria-label='Add To Cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart></AddShoppingCart>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product