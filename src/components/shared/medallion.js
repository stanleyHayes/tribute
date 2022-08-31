import {Box, Button, Card, CardContent, CardMedia, Chip, Rating, Stack, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";
import {toggleTheme} from "../../redux/features/ui/ui-slice";
import {AddShoppingCartOutlined, FavoriteOutlined} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {CART_ACTION_CREATORS} from "../../redux/features/cart/cart-slice";
import {Link} from "react-router-dom";

const Medallion = ({medallion}) => {

    const dispatch = useDispatch();

    return (
        <Card
            elevation={0}
            variant="elevation"
            sx={{
                backgroundColor: 'background.paper',
                borderBottomRightRadius: 2,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 2,
            }}>
            <CardContent>
                <Box sx={{position: 'relative', height: 200, mb: 2}}>
                    <CardMedia
                        src={medallion.image}
                        sx={{
                            borderBottomRightRadius: 2,
                            borderTopRightRadius: 32,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 2,
                            objectPosition: 'center',
                            objectFit: 'cover',
                            height: 200,
                            width: '100%',
                            mb: 2,
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }}
                        component="img"
                    />
                    {medallion.sale.status && (
                        <Chip
                            sx={{
                                backgroundColor: 'secondary.main',
                                position: 'absolute', top: 0, right: 0,
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 12,
                                borderBottomLeftRadius: 12,
                                borderTopLeftRadius: 4,
                            }}
                            variant="outlined"
                            size="small"
                            label={
                                <Typography
                                    variant="body2"
                                    sx={{color: 'white'}}>
                                    Sale
                                </Typography>
                            }
                        />
                    )}
                </Box>
                <Stack direction="column" spacing={1}>
                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                        {medallion.name}
                    </Typography>
                    <Box>
                        <Rating
                            readOnly={true}
                            size="small"
                            precision={0.1}
                            value={medallion.rating.average}
                            color="secondary"
                        />
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textDecoration: medallion.sale.status ? 'line-through' : 'none'
                            }}>
                            {currencyFormatter.format(medallion.price.amount, {code: medallion.price.currency})}
                        </Typography>
                        {medallion.sale.status && (
                            <Typography
                                variant="body2"
                                sx={{color: 'text.secondary'}}>
                                {currencyFormatter.format(medallion.sale.price.amount, {code: medallion.sale.price.currency})}
                            </Typography>
                        )}
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Link to={`/medallions/${medallion._id}`} style={{textDecoration: 'none'}}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="small"
                                disableElevation={true}
                                sx={{
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 4,
                                    textTransform: 'capitalize',
                                    backgroundColor: 'light.secondary'
                                }}>
                                Details
                            </Button>
                        </Link>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <FavoriteOutlined
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 24,
                                    color: 'secondary.main',
                                    cursor: 'pointer'
                                }}
                                onClick={() => dispatch(toggleTheme())}
                            />

                            <AddShoppingCartOutlined
                                color="secondary"
                                sx={{
                                    backgroundColor: 'light.secondary',
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 8,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 4,
                                    padding: 0.4,
                                    fontSize: 24,
                                    color: 'secondary.main',
                                    cursor: 'pointer'
                                }}
                                onClick={() => dispatch(CART_ACTION_CREATORS.addItem({item: medallion}))}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Medallion;
