import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    LinearProgress,
    Link,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import banner from "./../../assets/images/banners/contact.jpg";
import Banner from "../../components/shared/banner";
import {
    CallOutlined,
    Facebook,
    Instagram,
    LinkedIn,
    LocationOnOutlined,
    MailOutlined,
    Twitter
} from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {useSelector} from "react-redux";
import {selectMessage} from "../../redux/features/message/message-slice";

const ContactPage = () => {

    const {messageLoading, messageError} = useSelector(selectMessage);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            country: '',
            city: ''
        },
        validateOnChange: true,
        onSubmit: (values, {resetForm}) => {
            console.log(values, resetForm);
        },
        validationSchema: yup.object().shape({
            firstName: yup.string().required('First name required'),
            lastName: yup.string().required('Last name required'),
            email: yup.string().email('Invalid email').required('email required'),
            phone: yup.string().phone('Invalid phone').required('Phone name required'),
            subject: yup.string().required('Subject required'),
            message: yup.string().required('Message required'),
            country: yup.string().required('Country required'),
            city: yup.string().required('City required')
        })
    });

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
                    <form onSubmit={formik.handleSubmit}>
                        <Container>
                            <Typography variant="h4" align="center" sx={{color: 'text.primary', mb: 2}}>
                                Send Message
                            </Typography>
                            <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 4}}>
                                Send us a message and our customer support will help you find answers to your
                                questions.
                            </Typography>

                            <Card
                                variant="elevation"
                                elevation={0}
                                sx={{
                                    borderBottomRightRadius: 4,
                                    borderTopRightRadius: 32,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 4,
                                }}>
                                {messageLoading && <LinearProgress variant="query" color="secondary"/>}
                                <CardContent>
                                    {messageError && (
                                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                                            <AlertTitle>{messageError}</AlertTitle>
                                        </Alert>
                                    )}
                                    <Box sx={{mb: 4}}>
                                        <Grid container={true} spacing={2}>
                                            <Grid item={true} xs={12} md={6}>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder="First Name"
                                                    required={true}
                                                    label="First Name"
                                                    variant="outlined"
                                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                                    name="firstName"
                                                    error={Boolean(formik.touched.firstName && formik.touched.firstName)}
                                                    size="medium"
                                                    color="secondary"
                                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder="Last Name"
                                                    required={true}
                                                    label="Last Name"
                                                    variant="outlined"
                                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                                    name="lastName"
                                                    error={Boolean(formik.touched.lastName && formik.touched.lastName)}
                                                    size="medium"
                                                    color="secondary"
                                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                    value={formik.values.lastName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        <Grid container={true} spacing={2}>
                                            <Grid item={true} xs={12} md={6}>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder="Country"
                                                    required={true}
                                                    label="Country"
                                                    variant="outlined"
                                                    helperText={formik.touched.country && formik.errors.country}
                                                    name="country"
                                                    error={Boolean(formik.touched.country && formik.touched.country)}
                                                    size="medium"
                                                    color="secondary"
                                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                    value={formik.values.country}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder="City"
                                                    required={true}
                                                    label="City"
                                                    variant="outlined"
                                                    helperText={formik.touched.city && formik.errors.city}
                                                    name="city"
                                                    error={Boolean(formik.touched.city && formik.touched.city)}
                                                    size="medium"
                                                    color="secondary"
                                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                    value={formik.values.city}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        <Grid container={true} spacing={2}>
                                            <Grid item={true} xs={12} md={6}>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder="Email"
                                                    required={true}
                                                    label="Email"
                                                    type="email"
                                                    variant="outlined"
                                                    helperText={formik.touched.email && formik.errors.email}
                                                    name="email"
                                                    error={Boolean(formik.touched.email && formik.touched.email)}
                                                    size="medium"
                                                    color="secondary"
                                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <TextField
                                                    fullWidth={true}
                                                    placeholder="Phone Number"
                                                    required={true}
                                                    label="Phone Number"
                                                    type="tel"
                                                    variant="outlined"
                                                    helperText={formik.touched.phone && formik.errors.phone}
                                                    name="phone"
                                                    error={Boolean(formik.touched.phone && formik.touched.phone)}
                                                    size="medium"
                                                    color="secondary"
                                                    sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                                    value={formik.values.lastName}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        <TextField
                                            fullWidth={true}
                                            placeholder="Subject"
                                            required={true}
                                            label="Subject"
                                            type="text"
                                            variant="outlined"
                                            helperText={formik.touched.subject && formik.errors.subject}
                                            name="subject"
                                            error={Boolean(formik.touched.subject && formik.touched.subject)}
                                            size="medium"
                                            color="secondary"
                                            sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Box>
                                    <Box sx={{mb: 2}}>
                                        <TextField
                                            fullWidth={true}
                                            placeholder="Message"
                                            required={true}
                                            label="Message"
                                            type="text"
                                            variant="outlined"
                                            helperText={formik.touched.message && formik.errors.message}
                                            name="message"
                                            error={Boolean(formik.touched.message && formik.touched.message)}
                                            size="medium"
                                            color="secondary"
                                            sx={{backgroundColor: 'background.light', borderRadius: 1}}
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            multiline={true}
                                            minRows={5}
                                        />
                                    </Box>
                                    <Grid container={true} justifyContent="center">
                                        <Grid item={true} xs={12} md={6} lg={4}>
                                            <Button
                                                fullWidth={true}
                                                onClick={formik.handleSubmit}
                                                type="submit"
                                                color="secondary"
                                                disableElevation={true}
                                                variant="contained"
                                                disable={messageLoading}
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderBottomRightRadius: 4,
                                                    borderTopRightRadius: 16,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 4,
                                                }}
                                                size="large">
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Container>
                    </form>
                </Box>

                <Box sx={{py: 8}}>
                    <Container>
                        <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 4}}>
                            Note:
                        </Typography>
                        <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 4}}>
                            Registering an account and using our platform is free - You only pay for the Turning Hearts
                            Medallion if you decide to purchase it. We are now shipping Turning Hearts Medallions to
                            every country.
                        </Typography>
                        <Grid container={true} spacing={2} alignItems="center" justifyContent="center">
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
                                        Register today
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md="auto">
                                <Link to="/medallions" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="secondary"
                                        sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: 'light.secondary',
                                            borderTopRightRadius: 16,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 16,
                                            borderTopLeftRadius: 0,
                                            borderWidth: 2
                                        }}
                                        variant="outlined"
                                        fullWidth={true}
                                        disableElevation={true}
                                        size="large">
                                        Buy a Medallion
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Stack direction="row" justifyContent="space-around">
                            <Link href="#" rel="noopener" underline="none">
                                <Facebook
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
                            </Link>

                            <Link href="#" rel="noopener" underline="none">
                                <Twitter
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
                            </Link>

                            <Link href="#" rel="noopener" underline="none">
                                <LinkedIn
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
                            </Link>

                            <Link href="#" rel="noopener" underline="none">
                                <Instagram
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
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default ContactPage;
