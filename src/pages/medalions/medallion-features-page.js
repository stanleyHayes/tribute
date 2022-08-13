import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/medallion-features.jpg";

const MedallionFeaturesPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        Features
                                    </Typography>
                                    <Typography align="center" variant="h6" sx={{color: 'white'}}>
                                        Tribute Medallion Features
                                    </Typography>
                                    <Typography align="center" variant="body1" sx={{color: 'white'}}>
                                        See list of the main features
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

export default MedallionFeaturesPage;
