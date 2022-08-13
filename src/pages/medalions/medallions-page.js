import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/about-medallion.jpg";

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
                <Container>

                </Container>
            </Box>
        </Layout>
    )
}

export default MedallionPage;
