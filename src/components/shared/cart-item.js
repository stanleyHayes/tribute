import {Button, ButtonGroup, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";
import {CART_ACTION_CREATORS} from "../../redux/features/cart/cart-slice";
import {useDispatch} from "react-redux";
import {WISHLIST_ACTION_CREATORS} from "../../redux/features/wishlist/wishlist-slice";
import {CancelOutlined, FavoriteOutlined} from "@mui/icons-material";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const handleQuantityIncrease = () => {
        if (cartItem.quantity < cartItem.item.stock) {
            dispatch(CART_ACTION_CREATORS.increaseItem({...cartItem.item}));
        }
    }
    const handleQuantityDecrease = () => {
        dispatch(CART_ACTION_CREATORS.decreaseItem({...cartItem.item}));
    }

    const isOnSale = () => {
        return cartItem.item.sale.status;
    }
    return (
        <Card
            sx={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 8,
                borderTopLeftRadius: 4
            }} elevation={0}>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12} md={3}>
                    <CardMedia
                        component="img"
                        src={cartItem?.item?.image}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 8,
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 4
                        }}
                    />
                </Grid>
                <Grid item={true} xs={12} md={9}>
                    <CardContent>
                        <Stack sx={{mb: 1}} direction="column" spacing={1}>
                            <Typography variant="h6" sx={{color: 'text.primary'}}>
                                {cartItem.item.name}
                            </Typography>
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    ({cartItem.quantity}) x
                                    {
                                        currencyFormatter.format(
                                            isOnSale() ? cartItem?.item?.sale?.price?.amount : cartItem?.item?.price?.amount,
                                            {code: cartItem?.item?.price?.currency})
                                    }
                                </Typography>
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    {
                                        currencyFormatter.format(
                                            isOnSale() ? cartItem?.item?.sale?.price?.amount * cartItem?.quantity : cartItem?.item?.price?.amount * cartItem?.quantity,
                                            {code: cartItem?.item?.price?.currency})
                                    }
                                </Typography>
                            </Stack>
                            <ButtonGroup>
                                <Button
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 0,
                                    }}
                                    onClick={handleQuantityDecrease}
                                    variant="outlined"
                                    size="small">-</Button>
                                <Button
                                    disableElevation={true}
                                    sx={{
                                        textTransform: 'capitalize', borderRadius: 0,
                                        borderWidth: 2,
                                        borderColor: 'secondary.main',
                                    }}
                                    variant="contained"
                                    color="secondary"
                                    size="small">{cartItem.quantity}</Button>
                                <Button
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 0,
                                    }}
                                    onClick={handleQuantityIncrease}
                                    variant="outlined"
                                    size="small">+</Button>
                            </ButtonGroup>
                        </Stack>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={6} md="auto">
                                <Button
                                    fullWidth={true}
                                    onClick={() => dispatch(WISHLIST_ACTION_CREATORS.addItem({...cartItem?.item}))}
                                    color="secondary"
                                    disableElevation={true}
                                    variant="text"
                                    startIcon={<FavoriteOutlined/>}
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 4,
                                    }}
                                    size="small">
                                    Save for later
                                </Button>
                            </Grid>
                            <Grid item={true} xs={6} md="auto">
                                <Button
                                    fullWidth={true}
                                    onClick={() => dispatch(CART_ACTION_CREATORS.removeItem({...cartItem?.item}))}
                                    color="error"
                                    disableElevation={true}
                                    variant="text"
                                    startIcon={<CancelOutlined/>}
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 4,
                                    }}
                                    size="small">
                                    Remove Item
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CartItem;
