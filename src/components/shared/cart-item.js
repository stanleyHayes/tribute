import {Button, ButtonGroup, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";
import {CART_ACTION_CREATORS} from "../../redux/features/cart/cart-slice";
import {useDispatch} from "react-redux";
import {WISHLIST_ACTION_CREATORS} from "../../redux/features/wishlist/wishlist-slice";
import {CancelOutlined, FavoriteOutlined} from "@mui/icons-material";
import {green, red} from "@mui/material/colors";

const CartItem = ({item}) => {
    const {item: product, quantity} = item;
    const dispatch = useDispatch();

    const handleQuantityIncrease = () => {
        if (quantity < product.stock) {
            dispatch(CART_ACTION_CREATORS.increaseItem({item}));
        }
    }
    const handleQuantityDecrease = () => {
        if (quantity < product.stock) {
            dispatch(CART_ACTION_CREATORS.decreaseItem({item}));
        }
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
                <Grid item={true} xs={12} md={2}>
                    <CardMedia
                        component="img"
                        src={product.image}
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
                <Grid item={true} xs={12} md={10}>
                    <CardContent>
                        <Stack sx={{mb: 1}} direction="column" spacing={1}>
                            <Typography variant="h6" sx={{color: 'text.primary'}}>
                                {product.name}
                            </Typography>
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    ({quantity}) x
                                    {
                                        currencyFormatter.format(
                                            product?.price?.amount,
                                            {code: product?.price?.currency})
                                    }
                                </Typography>
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    {
                                        currencyFormatter.format(
                                            product?.price?.amount * quantity,
                                            {code: product?.price?.currency})
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
                                    size="small">{quantity}</Button>
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
                            <Grid item={true} xs={12} md="auto">
                                <Button
                                    fullWidth={true}
                                    onClick={() => dispatch(WISHLIST_ACTION_CREATORS.addItem({item}))}
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
                            <Grid item={true} xs={12} md="auto">
                                <Button
                                    fullWidth={true}
                                    onClick={() => dispatch(CART_ACTION_CREATORS.removeItem({item}))}
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
