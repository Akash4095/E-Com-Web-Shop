import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './cartStyles'
import CartItem from './cartItem'


const Cart = ({ cart }) => {

    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant='subtitle1' >You Have no Items in your Shoping cart, start adding some!</Typography>
    )

    const FilledCart = () => (
        <div>
            <Grid container spacing={2}>
                {
                    cart.line_items.map((item) =>
                    (
                        <Grid item xs={8} sm={3} key={item.id}>
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

    if (!cart.line_items) return 'Loading...';
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shoping Cart</Typography>
            {
                !cart.line_items.length ? <EmptyCart /> : <FilledCart />

            }

        </Container>
    )
}

export default Cart