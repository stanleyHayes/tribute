import AuthLayout from "../../components/layout/auth-layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import {useSelector} from "react-redux";
import {selectStory} from "../../redux/features/story/story-slice";
import Story from "../../components/shared/story";

const StoriesAuthPage = () => {

    const formik = useFormik({
        validateOnBlur: true,
        validateOnChange: true,
        initialValues: {
            query: '',
            filter: 'default'
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values, resetForm)
        },
        validationSchema: yup.object().shape({
            query: yup.string().required('Query required'),
            filter: yup.string()
                .oneOf(['default', 'ancestor', 'personal', 'pet'])
                .required('Filter required')
        })
    });

    const {stories, storyError, storyLoading} = useSelector(selectStory);

    return (
        <AuthLayout>
            {storyLoading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{pt: 4}}>
                <Container>
                    {storyError && (
                        <Alert severity="error"><AlertTitle>{storyError}</AlertTitle></Alert>
                    )}
                    <Grid container={true} spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'text.primary'}}>
                                Stories
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                sx={{
                                    textTransform: 'capitalize',
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12,
                                    borderTopLeftRadius: 0,
                                }}
                                color="secondary"
                                variant="outlined"
                                disableElevation={true}>
                                Add Story
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider sx={{my: 3}} light={true}/>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container={true} spacing={2} alignItems="center" justifyContent="space-between">
                            <Grid item={true} xs={12} md={6} lg={4}>
                                <Select
                                    variant="outlined"
                                    fullWidth={true}
                                    label="Filter"
                                    name="filter"
                                    value={formik.values.filter}
                                    onChange={formik.handleChange}
                                    color="secondary">
                                    <MenuItem value="default">All Stories</MenuItem>
                                    <MenuItem value="ancestor">Ancestor</MenuItem>
                                    <MenuItem value="personal">Personal</MenuItem>
                                    <MenuItem value="pet">Pet</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={4}>
                                <Grid container={true} spacing={2} alignItems="center">
                                    <Grid item={true} xs={8}>
                                        <TextField
                                            name="query"
                                            fullWidth={true}
                                            size="medium"
                                            variant="outlined"
                                            label="Search"
                                            placeholder="Enter query"
                                            required={true}
                                            error={formik.touched.query && formik.errors.query}
                                            helperText={formik.touched.query && formik.errors.query}
                                            value={formik.values.query}
                                            color="secondary"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Grid>
                                    <Grid item={true} xs={4}>
                                        <Button
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderTopRightRadius: 16,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 16,
                                                borderTopLeftRadius: 0,
                                            }}
                                            onClick={formik.handleSubmit}
                                            type="submit"
                                            variant="contained"
                                            fullWidth={true}
                                            color="secondary"
                                            disableElevation={true}
                                            size="large">
                                            Search
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Box>
            <Divider variant="fullWidth" sx={{my: 3}} light={true}/>
            <Box sx={{py: 4}}>
                <Container>
                    {stories && stories.length === 0 ? (
                        <Box sx={{
                            minHeight: '30vh',
                            borderRadius: 0.5,
                            backgroundColor: 'background.paper',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Typography
                                variant="body1"
                                align="center" sx={{textTransform: 'uppercase', color: 'text.primary'}}>
                                No stories available
                            </Typography>
                        </Box>
                    ) : (
                        <Grid container={true} spacing={4}>
                            {stories && stories.map(story => {
                                return (
                                    <Grid item={true} xs={12} md={6} lg={4} key={story._id}>
                                        <Story story={story}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )}
                </Container>
            </Box>
        </AuthLayout>
    )
}

export default StoriesAuthPage;
