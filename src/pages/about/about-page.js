import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/about.jpg";
import {TRIBUTE_DATA} from "../../utils/data";
import Leader from "../../components/shared/leader";

const AboutPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        About Us
                                    </Typography>
                                    <Typography align="center" variant="h6" sx={{color: 'white'}}>
                                        Billions of lives have been lived, each with a unique story to tell.
                                    </Typography>
                                    <Typography align="center" variant="body1" sx={{color: 'white'}}>
                                        Turning Hearts exists to ensure that no life is ever forgotten – Lives can be
                                        changed by
                                        hearing their stories.
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8}}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
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
                                        Who We Are?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        Founded in 2020, Turning Hearts is a company that always knew what it wanted to
                                        do. To change the way the world interacts with those that have gone on.
                                    </Typography>
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
                                        What We Do?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        We have developed a platform intended to help people create a profile and a
                                        legacy for themselves or their ancestors. This profile highlights the person and
                                        their life. It is what they want the world to know about them. It also a place
                                        where the information and media you put into the profile can change someones
                                        life 1000 years from now. We make these profiles accessible to the world by
                                        linking individual Turning Hearts Medallions with QR codes engraved on them to a
                                        person’s unique page. These medallions are intended to be placed on the persons
                                        headstone.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        This makes the persons profile accessible to the world for the remainder of
                                        time. Never to be forgotten.
                                    </Typography>
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
                                        Why We Exist?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                        We exist because billions of lives have been lived, each with an amazing story
                                        to tell. Turning hearts wants to make learning about those that have gone on a
                                        more intimate, informative, and life-changing experience.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        We want to help everyone feel more connected to those around us whether it’s in
                                        our local communities or our global family.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Box>
                            <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                Tributes Leadership
                            </Typography>
                            <Grid container={true} spacing={2}>
                                {TRIBUTE_DATA.LEADERSHIP.map((leader, index) => {
                                    return (
                                        <Grid item={true} key={index} xs={12} md={3}>
                                            <Leader leader={leader}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default AboutPage;
