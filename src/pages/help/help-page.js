import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/banners/help.jpg";
import Banner from "../../components/shared/banner";
import {TRIBUTE_DATA} from "../../utils/data";
import Help from "../../components/shared/help";
import ContactForm from "../../components/shared/contact-form";

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
            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <Container>
                    <Box>
                        <Grid container={true} spacing={2}>
                            {TRIBUTE_DATA.HELP_TOPICS.map((help, index) => {
                                return (
                                    <Grid item={true} key={index} xs={12} md={4}>
                                        <Help help={help}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                <ContactForm
                    caption="Send us a message and our customer support will help you find answers to your questions."
                    title="Looking for something else?"/>
            </Box>
        </Layout>
    )
}

export default HelpPage;
