import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Link, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/about-medallion.jpg";
import {ArrowRightAlt} from "@mui/icons-material";
import {TRIBUTE_DATA} from "../../utils/data";
import FAQ from "../../components/shared/faq";

const MedallionPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        About Our Medallion
                                    </Typography>
                                    <Typography align="center" variant="h6" sx={{color: 'white'}}>
                                        What is a Tributes Medallion?
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Typography align="center" variant="h5" sx={{color: 'text.primary'}}>
                            What is the purpose of Tribute Medallions?
                        </Typography>
                    </Container>
                </Box>

                <Box sx={{py: 8}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 4,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        Scan QR Code from Medallion
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        Once you have made an account with Tribute and purchased a medallion, the
                                        QR Code on the medallion will be connected to your account. When someone scans
                                        the QR Code from the medallion, they will be directed to profile which is
                                        connected to QR Code.
                                    </Typography>
                                    <Link to={'/medallion/features'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 4,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 4
                                            }}>
                                            Medallion Features
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        View & Share Beautiful Stories
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        At Tribute you are able to share stories and personalize your profile
                                        with pictures, videos, biography information, and so much more. We respect
                                        everyone’s privacy. Personal and ancestor data will always be safe with our
                                        privacy filters.
                                    </Typography>
                                    <Link to={'/stories'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 4,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 4
                                            }}>
                                            View Stories
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 4,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 4,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        No Advertisements or Distractions
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        At Tribute you will never see any advertisement. We simply believe that
                                        every life is of infinite importance and that every life should be remembered.
                                        No need for any distractions. We are turning the purpose of social media
                                        platform to remembrance and reverence.
                                    </Typography>
                                    <Link to={'/auth/register'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 4,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 4
                                            }}>
                                            Register for free
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={4}>
                                <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                    Frequently Asked Questions About Medallions
                                </Typography>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 4,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 4,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Stack direction="column" spacing={2}>
                                    {TRIBUTE_DATA.FAQ.map((faq, index) => {
                                        return (
                                            <Box item={true} key={index}>
                                                <FAQ faq={faq}/>
                                            </Box>
                                        )
                                    })}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>

        </Layout>
    )
}

export default MedallionPage;
