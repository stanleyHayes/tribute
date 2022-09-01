import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    LinearProgress,
    MenuItem,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import AuthLayout from "../../components/layout/auth-layout";

const UpdateProfilePage = () => {

    const {authLoading, authError, authData} = useSelector(selectAuth);

    const formik = useFormik({
        initialValues: {
            firstName: authData.firstName,
            lastName: authData.lastName,
            username: authData.username,
            email: authData.email,
            phone: authData.phone,
            address: {
                country: authData?.address?.country,
                stateOrProvinceOrRegion: authData?.address?.stateOrProvinceOrRegion,
                city: authData?.address?.city,
                addressLine1: authData?.address?.addressLine1,
                addressLine2: authData?.address?.addressLine2,
            }
        },
        validationSchema: yup.object({
            firstName: yup.string().required('First name required'),
            lastName: yup.string().required('Last name required'),
            username: yup.string().required('Username required'),
            email: yup.string().email('Enter a valid email').required('Email required'),
            phone: yup.string().phone("Enter a valid phone").required('Phone required'),
            address: yup.object().shape({
                country: yup.string().oneOf(['Ghana', 'Other', '']).required('Country required'),
                stateOrProvinceOrRegion: yup.string().required('State or Region or Province required'),
                city: yup.string().required('City required'),
                addressLine1: yup.string().required('Address line required'),
                addressLine2: yup.string()
            })
        }),
        onSubmit: (values, formikHelpers) => {
            console.log(values, formikHelpers)
        }
    });


    const [showPassword, setShowPassword] = useState(false);
    const [showPin, setShowPin] = useState(false);

    const changePasswordFormik = useFormik({
        initialValues: {
            currentPassword: '',
            confirmPassword: '',
            password: ''
        },
        validationSchema: yup.object({
            currentPassword: yup.string().required('Field Required'),
            confirmPassword: yup.string().required('Field Required'),
            password: yup.string().required('Field Required'),
        }),
        onSubmit: (values, formikHelpers) => {
            console.log(values, formikHelpers);
        }
    });

    const changePinFormik = useFormik({
        initialValues: {
            currentPin: '',
            confirmPin: '',
            pin: ''
        },
        validationSchema: yup.object({
            currentPin: yup.string().required('Field Required'),
            confirmPin: yup.string().required('Field Required'),
            pin: yup.string().required('Field Required'),
        }),
        onSubmit: (values, formikHelpers) => {
            console.log(values, formikHelpers);
        }
    });

    return (
        <AuthLayout>
            {authLoading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary'}}>Settings</Typography>
                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                    {authError && (
                        <Alert sx={{my: 2}} severity="error">
                            <AlertTitle>{authError}</AlertTitle>
                        </Alert>
                    )}
                    <Box>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={6}>
                                <Card
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                        height: '100%'
                                    }} elevation={1}>
                                    <CardContent>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                                    Change Profile
                                                </Typography>
                                                <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        size="medium"
                                                        type='text'
                                                        value={formik.values.firstName}
                                                        name="firstName"
                                                        id="firstName"
                                                        label="First Name"
                                                        variant="outlined"
                                                        error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter first name"
                                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        value={formik.values.lastName}
                                                        label="Last Name"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        name="lastName"
                                                        id="lastName"
                                                        error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter first name"
                                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        value={formik.values.email}
                                                        label="Email"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='email'
                                                        name="email"
                                                        id="email"
                                                        error={Boolean(formik.touched.email && formik.errors.email)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter email"
                                                        helperText={formik.touched.email && formik.errors.email}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        value={formik.values.phone}
                                                        label="Phone"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        name="phone"
                                                        id="phone"
                                                        error={Boolean(formik.touched.phone && formik.errors.phone)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter username"
                                                        helperText={formik.touched.phone && formik.errors.phone}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        value={formik.values.username}
                                                        label="Username"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        name="username"
                                                        id="username"
                                                        error={Boolean(formik.touched.username && formik.errors.username)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter username"
                                                        helperText={formik.touched.username && formik.errors.username}
                                                    />
                                                </FormControl>

                                                <LoadingButton
                                                    size="large"
                                                    color="secondary"
                                                    sx={{
                                                        borderBottomRightRadius: 0,
                                                        borderTopRightRadius: 16,
                                                        borderBottomLeftRadius: 16,
                                                        borderTopLeftRadius: 0,
                                                        textTransform: 'capitalize',
                                                        py: 1.2
                                                    }}
                                                    loadingPosition="start"
                                                    startIcon={formik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loadingIndicator={formik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loading={formik.isSubmitting}
                                                    fullWidth={true}
                                                    variant="contained"
                                                    disableElevation={true}>
                                                    {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                                                </LoadingButton>
                                            </Stack>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} elevation={1}>
                                    <CardContent>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                                    Change Address
                                                </Typography>
                                                <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        label="Country"
                                                        select={true}
                                                        variant="outlined"
                                                        size="medium"
                                                        value={formik.values.address.country}
                                                        type='text'
                                                        name="address.country"
                                                        placeholder="Select country"
                                                        id="country"
                                                        defaultValue="Ghana"
                                                        error={Boolean(formik.touched?.address?.country && formik.errors?.address?.country)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        helperText={formik.touched?.address?.country && formik.errors?.address?.country}>
                                                        <MenuItem value="">Select Country</MenuItem>
                                                        <MenuItem value="Ghana">Ghana</MenuItem>
                                                        <MenuItem value="Other">Other</MenuItem>
                                                    </TextField>
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        label="Region"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        value={formik.values.address?.stateOrProvinceOrRegion}
                                                        name="address.stateOrProvinceOrRegion"
                                                        id="stateOrProvinceOrRegion"
                                                        error={Boolean(formik.touched?.address?.stateOrProvinceOrRegion && formik.errors?.address?.stateOrProvinceOrRegion)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter state Or Province Or Region"
                                                        helperText={formik.touched?.address?.stateOrProvinceOrRegion && formik.errors?.address?.stateOrProvinceOrRegion}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        label="City"
                                                        value={formik.values.address?.city}
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        name="address.city"
                                                        id="city"
                                                        error={Boolean(formik.touched?.address?.city && formik.errors?.address?.city)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter city"
                                                        helperText={formik.touched?.address?.city && formik.errors?.address?.city}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        value={formik.values.address?.addressLine1}
                                                        label="Address Line 1"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        name="address.addressLine1"
                                                        id="addressLine1"
                                                        error={Boolean(formik.touched?.address?.addressLine1 && formik.errors?.address?.addressLine1)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        multiline={true}
                                                        placeholder="Enter addressLine1"
                                                        helperText={formik.touched?.address?.addressLine1 && formik.errors?.address?.addressLine1}
                                                    />
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <TextField
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        InputLabelProps={{shrink: true}}
                                                        label="Address line 2"
                                                        variant="outlined"
                                                        size="medium"
                                                        type='text'
                                                        name="address.addressLine2"
                                                        id="addressLine2"
                                                        value={formik.values.address?.addressLine2}
                                                        error={Boolean(formik.touched?.address?.addressLine2 && formik.errors?.address?.addressLine2)}
                                                        required={true}
                                                        multiline={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter address line2"
                                                        helperText={formik.touched?.address?.addressLine2 && formik.errors?.address?.addressLine2}
                                                    />
                                                </FormControl>

                                                <LoadingButton
                                                    size="large"
                                                    color="secondary"
                                                    sx={{
                                                        borderBottomRightRadius: 0,
                                                        borderTopRightRadius: 16,
                                                        borderBottomLeftRadius: 16,
                                                        borderTopLeftRadius: 0,
                                                        textTransform: 'capitalize',
                                                        py: 1.2
                                                    }}
                                                    loadingPosition="start"
                                                    startIcon={formik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loadingIndicator={formik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loading={formik.isSubmitting}
                                                    fullWidth={true}
                                                    variant="contained"
                                                    disableElevation={true}>
                                                    {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                                                </LoadingButton>
                                            </Stack>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} elevation={1}>
                                    <CardContent>
                                        <form onSubmit={changePasswordFormik.handleSubmit}>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="h5" sx={{color: 'text.primary'}}>Change
                                                    Password</Typography>
                                                <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
                                                    <OutlinedInput
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        size="medium"
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="currentPassword"
                                                        id="currentPassword"
                                                        error={Boolean(changePasswordFormik?.errors?.currentPassword)}
                                                        required={true}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter password"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                {showPassword ?
                                                                    <VisibilityOff
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {changePasswordFormik?.errors?.currentPassword &&
                                                        <FormHelperText
                                                            error={true}>
                                                            {changePasswordFormik?.errors?.currentPassword}
                                                        </FormHelperText>}
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <InputLabel htmlFor="password">Password</InputLabel>
                                                    <OutlinedInput
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        size="medium"
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        id="password"
                                                        error={Boolean(changePasswordFormik?.errors?.password)}
                                                        required={true}
                                                        onChange={changePasswordFormik.handleChange}
                                                        onBlur={changePasswordFormik.handleBlur}
                                                        placeholder="Enter password"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                {showPassword ?
                                                                    <VisibilityOff
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {changePasswordFormik?.errors?.password &&
                                                        <FormHelperText
                                                            error={true}>
                                                            {changePasswordFormik?.errors?.password}
                                                        </FormHelperText>}
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                                    <OutlinedInput
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        size="medium"
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        error={Boolean(changePasswordFormik?.errors?.confirmPassword)}
                                                        required={true}
                                                        onChange={changePasswordFormik.handleChange}
                                                        onBlur={changePasswordFormik.handleBlur}
                                                        placeholder="Enter password"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                {showPassword ?
                                                                    <VisibilityOff
                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {changePasswordFormik?.errors?.confirmPassword &&
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik?.errors?.confirmPassword}
                                                        </FormHelperText>}
                                                </FormControl>
                                                <LoadingButton
                                                    size="large"
                                                    color="secondary"
                                                    sx={{
                                                        borderBottomRightRadius: 0,
                                                        borderTopRightRadius: 16,
                                                        borderBottomLeftRadius: 16,
                                                        borderTopLeftRadius: 0,
                                                        textTransform: 'capitalize',
                                                        py: 1.2
                                                    }}
                                                    loadingPosition="start"
                                                    startIcon={changePasswordFormik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loadingIndicator={changePasswordFormik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loading={changePasswordFormik.isSubmitting}
                                                    fullWidth={true}
                                                    variant="contained"
                                                    disableElevation={true}>
                                                    {changePasswordFormik.isSubmitting ? 'Submitting...' : 'Submit'}
                                                </LoadingButton>
                                            </Stack>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card
                                    sx={{
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 16,
                                        borderBottomLeftRadius: 16,
                                        borderTopLeftRadius: 0,
                                    }} elevation={1}>
                                    <CardContent>
                                        <form onSubmit={changePinFormik.handleSubmit}>
                                            <Stack direction="column" spacing={2}>
                                                <Typography variant="h5" sx={{color: 'text.primary'}}>Change
                                                    Pin</Typography>
                                                <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <InputLabel htmlFor="currentPin">Current Pin</InputLabel>
                                                    <OutlinedInput
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        size="medium"
                                                        type={showPin ? 'text' : 'password'}
                                                        name="currentPin"
                                                        id="currentPin"
                                                        error={Boolean(changePinFormik?.errors?.currentPin)}
                                                        required={true}
                                                        onChange={changePinFormik.handleChange}
                                                        onBlur={changePinFormik.handleBlur}
                                                        placeholder="Enter pin"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                {showPin ?
                                                                    <VisibilityOff
                                                                        onClick={() => setShowPin(false)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        onClick={() => setShowPin(true)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {changePinFormik.errors.currentPin &&
                                                        <FormHelperText
                                                            error={true}>
                                                            {changePinFormik?.errors?.currentPin}
                                                        </FormHelperText>}
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <InputLabel htmlFor="pin">Pin</InputLabel>
                                                    <OutlinedInput
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        size="medium"
                                                        type={showPin ? 'text' : 'password'}
                                                        name="pin"
                                                        id="pin"
                                                        error={Boolean(changePinFormik?.errors?.pin)}
                                                        required={true}
                                                        onChange={changePinFormik.handleChange}
                                                        onBlur={changePinFormik.handleBlur}
                                                        placeholder="Enter pin"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                {showPin ?
                                                                    <VisibilityOff
                                                                        onClick={() => setShowPin(false)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        onClick={() => setShowPin(true)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {changePinFormik.errors.pin &&
                                                        <FormHelperText
                                                            error={true}>
                                                            {changePinFormik?.errors?.pin}
                                                        </FormHelperText>}
                                                </FormControl>
                                                <FormControl variant="outlined" fullWidth={true}>
                                                    <InputLabel htmlFor="confirmPin">Confirm Pin</InputLabel>
                                                    <OutlinedInput
                                                        sx={{
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 16,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        size="medium"
                                                        type={showPin ? 'text' : 'password'}
                                                        name="confirmPin"
                                                        id="confirmPin"
                                                        error={Boolean(changePinFormik?.errors?.confirmPin)}
                                                        required={true}
                                                        onChange={changePinFormik.handleChange}
                                                        onBlur={changePinFormik.handleBlur}
                                                        placeholder="Enter pin"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                {showPin ?
                                                                    <VisibilityOff
                                                                        onClick={() => setShowPin(false)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    /> :
                                                                    <Visibility
                                                                        onClick={() => setShowPassword(true)}
                                                                        sx={{
                                                                            borderBottomRightRadius: 0,
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            borderRadius: '100%',
                                                                            padding: 1,
                                                                            fontSize: 32,
                                                                            backgroundColor: 'light.secondary'
                                                                        }}
                                                                    />}
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {changePinFormik?.errors?.confirmPin &&
                                                        <FormHelperText
                                                            error={true}>
                                                            {changePinFormik?.errors?.confirmPin}
                                                        </FormHelperText>}
                                                </FormControl>
                                                <LoadingButton
                                                    size="large"
                                                    color="secondary"
                                                    sx={{
                                                        borderBottomRightRadius: 0,
                                                        borderTopRightRadius: 16,
                                                        borderBottomLeftRadius: 16,
                                                        borderTopLeftRadius: 0,
                                                        textTransform: 'capitalize',
                                                        py: 1.2
                                                    }}
                                                    loadingPosition="start"
                                                    startIcon={changePinFormik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loadingIndicator={changePinFormik.isSubmitting ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loading={changePinFormik.isSubmitting}
                                                    fullWidth={true}
                                                    variant="contained"
                                                    disableElevation={true}>
                                                    {changePinFormik.isSubmitting ? 'Submitting...' : 'Submit'}
                                                </LoadingButton>
                                            </Stack>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default UpdateProfilePage;
