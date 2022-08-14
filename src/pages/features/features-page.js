import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/features.jpg";
import {TRIBUTE_DATA} from "../../utils/data";
import Feature from "../../components/shared/feature";

const FeaturesPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        Our Features
                                    </Typography>
                                    <Typography align="center" variant="h6" sx={{color: 'white'}}>
                                        Learn more about Tribute platform
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container maxWidth="md">
                        <Stack direction="column" spacing={4}>
                            <Typography align="center" variant="h5" sx={{color: 'text.primary'}}>
                                What you can do at Tribute?
                            </Typography>
                            <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                                Tribute offers advanced social media features that you can share with the world
                                the stories and memories of your ancestors as well as your own stories and memories.
                                Tribute is meant to be a place where people can tell the truth about who they are
                                and how they want to be remembered.
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        {TRIBUTE_DATA.FEATURES.map((feature, index) => {
                            return (
                                <Grid item={true} key={index} xs={12} md={4}>
                                    <Feature feature={feature}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default FeaturesPage;
