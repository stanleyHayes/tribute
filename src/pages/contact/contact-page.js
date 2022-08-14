import Layout from "../../components/layout/layout";
import {Box, Card, CardContent, Container, Grid, Link, Stack, Typography} from "@mui/material";
import banner from "./../../assets/images/banners/contact.jpg";
import Banner from "../../components/shared/banner";
import {CallOutlined, LocationOnOutlined, MailOutlined} from "@mui/icons-material";
import "yup-phone";
import ContactForm from "../../components/shared/contact-form";

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
                                    <Typography align="center" variant="body4" sx={{color: 'white'}}>
                                        Our customer support exist for one purpose: to serve and delight.
                                    </Typography>
                                </Stack>
                            </Container>
                        </Box>
                    }
                    links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                    backgroundImage={banner}
                />
                <Box sx={{py: 8}}>
                    <Container>
                        <Typography variant="h4" align="center" sx={{color: 'text.primary', mb: 4}}>
                            Reach Us
                        </Typography>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={4}>
                                <Link href="#" rel="noopener" underline="none">
                                    <Card
                                        sx={{
                                            padding: 4,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 34,
                                            borderBottomLeftRadius: 34,
                                            borderTopLeftRadius: 8,
                                            borderBottomStyle: 'solid',
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'colors.blue',
                                            height: '100%'
                                        }} elevation={0}>
                                        <CardContent>
                                            <Stack direction="column" spacing={3}>
                                                <Stack direction="row" justifyContent="center">
                                                    <LocationOnOutlined
                                                        color="secondary"
                                                        sx={{
                                                            backgroundColor: 'light.secondary',
                                                            padding: 1,
                                                            fontSize: 36,
                                                            borderBottomRightRadius: 4,
                                                            borderTopRightRadius: 12,
                                                            borderBottomLeftRadius: 12,
                                                            borderTopLeftRadius: 4
                                                        }}/>
                                                </Stack>
                                                <Typography
                                                    variant="h6"
                                                    align="center"
                                                    sx={{color: 'text.primary'}}>
                                                    Address
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    align="center"
                                                    sx={{color: 'text.secondary'}}>
                                                    70 Red Pine DR, Alpine, UT 84004
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>


                            <Grid item={true} xs={12} md={4}>
                                <Link href="mailto:hello@tribute.com" underline="none">
                                    <Card
                                        sx={{
                                            padding: 4,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 34,
                                            borderBottomLeftRadius: 34,
                                            borderTopLeftRadius: 8,
                                            borderBottomStyle: 'solid',
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'colors.yellow',
                                            height: '100%'
                                        }} elevation={0}>
                                        <CardContent>
                                            <Stack direction="column" spacing={3}>
                                                <Stack direction="row" justifyContent="center">
                                                    <MailOutlined
                                                        sx={{
                                                            backgroundColor: 'light.yellow',
                                                            padding: 1,
                                                            fontSize: 36,
                                                            borderBottomRightRadius: 4,
                                                            borderTopRightRadius: 12,
                                                            borderBottomLeftRadius: 12,
                                                            borderTopLeftRadius: 4,
                                                            color: 'colors.yellow'
                                                        }}/>
                                                </Stack>
                                                <Typography
                                                    variant="h6"
                                                    align="center"
                                                    sx={{color: 'text.primary'}}>
                                                    Email
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    align="center"
                                                    sx={{color: 'text.secondary'}}>
                                                    hello@tribute.com
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>


                            <Grid item={true} xs={12} md={4}>
                                <Link href="tel:+433470048319" underline="none">
                                    <Card
                                        sx={{
                                            padding: 4,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 34,
                                            borderBottomLeftRadius: 34,
                                            borderTopLeftRadius: 8,
                                            borderBottomStyle: 'solid',
                                            borderBottomWidth: 4,
                                            borderBottomColor: 'colors.red',
                                            height: '100%'
                                        }} elevation={0}>
                                        <CardContent>
                                            <Stack direction="column" spacing={3}>
                                                <Stack direction="row" justifyContent="center">
                                                    <CallOutlined
                                                        sx={{
                                                            backgroundColor: 'light.red',
                                                            padding: 1,
                                                            fontSize: 36,
                                                            borderBottomRightRadius: 4,
                                                            borderTopRightRadius: 12,
                                                            borderBottomLeftRadius: 12,
                                                            borderTopLeftRadius: 4,
                                                            color: 'colors.red'
                                                        }}/>
                                                </Stack>
                                                <Typography
                                                    variant="h6"
                                                    align="center"
                                                    sx={{color: 'text.primary'}}>
                                                    Phone
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    align="center"
                                                    sx={{color: 'text.secondary'}}>
                                                    +433 (47) 004 - 8319
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <ContactForm
                        title="Send Message"
                        caption="Send us a message and our customer support will help you find answers to your questions."
                    />
                </Box>
            </Box>
        </Layout>
    )
}

export default ContactPage;
