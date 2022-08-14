import Layout from "../../components/layout/layout";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import {Link} from "react-router-dom";
import banner from "./../../assets/images/banners/home.jpg";

const HomePage = () => {
    return (
        <Layout>
            <Box>
                <Overlay
                    children={
                        <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                            <Container>
                                <Grid container={true} spacing={4} alignItems="center">
                                    <Grid item={true} xs={12} md={6}>
                                        <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                            Tribute
                                        </Typography>
                                        <Typography variant="h6" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Leave a legacy that will never be forgotten.
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Tribute is a platform where you can share with the world the stories and
                                            memories of your ancestors as well as your own stories and memories.
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'white', mb: 2, fontWeight: 400}}>
                                            Our Tribute Medallion gives access to anyone who scans it the ability to
                                            learn and interact with those who have gone on. </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container={true} spacing={2} alignItems="center">
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
                                                Buy a medallion
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item={true} xs={12} md="auto">
                                        <Link to="/medallion/overview" style={{textDecoration: 'none'}}>
                                            <Button
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    backgroundColor: 'light.active',
                                                    borderTopRightRadius: 16,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 0,
                                                    color: 'text.active',
                                                    borderColor: 'text.active',
                                                    borderWidth: 2
                                                }}
                                                variant="outlined"
                                                fullWidth={true}
                                                disableElevation={true}
                                                size="large">
                                                About Medallions
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>}
                    image={banner}
                    backgroundColor="#000000"/>
            </Box>
        </Layout>
    )
}

export default HomePage;
