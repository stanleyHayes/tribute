import {Box, Button, Container, Divider, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import AuthLayout from "../../components/layout/auth-layout";
import {useFormik} from "formik";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import Medallion from "../../components/shared/medallion";
import {selectWishlist, WISHLIST_ACTION_CREATORS} from "../../redux/features/wishlist/wishlist-slice";
import React from "react";

const WishlistsPage = () => {

    const formik = useFormik({
        validateOnBlur: true,
        validateOnChange: true,
        initialValues: {
            query: '',
            sort: 'default'
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values, resetForm)
        },
        validationSchema: yup.object().shape({
            query: yup.string().required('Query required'),
            sort: yup.string()
                .oneOf(['default', 'popularity', 'highest_to_lowest', 'lowest_to_highest'])
                .required('Query required')
        })
    });

    const {items} = useSelector(selectWishlist);
    const dispatch = useDispatch();

    return (
        <AuthLayout>
            <Box sx={{pt: 4}}>
                <Container>
                    <Grid container={true} spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'text.primary'}}>
                                Wishlist Bag
                            </Typography>
                        </Grid>
                        {items.length > 0 && (
                            <Grid item={true} xs={12} md="auto">
                                <Button
                                    onClick={() => dispatch(WISHLIST_ACTION_CREATORS.clearItems())}
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

                    <Divider sx={{my: 3}} light={true}/>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container={true} spacing={2} alignItems="center" justifyContent="space-between">
                            <Grid item={true} xs={12} md={6} lg={4}>
                                <Select
                                    variant="outlined"
                                    fullWidth={true}
                                    label="Sort"
                                    name="sort"
                                    value={formik.values.sort}
                                    onChange={formik.handleChange}
                                    color="secondary">
                                    <MenuItem value="default">Default Sorting</MenuItem>
                                    <MenuItem value="popularity">Sort by popularity</MenuItem>
                                    <MenuItem value="highest_to_lowest">Sort by price: highest to lowest</MenuItem>
                                    <MenuItem value="lowest_to_highest">Sort by price: lowest to highest</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={4}>
                                <Grid container={true} spacing={2} alignItems="center">
                                    <Grid item={true} xs={8}>
                                        <TextField
                                            name="query"
                                            fullWidth={true}
                                            size="medium"
                                            variant="outlined"
                                            label="Search"
                                            placeholder="Enter query"
                                            required={true}
                                            error={formik.touched.query && formik.errors.query}
                                            helperText={formik.touched.query && formik.errors.query}
                                            value={formik.values.query}
                                            color="secondary"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={4}>
                                        <Button
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderTopRightRadius: 16,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 16,
                                                borderTopLeftRadius: 0,
                                            }}
                                            onClick={formik.handleSubmit}
                                            type="submit"
                                            variant="contained"
                                            fullWidth={true}
                                            color="secondary"
                                            disableElevation={true}
                                            size="large">
                                            Search
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Box>

            <Divider variant="fullWidth" sx={{my: 3}} light={true}/>

            <Box sx={{py: 4}}>
                <Container>
                    {items && items.length === 0 ? (
                        <Box sx={{
                            minHeight: '30vh',
                            borderRadius: 0.5,
                            backgroundColor: 'background.paper',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Typography
                                variant="body1"
                                align="center" sx={{textTransform: 'uppercase', color: 'text.primary'}}>
                                No wishlist available
                            </Typography>
                        </Box>
                    ) : (
                        <Grid container={true} spacing={4}>
                            {items && items.map(medallion => {
                                return (
                                    <Grid item={true} xs={12} md={6} lg={4} key={medallion._id}>
                                        <Medallion medallion={medallion}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )}
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default WishlistsPage;
