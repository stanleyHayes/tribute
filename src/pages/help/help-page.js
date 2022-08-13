import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/banners/help.jpg";
import Banner from "../../components/shared/banner";

const HelpPage = () => {

    return (
        <Layout>
            <Banner
                children={
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Container>
                            <Stack direction="column" spacing={4}>
                                <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                    Help Center
                                </Typography>
                                <Typography align="center" variant="h6" sx={{color: 'white'}}>
                                    How can we help you?
                                </Typography>
                            </Stack>
                        </Container>
                    </Box>
                }
                links={[{label: 'Home', link: '/'}, {label: 'Help Center', link: '/help-center'}]}
                backgroundImage={banner}
            />
        </Layout>
    )
}

export default HelpPage;
