import AuthLayout from "../../components/layout/auth-layout";
import {Alert, AlertTitle, Box, Container, Grid, LinearProgress, Typography} from "@mui/material";
import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MEDALLION_ACTION_CREATORS, selectMedallions} from "../../redux/features/medallion/medallion-slice";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailPage = () => {
    const {productID} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(MEDALLION_ACTION_CREATORS.getMedallion({id: productID}))
    }, [productID]);

    const {medallion, loading, error} = useSelector(selectMedallions);

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
                            <Carousel>
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
                                                    objectPosition: 'center'
                                                }}/>
                                        </Box>
                                    )
                                })}
                            </Carousel>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="h6" sx={{color: 'text.primary'}}>
                                {medallion?.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default ProductDetailPage;
