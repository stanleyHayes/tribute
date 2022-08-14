import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/banners/medallion-features.jpg";
import {TRIBUTE_DATA} from "../../utils/data";
import Feature from "../../components/shared/feature";

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
                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Grid container={true} spacing={4}>
                            {TRIBUTE_DATA.MEDALLION_FEATURES.map((feature, index) => {
                                return (
                                    <Grid item={true} key={index} xs={12} md={4}>
                                        <Feature feature={feature}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default MedallionFeaturesPage;
