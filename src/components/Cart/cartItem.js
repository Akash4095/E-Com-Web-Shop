import React from 'react'
import { Typography, Button, CardActions, Card, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './cartItemStyles'

const CartItem = ({ item }) => {
    const classes = useStyles()
    console.log(item,'-item')
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent>
                <Typography variant='h4' >{item.name}</Typography>
                <Typography variant='h5' >{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' >+</Button>
                </div>
                <Button type='button' variant='contained' color='secondary' >Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem