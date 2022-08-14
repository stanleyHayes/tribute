import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import loginLogo from "./../../assets/images/account-success.png";
import "yup-phone";
import {Link} from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {THE_BOOK_STORE_DATA} from "../../utils/data";
import BannerSliderItem from "../../components/shared/banner-slider-item";

const VerificationAcknowledgmentPage = () => {


    return (
        <Box
            sx={{
                maxWidth: '100vw',
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                overflow: 'hidden'
            }}>
            <Box sx={{display: {xs: 'none', lg: 'block'}, flex: 1, maxHeight: '100vh'}}>
                <Stack justifyContent="center" alignItems="center" sx={{height: '100%'}}>
                    <img
                        style={{
                            maxHeight: '100vh',
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        alt=""
                        src={loginLogo}
                    />
                </Stack>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    overflowY: {xs: 'scroll', lg: 'hidden'},
                    backgroundColor: 'background.paper',
                    paddingY: {xs: 4, lg: 2}
                }}>
                <Container sx={{mb: 4}} maxWidth="sm">
                    <Typography mb={3} variant="h6" sx={{color: 'text.secondary'}}>
                        Welcome to
                    </Typography>
                    <Typography mb={3} variant="h4" sx={{color: 'secondary.main'}}>
                        Tribute
                    </Typography>
                    <Typography mb={4} variant="body1" sx={{color: 'text.secondary', fontWeight: 400}}>
                        Tribute is a platform where you can share with the world the stories and memories of your
                        ancestors as well as your own stories and memories. Our Turning Hearts Medallion gives access to
                        anyone who scans it the ability to learn and interact with those who have gone on.
                    </Typography>
                    <Box>
                        <Grid container={true} spacing={2} alignItems="center">
                            <Grid item={true} xs={12}>
                                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="secondary"
                                        fullWidth={true}
                                        sx={{
                                            textTransform: 'capitalize',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                        }}
                                        variant="contained"
                                        disableElevation={true}>
                                        Sign In
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Container maxWidth="sm">
                    <Carousel
                        autoPlay={true}
                        stopAutoPlayOnHover={true}
                        duration={3000}
                        indicators={false}
                        cycleNavigation={true}>
                        {THE_BOOK_STORE_DATA.FEATURES.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <BannerSliderItem item={item}/>
                                </Box>
                            )
                        })}
                    </Carousel>
                </Container>
            </Box>
        </Box>
    )
}

export default VerificationAcknowledgmentPage;
