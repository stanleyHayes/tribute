import AuthLayout from "../../components/layout/auth-layout";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {useSelector} from "react-redux";
import React from "react";
import {selectOrder} from "../../redux/features/orders/order-slice";
import currencyFormatter from "currency-formatter";
import {Visibility} from "@mui/icons-material";
import moment from "moment";
import {Link} from "react-router-dom";

const OrdersPage = () => {

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

    const {orders} = useSelector(selectOrder);

    return (
        <AuthLayout>
            <Box sx={{pt: 4}}>
                <Container>
                    <Grid container={true} spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'text.primary'}}>
                                Orders
                            </Typography>
                        </Grid>
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
                    {orders && orders.length === 0 ? (
                        <Box>
                            <TableContainer
                                sx={{
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 16,
                                    borderBottomLeftRadius: 16,
                                    borderTopLeftRadius: 0,
                                }}>
                                <Table
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} size="medium" elevation={0} component={Paper}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Item</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Box
                                sx={{
                                    minHeight: '30vh',
                                    borderRadius: 0.5,
                                    backgroundColor: 'background.paper',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 16,
                                    borderBottomLeftRadius: 16,
                                    borderTopLeftRadius: 0,
                                }}>
                                <Typography
                                    variant="body1"
                                    align="center" sx={{textTransform: 'uppercase', color: 'text.primary'}}>
                                    No orders available
                                </Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Box>
                            <TableContainer>
                                <Table
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} size="medium" component={Paper}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Order#</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders && orders.map((order, index) => {
                                            return (
                                                <TableRow key={order._id}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{order._id}</TableCell>
                                                    <TableCell>{order.status}</TableCell>
                                                    <TableCell>{currencyFormatter.format(
                                                        order?.price?.amount, {code: order?.price?.currency})}
                                                    </TableCell>
                                                    <TableCell>{moment(order?.createdAt).fromNow()}</TableCell>
                                                    <TableCell>
                                                        <Tooltip title={`View details of order ${order?._id}`}>
                                                            <Link
                                                                to={`/orders/${order._id}`}
                                                                style={{textDecoration: 'none'}}>
                                                                <Visibility
                                                                    sx={{
                                                                        backgroundColor: 'light.secondary',
                                                                        borderBottomRightRadius: 0,
                                                                        borderTopRightRadius: 12,
                                                                        borderBottomLeftRadius: 12,
                                                                        borderTopLeftRadius: 0,
                                                                        padding: 0.4,
                                                                        fontSize: 32,
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main'
                                                                    }}
                                                                />
                                                            </Link>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default OrdersPage;
