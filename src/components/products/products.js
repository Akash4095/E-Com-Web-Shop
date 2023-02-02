import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './singleProduct'
import useStyles from './productsStyles'


const product = [
    { id: 1, name: 'Shoes', description: "Running Shoes", price: '$500', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyxkPcvWIpAMPfQlEqqKGz6BQE4EKSfArpw&usqp=CAU" },
    { id: 2, name: 'Mobile', description: "Electronics", price: '$8000', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_PIrfVBGUWJ5Iv7nPqymQFydPYV1cOUHIw&usqp=CAU" },
    { id: 1, name: 'Macbook', description: "Apple Macbook", price: '$25000', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9qO1DYVGLffXt5OBv4p7HKl5gBmPcEx33A&usqp=CAU" }
]
const Products = ({products}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} ></div>
            <Grid container justifyContent='center' spacing={4}>
                {
                    products.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products