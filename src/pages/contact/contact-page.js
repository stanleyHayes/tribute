import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import banner from "./../../assets/images/banners/contact.jpg";
import Banner from "../../components/shared/banner";

const ContactPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    children={
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Container>
                                <Stack direction="column" spacing={4}>
                                    <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                        Contact Us
                                    </Typography>
                                    <Typography align="center" variant="h6" sx={{color: 'white'}}>
                                        Do you have questions?
                                    </Typography>
                                    <Typography align="center" variant="body1" sx={{color: 'white'}}>
                                        Our customer support exist for one purpose: to serve and delight.
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                    backgroundImage={banner}
                />
                <Container>

                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
