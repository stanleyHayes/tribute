import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/about.jpg";

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
                <Container>

                </Container>
            </Box>
        </Layout>
    )
}

export default AboutPage;
