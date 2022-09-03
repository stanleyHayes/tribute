import Layout from "../../components/layout/layout";
import {Alert, AlertTitle, Box, Container, Grid, LinearProgress, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/banners/medallion-features.jpg";
import Banner from "../../components/shared/banner";
import {useSelector} from "react-redux";
import {selectStory} from "../../redux/features/story/story-slice";
import Story from "../../components/shared/story";
import React from "react";

const StoriesPage = () => {

    const {storyLoading, storyError, stories} = useSelector(selectStory);

    return (
        <Layout>
            <Banner
                children={
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Container>
                            <Stack direction="column" spacing={4}>
                                <Typography align="center" variant="h3" sx={{color: 'white'}}>
                                    Our Stories
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
            {storyLoading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 4}}>
                <Container>
                    {storyError && (
                        <Alert severity="error"><AlertTitle>{storyError}</AlertTitle></Alert>
                    )}
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
        </Layout>
    )
}

export default StoriesPage;
