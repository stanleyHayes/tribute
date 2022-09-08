import {Button, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";
import {useDispatch} from "react-redux";
import {WISHLIST_ACTION_CREATORS} from "../../redux/features/wishlist/wishlist-slice";
import {FavoriteOutlined} from "@mui/icons-material";

const OrderItem = ({order}) => {
    const dispatch = useDispatch();

    return (
        <Card
            sx={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderTopLeftRadius: 0,
            }} elevation={0}>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12} md={3}>
                    <CardMedia
                        component="img"
                        src={order?.item?.image}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderBottomRightRadius: 0,
                            borderTopRightRadius: 12,
                            borderBottomLeftRadius: 12,
                            borderTopLeftRadius: 0,
                        }}
                    />
                </Grid>
                <Grid item={true} xs={12} md={9}>
                    <CardContent>
                        <Stack sx={{mb: 1}} direction="column" spacing={1}>
                            <Typography variant="h6" sx={{color: 'text.primary'}}>
                                {order.item.name}
                            </Typography>
                            <Stack direction="row" spacing={1} justifyContent="space-between">
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    ({order.quantity}) x
                                    {
                                        currencyFormatter.format(
                                            order?.item?.price?.amount,
                                            {code: order?.item?.price?.currency})
                                    }
                                </Typography>
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    {
                                        currencyFormatter.format(
                                             order?.item?.price?.amount * order?.quantity,
                                            {code: order?.item?.price?.currency})
                                    }
                                </Typography>
                            </Stack>
                        </Stack>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={6} md="auto">
                                <Button
                                    fullWidth={true}
                                    onClick={() => dispatch(WISHLIST_ACTION_CREATORS.toggleItem({...order?.item}))}
                                    color="secondary"
                                    disableElevation={true}
                                    variant="text"
                                    startIcon={<FavoriteOutlined/>}
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 0,
                                    }}
                                    size="small">
                                    Save for later
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default OrderItem;
