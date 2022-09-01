import Layout from "../../components/layout/auth-layout";
import {Box, Button, Card, CardContent, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {CART_ACTION_CREATORS, selectCart} from "../../redux/features/cart/cart-slice";
import {Link} from "react-router-dom";
import React from "react";
import CartItem from "../../components/shared/cart-item";
import {useFormik} from "formik";
import * as yup from "yup";
import currencyFormatter from "currency-formatter";

const CartPage = () => {

    const {items} = useSelector(selectCart);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            code: ''
        },
        validateOnChange: true,
        onSubmit: (values, {resetForm}) => {
            console.log(values, resetForm);
        },
        validationSchema: yup.object().shape({
            code: yup.string().required('Promo code required'),
        })
    });

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={8}>
                            <Grid
                                container={true}
                                justifyContent="space-between"
                                spacing={2}>
                                <Grid item={true} xs={12} md="auto">
                                    <Typography variant="h4" sx={{color: 'text.primary'}}>
                                        Shopping Bag
                                    </Typography>
                                </Grid>
                                {items.length > 0 && (
                                    <Grid item={true} xs={12} md="auto">
                                        <Button
                                            onClick={() => dispatch(CART_ACTION_CREATORS.clearItems())}
                                            color="error"
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0,
                                            }}
                                            variant="outlined"
                                            disableElevation={true}>
                                            Clear Cart
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>

                            <Divider variant="fullWidth" sx={{my: 2}}/>

                            {items.length === 0 ? (
                                <Box sx={{
                                    backgroundColor: 'background.paper',
                                    padding: 5,
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 0,
                                }}>
                                    <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 2}}>
                                        Empty Shopping Bag
                                    </Typography>
                                    <Grid container={true} justifyContent="center">
                                        <Grid item={true} xs={12} md="auto">
                                            <Link to="/products" style={{textDecoration: 'none'}}>
                                                <Button
                                                    color="secondary"
                                                    fullWidth={true}
                                                    sx={{
                                                        textTransform: 'capitalize',
                                                        borderBottomRightRadius: 0,
                                                        borderTopRightRadius: 12,
                                                        borderBottomLeftRadius: 12,
                                                        borderTopLeftRadius: 0,
                                                    }}
                                                    variant="outlined"
                                                    disableElevation={true}>
                                                    Go Shopping
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ) : (
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    divider={<Divider variant="fullWidth" light={true}/>}>
                                    {
                                        items.map((item, index) => {
                                            return (
                                                <Box key={index}>
                                                    <CartItem cartItem={item}/>
                                                </Box>
                                            )
                                        })
                                    }
                                </Stack>
                            )}
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Typography variant="h4" sx={{color: 'text.primary'}}>
                                Summary
                            </Typography>
                            <Divider variant="fullWidth" sx={{my: 2}}/>

                            <Card
                                elevation={0}
                                sx={{
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 16,
                                    borderBottomLeftRadius: 16,
                                    borderTopLeftRadius: 0,
                                }}>
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        sx={{mb: 1, color: 'text.secondary', fontWeight: 'bold'}}>
                                        Have a Promo Code?
                                    </Typography>
                                    <Grid sx={{mb: 2}} container={true} spacing={1} alignItems="center">
                                        <Grid item={true} xs={9}>
                                            <TextField
                                                fullWidth={true}
                                                placeholder="First Name"
                                                required={true}
                                                label="Promo code"
                                                variant="outlined"
                                                helperText={formik.touched.code && formik.errors.code}
                                                name="code"
                                                error={Boolean(formik.touched.code && formik.touched.code)}
                                                size="small"
                                                color="secondary"
                                                sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                value={formik.values.code}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={3}>
                                            <Button
                                                fullWidth={true}
                                                onClick={formik.handleSubmit}
                                                type="submit"
                                                color="secondary"
                                                disableElevation={true}
                                                variant="outlined"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: 16,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 0,
                                                    borderWidth: 2
                                                }}
                                                size="large">
                                                Apply
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Divider sx={{my: 3}} variant="fullWidth" light={true}/>
                                    <Stack direction="column" spacing={2}>
                                        <Stack sx={{width: '100%'}} direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                Subtotal
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                {currencyFormatter.format(CART_ACTION_CREATORS.calculateTotalPrice(items), {code: 'USD'})}
                                            </Typography>
                                        </Stack>

                                        <Stack sx={{width: '100%'}} direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                Estimated Shipping
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                {currencyFormatter.format(50, {code: 'USD'})}
                                            </Typography>
                                        </Stack>

                                        <Stack sx={{width: '100%'}} direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                Estimated Tax
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                {currencyFormatter.format(50, {code: 'USD'})}
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                    <Divider sx={{my: 3}} variant="fullWidth" light={true}/>

                                    <Stack sx={{width: '100%'}} direction="row" alignItems="center"
                                           justifyContent="space-between">
                                        <Typography variant="body1" sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                            Total
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                            {currencyFormatter.format(50, {code: 'USD'})}
                                        </Typography>
                                    </Stack>

                                    <Divider sx={{my: 3}} variant="fullWidth" light={true}/>

                                    <Stack direction="column" spacing={2}>
                                        <Link to="/checkout" style={{textDecoration: 'none'}}>
                                            <Button
                                                color="secondary"
                                                fullWidth={true}
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: 12,
                                                    borderBottomLeftRadius: 12,
                                                    borderTopLeftRadius: 0,
                                                }}
                                                variant="contained"
                                                disableElevation={true}>
                                                Checkout Now
                                            </Button>
                                        </Link>
                                        <Link to="/medallions" style={{textDecoration: 'none'}}>
                                            <Button
                                                color="secondary"
                                                fullWidth={true}
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: 12,
                                                    borderBottomLeftRadius: 12,
                                                    borderTopLeftRadius: 0,
                                                }}
                                                variant="outlined"
                                                disableElevation={true}>
                                                Continue Shopping
                                            </Button>
                                        </Link>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default CartPage;
