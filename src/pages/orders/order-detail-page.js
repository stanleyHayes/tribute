import AuthLayout from "../../components/layout/auth-layout";
import {Box, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import React from "react";
import currencyFormatter from "currency-formatter";
import OrderItem from "../../components/shared/order-item";
import {ORDER_ACTION_CREATORS, selectOrder} from "../../redux/features/orders/order-slice";

const OrderDetailPage = () => {

    const {order} = useSelector(selectOrder);

    return (
        <AuthLayout>
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
                                        Order
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Divider variant="fullWidth" sx={{my: 2}}/>

                            <Stack
                                direction="column"
                                spacing={2}
                                divider={<Divider variant="fullWidth" light={true}/>}>
                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                    Products
                                </Typography>
                                {
                                    order?.items.map((item, index) => {
                                        return (
                                            <Box key={index}>
                                                <OrderItem order={item}/>
                                            </Box>
                                        )
                                    })
                                }
                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                    Address
                                </Typography>

                                <Card
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} elevation={0}>
                                    <CardContent>
                                        <Grid sx={{mb: 2}} container={true} spacing={2} alignItems="center"
                                              justifyContent="space-between">
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                    Country
                                                </Typography>
                                            </Grid>
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography
                                                    variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    {order?.address?.country}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid sx={{mb: 2}} container={true} spacing={2} alignItems="center"
                                              justifyContent="space-between">
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                    State or Region or Province
                                                </Typography>
                                            </Grid>
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography
                                                    variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    {order?.address?.stateOrProvinceOrRegion}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid sx={{mb: 2}} container={true} spacing={2} alignItems="center"
                                              justifyContent="space-between">
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                    City
                                                </Typography>
                                            </Grid>
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography
                                                    variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    {order?.address?.city}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid sx={{mb: 2}} container={true} spacing={2} alignItems="center"
                                              justifyContent="space-between">
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                    Zipcode
                                                </Typography>
                                            </Grid>
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography
                                                    variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    {order?.address?.zipCode}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid sx={{mb: 2}} container={true} spacing={2} alignItems="center"
                                              justifyContent="space-between">
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                    Address Line 1
                                                </Typography>
                                            </Grid>
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography
                                                    variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    {order?.address?.addressLine1}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        {order?.address?.addressLine2 && (
                                            <Grid container={true} spacing={2} alignItems="center"
                                                  justifyContent="space-between">
                                                <Grid item={true} xs={12} md="auto">
                                                    <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                        Address Line 2
                                                    </Typography>
                                                </Grid>
                                                <Grid item={true} xs={12} md="auto">
                                                    <Typography
                                                        variant="body1"
                                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                        {order?.address?.addressLine2}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </CardContent>
                                </Card>

                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                    Others
                                </Typography>

                                <Card
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} elevation={0}>
                                    <CardContent>
                                        <Grid container={true} spacing={2} alignItems="center"
                                              justifyContent="space-between">
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                    Tracking
                                                </Typography>
                                            </Grid>
                                            <Grid item={true} xs={12} md="auto">
                                                <Typography
                                                    variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    {order?.tracking}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Typography variant="h4" sx={{color: 'text.primary'}}>
                                Summary
                            </Typography>

                            <Divider variant="fullWidth" sx={{my: 2}}/>

                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                Costs
                            </Typography>

                            <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                            <Card
                                elevation={0}
                                sx={{
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 16,
                                    borderBottomLeftRadius: 16,
                                    borderTopLeftRadius: 0,
                                }}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Stack sx={{width: '100%'}} direction="row" alignItems="center"
                                               justifyContent="space-between">
                                            <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                                Subtotal
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                {currencyFormatter.format(ORDER_ACTION_CREATORS.calculateOrderPrice(order?.items), {code: 'USD'})}
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
                                                {currencyFormatter.format(order?.shipping?.amount, {code: order?.shipping?.currency})}
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
                                                {currencyFormatter.format(order?.tax?.amount, {code: order?.tax?.currency})}
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
                                            {currencyFormatter.format(order?.price?.amount, {code: order?.price?.currency})}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default OrderDetailPage;
