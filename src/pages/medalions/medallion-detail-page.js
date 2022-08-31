import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AlertTitle,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    LinearProgress,
    Rating,
    Stack,
    Typography
} from "@mui/material";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMedallions} from "../../redux/features/medallion/medallion-slice";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import currencyFormatter from "currency-formatter";
import AuthLayout from "../../components/layout/auth-layout";
import {Add} from "@mui/icons-material";
import RatingSummary from "../../components/shared/rating-summary";
import {green, red} from "@mui/material/colors";
import {CART_ACTION_CREATORS} from "../../redux/features/cart/cart-slice";

const MedallionDetailPage = () => {
    const {productID} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(MEDALLION_ACTION_CREATORS.getMedallion({id: productID}))
    }, [productID]);

    const {medallion, loading, error} = useSelector(selectMedallions);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityIncrease = () => {
        if (medallion) {
            if (quantity < medallion.stock) {
                setQuantity(quantity => quantity + 1);
            }
        }
    }
    const handleQuantityDecrease = () => {
        if (medallion) {
            if (quantity > 1) {
                setQuantity(quantity => quantity - 1);
            }
        }
    }
    const handleAddToCart = () => {
        dispatch(CART_ACTION_CREATORS.addItem({item: medallion, quantity}))
    }

    return (
        <AuthLayout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    {error && (
                        <Alert severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <Carousel
                                dynamicHeight={true}
                                interval={3000}
                                showStatus={false}
                                animationHandler="slide"
                                autoPlay={true}
                                stopOnHover={true}
                                swipeable={true}
                                infiniteLoop={true}>
                                {medallion && medallion.gallery && medallion.gallery.map((gallery, index) => {
                                    return (
                                        <Box key={index}>
                                            <img
                                                alt={`${medallion && medallion.name}`}
                                                src={gallery}
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                    borderBottomRightRadius: 4,
                                                    borderTopRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 4,
                                                }}/>
                                        </Box>
                                    )
                                })}
                            </Carousel>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    {medallion?.name}
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <ButtonGroup sx={{flex: 1}}>
                                        <Button
                                            fullWidth={true}
                                            sx={{
                                                color: red[600],
                                                backgroundColor: red[100],
                                                borderWidth: 2,
                                                borderColor: red[600],
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0,
                                            }}
                                            onClick={handleQuantityDecrease}
                                            variant="outlined"
                                            size="small">-</Button>
                                        <Button
                                            fullWidth={true}
                                            disableElevation={true}
                                            sx={{textTransform: 'capitalize', borderRadius: 0,
                                                borderWidth: 2,
                                                borderColor: 'secondary.main',}}
                                            variant="contained"
                                            color="secondary"
                                            size="small">{quantity}</Button>
                                        <Button
                                            fullWidth={true}
                                            sx={{
                                                color: green[600],
                                                borderWidth: 2,
                                                borderColor: green[600],
                                                backgroundColor: green[50],
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0,
                                            }}
                                            onClick={handleQuantityIncrease}
                                            variant="outlined"
                                            size="small">+</Button>
                                    </ButtonGroup>
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            flex: 1,
                                            borderBottomRightRadius: 4,
                                            borderTopRightRadius: 12,
                                            borderBottomLeftRadius: 12,
                                            borderTopLeftRadius: 4,
                                        }}
                                        onClick={handleAddToCart}
                                        color="secondary"
                                        disableElevation={true}
                                        variant="contained"
                                        size="small">Add to Cart</Button>
                                </Stack>
                                <Box>
                                    <Rating
                                        readOnly={true}
                                        size="small"
                                        precision={0.1}
                                        value={medallion?.rating?.average}
                                        color="secondary"
                                    />
                                </Box>
                                <Stack direction="row" spacing={2}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.secondary',
                                            textDecoration: medallion?.sale?.status ? 'line-through' : 'none'
                                        }}>
                                        {currencyFormatter.format(medallion?.price?.amount, {code: medallion?.price?.currency})}
                                    </Typography>
                                    {medallion?.sale?.status && (
                                        <Typography
                                            variant="body1"
                                            sx={{color: 'text.secondary'}}>
                                            {currencyFormatter.format(medallion?.sale?.price?.amount, {code: medallion?.sale?.price?.currency})}
                                        </Typography>
                                    )}
                                    {medallion?.sale?.status && (
                                        <Chip
                                            sx={{
                                                backgroundColor: 'light.secondary',
                                                borderBottomRightRadius: 4,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 4,
                                                color: 'secondary.main'
                                            }}
                                            variant="outlined"
                                            size="small"
                                            label="Sale"
                                        />
                                    )}
                                </Stack>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    {medallion?.description}
                                </Typography>

                                <Accordion
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                    }} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <Add
                                                sx={{
                                                    backgroundColor: 'light.secondary',
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: 12,
                                                    borderBottomLeftRadius: 12,
                                                    borderTopLeftRadius: 0,
                                                    padding: 0.4,
                                                    fontSize: 24,
                                                    cursor: 'pointer',
                                                    color: 'secondary.main'
                                                }}/>}>
                                        Medallion Details
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack direction="column" spacing={1}>
                                            {medallion?.details?.map((detail, index) => {
                                                return (
                                                    <Typography
                                                        key={index}
                                                        variant="body2"
                                                        sx={{color: 'text.secondary'}}>
                                                        &middot;{` ${detail}`}
                                                    </Typography>
                                                )
                                            })}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                    }}
                                    elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <Add
                                                sx={{
                                                    backgroundColor: 'light.secondary',
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: 12,
                                                    borderBottomLeftRadius: 12,
                                                    borderTopLeftRadius: 0,
                                                    padding: 0.4,
                                                    fontSize: 24,
                                                    cursor: 'pointer',
                                                    color: 'secondary.main'
                                                }}/>}>
                                        Installation Instructions
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack direction="column" spacing={1}>
                                            {medallion?.instructions?.map((instruction, index) => {
                                                return (
                                                    <Typography key={index} variant="body2"
                                                                sx={{color: 'text.secondary'}}>
                                                        {`${index + 1} ${instruction}`}
                                                    </Typography>
                                                )
                                            })}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        borderTopLeftRadius: 4,
                                    }}
                                    elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <Add
                                                sx={{
                                                    backgroundColor: 'light.secondary',
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: 12,
                                                    borderBottomLeftRadius: 12,
                                                    borderTopLeftRadius: 0,
                                                    padding: 0.4,
                                                    fontSize: 24,
                                                    cursor: 'pointer',
                                                    color: 'secondary.main'
                                                }}/>}>
                                        Our Cause
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack direction="column" spacing={1}>
                                            {medallion?.causes?.map((cause, index) => {
                                                return (
                                                    <Typography key={index} variant="body2"
                                                                sx={{color: 'text.secondary'}}>
                                                        {`${index + 1} ${cause}`}
                                                    </Typography>
                                                )
                                            })}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>

                                <Box>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                        }}>
                                        <CardContent>
                                            <RatingSummary rating={medallion?.rating}/>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default MedallionDetailPage;
