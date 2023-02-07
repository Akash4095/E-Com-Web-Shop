import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './cartStyles'
import CartItem from './cartItem'


const FilledCart = ({ cart }) => {
    const classes = useStyles()
    return (
        <div>
            <Grid container spacing={3}>
                {
                    cart.line_items.map((item) =>
                    (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} />
                        </Grid>
                    ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4' > Subtotal: {cart.subtotal.formatted_with_symbol} </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                    <Button className={classes.checkButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default FilledCart