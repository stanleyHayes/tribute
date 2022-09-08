import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import {Link} from "react-router-dom";
import banner from "./../../assets/images/banners/home.jpg";
import {ArrowRightAlt, KeyboardArrowRight, KeyboardArrowUp} from "@mui/icons-material";
import {TRIBUTE_DATA} from "../../utils/data";
import FAQ from "../../components/shared/faq";
import Carousel from 'react-material-ui-carousel';
import 'react-multi-carousel/lib/styles.css';
import BannerSliderItem from "../../components/shared/banner-slider-item";


import MultiCarousel from 'react-multi-carousel';
import Story from "../../components/shared/story";
import {useSelector} from "react-redux";
import {selectStory} from "../../redux/features/story/story-slice";
import Empty from "../../components/shared/empty";
import {UTILS} from "../../utils/utils";

const HomePage = () => {

    const {stories} = useSelector(selectStory);

    return (
        <Layout>
            <Box>
                <Overlay
                    children={
                        <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                            <Container>
                                <Grid container={true} spacing={4} alignItems="center">
                                    <Grid item={true} xs={12} md={6}>
                                        <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                            Tribute
                                        </Typography>
                                        <Typography variant="h6" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Leave a legacy that will never be forgotten.
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Tribute is a platform where you can share with the world the stories and
                                            memories of your ancestors as well as your own stories and memories.
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Our Tribute Medallion gives access to anyone who scans it the ability to
                                            learn and interact with those who have gone on. </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container={true} spacing={2} alignItems="center">
                                    <Grid item={true} xs={12} md="auto">
                                        <Link to="/auth/register" style={{textDecoration: 'none'}}>
                                            <Button
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderTopRightRadius: 16,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 0,
                                                }}
                                                variant="contained"
                                                fullWidth={true}
                                                color="secondary"
                                                disableElevation={true}
                                                size="large">
                                                Buy a medallion
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item={true} xs={12} md="auto">
                                        <Link to="/medallion/overview" style={{textDecoration: 'none'}}>
                                            <Button
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    backgroundColor: 'light.active',
                                                    borderTopRightRadius: 16,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 0,
                                                    color: 'text.active',
                                                    borderColor: 'text.active',
                                                    borderWidth: 2
                                                }}
                                                variant="outlined"
                                                fullWidth={true}
                                                disableElevation={true}
                                                size="large">
                                                About Medallions
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>}
                    image={banner}
                    backgroundColor="#000000"/>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={2} justifyContent="space-between">
                            <Grid item={true} xs={12} md={5}>
                                <Box sx={{mb: 4}}>
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
                                </Box>
                                <Box sx={{mb: 4}}>
                                    <Stack direction="row" justifyContent="center">
                                        <KeyboardArrowUp
                                            color="secondary"
                                            sx={{
                                                backgroundColor: 'light.secondary',
                                                padding: 1,
                                                fontSize: 64,
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0
                                            }}/>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Typography align="center" variant="h6" sx={{color: 'text.primary'}}>
                                        Scan me with your device to read my story
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box sx={{mb: 4}}>
                                    <Typography variant="h6" sx={{color: 'text.primary', mb: 2}}>
                                        Remember your ancestors with an ancestor account
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Create an ancestor account for those who don’t have the opportunity. Upload
                                        pictures, videos, memories, and also much more for those who visit their
                                        headstone to benefit from.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Registering and using an Ancestor account is 100% free! We do not require a
                                        Medallion purchase in order to use our platform.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{color: 'text.primary', mb: 2}}>
                                        Share your personal memories with a personal account
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Create a personal account to leave your own legacy how you want others see it.
                                        Leave meaningful messages, pictures, videos, advice, and so much more for the
                                        world to benefit from.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Registering and using a Personal account is also 100% free!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Stack spacing={4}>
                            <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                                Stories
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'text.secondary',
                                    mb: 2,
                                    textTransform: 'uppercase'
                                }}
                                variant="body2"
                                align="center">
                                View example stories from loved ones
                            </Typography>

                            {stories && stories.length === 0 ? (
                                <Box>
                                    <Empty
                                        title={
                                            <Typography variant="h5" align="center" sx={{color: 'text.primary'}}>
                                                No Action book trailers
                                            </Typography>
                                        } message={
                                        <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                                            Be the first to create an action book trailer
                                        </Typography>
                                    }/>
                                </Box>
                            ) : (
                                <MultiCarousel
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    infinite={true}
                                    partialVisible={true}
                                    keyBoardControl={true}
                                    pauseOnHover={true}
                                    responsive={UTILS.responsive}>
                                    {stories && stories.map(story => {
                                        return (
                                            <Box key={story._id} sx={{mx: 2, height: '100%'}}>
                                                <Story story={story}/>
                                            </Box>
                                        )
                                    })}
                                </MultiCarousel>
                            )}

                            <Stack direction="row" justifyContent="flex-end">
                                <Link to={`/books?categories=action`} style={{textDecoration: 'none'}}>
                                    <Button
                                        color="secondary"
                                        size="medium"
                                        variant="text"
                                        sx={{textTransform: 'capitalize'}}
                                        endIcon={<KeyboardArrowRight color="secondary"/>}>
                                        View All Stories
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={2} alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        What can you do at Turning Hearts?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Turning Hearts is meant to be a place where people can tell the truth about
                                        who
                                        they are and how they want to be remembered.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                                        Turning Hearts offers advanced social media features that you can share with
                                        the
                                        world the stories and memories of your ancestors as well as your own stories
                                        and
                                        memories.
                                    </Typography>
                                    <Link to={'/features'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0
                                            }}>
                                            Features of Tribute
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Container sx={{mb: 4}}>
                                    <Carousel
                                        autoPlay={true}
                                        stopAutoPlayOnHover={true}
                                        duration={3000}
                                        indicators={false}
                                        cycleNavigation={true}>
                                        {TRIBUTE_DATA.FEATURES.map((item, index) => {
                                            return (
                                                <Box key={index}>
                                                    <BannerSliderItem item={item}/>
                                                </Box>
                                            )
                                        })}
                                    </Carousel>
                                </Container>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={5}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 0,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        What is a Turning Hearts Medallion?
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                                        A Turning Hearts Medallion is a scannable medallion intended to be placed on the
                                        headstone of an ancestor or loved one. Anyone who visits can scan the QR code
                                        engraved on the medallion with their phone and it will connect them to the
                                        profile created for that person.
                                    </Typography>
                                    <Link to={'/medallion/overview'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0
                                            }}>
                                            About Medallions
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
                                <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                    How to get started?
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                    You can create up to 6 individual Turning Hearts accounts for yourself and your
                                    ancestors using the same email address.
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                    Each account must be made one at a time, this is done by clicking “Create an
                                    account” and going through the registration process for each ancestor and personal
                                    account.
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                                    A medallion can be purchased anytime through the profile development and you can
                                    also order a medallion without having an account at Turning Hearts.
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
                                            borderBottomRightRadius: 0,
                                            borderTopRightRadius: 12,
                                            borderBottomLeftRadius: 12,
                                            borderTopLeftRadius: 0
                                        }}>
                                        Create a Free Account
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Stack direction="column" spacing={2}>
                                    {TRIBUTE_DATA.FAQ.map((faq, index) => {
                                        return (
                                            <Box key={index}>
                                                <FAQ faq={faq}/>
                                            </Box>
                                        )
                                    })}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md={5}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 0,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Box>
                                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                        Lives can be changed by hearing their stories.
                                    </Typography>
                                    <Box sx={{mb: 2}}>
                                        <Typography variant="h6" sx={{color: 'text.primary', mb: 1}}>
                                            Who We Are?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            We are a community that seeks to revolutionize the way we remember life.
                                        </Typography>
                                    </Box>

                                    <Box sx={{mb: 2}}>
                                        <Typography variant="h6" sx={{color: 'text.primary', mb: 1}}>
                                            What We Do?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            We utilize new technologies that enable a more personal way to share life.
                                        </Typography>
                                    </Box>

                                    <Box sx={{mb: 2}}>
                                        <Typography variant="h6" sx={{color: 'text.primary', mb: 1}}>
                                            Why We Exist?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                                            We believe every life deserves to be remembered. A simple memory can change
                                            someones life.
                                        </Typography>
                                    </Box>

                                    <Link to={'/about'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0
                                            }}>
                                            About Us
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
                                        You have the control for privacy
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Turning Hearts respects privacy the most.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        As an account holder, you have the control for all of the privacy filters which
                                        we have, so literally everything what our users share has privacy filters.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 1}}>
                                        Our users can hide all of the uploaded media files such as pictures, videos, and
                                        audio. Our users can hide updates from lifeline and also hide profile fields if
                                        user wants to restrict the visibility.
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                                        Literally our users can keep the profile visible only for family members.
                                    </Typography>
                                    <Link to={'/privacy-policy'} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={<ArrowRightAlt/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderBottomRightRadius: 0,
                                                borderTopRightRadius: 12,
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 0
                                            }}>
                                            About Privacy
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <CardMedia
                                    component="img"
                                    src={banner}
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 0,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage;
