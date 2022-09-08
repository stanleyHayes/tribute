import {Button, Card, CardContent, CardMedia, Link, Stack, Typography} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";
import defaultImage from "./../../assets/images/default.png";

const Story = ({story}) => {
    return (
        <Card
            sx={{
                padding: 2,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 0,
                position: 'relative',
                borderBottomWidth: 5,
                borderBottomColor: 'colors.red',
                borderBottomStyle: 'solid',
                height: '100%'
            }}>
            <CardContent>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <CardMedia
                        className="media"
                        src={story.image ? story.image: defaultImage}
                        sx={{
                            height: 100,
                            width: 100,
                            objectFit: 'cover',
                            objectPosition: 'top',
                        }}
                        component="img"
                    />
                </Stack>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h6" sx={{color: 'text.primary'}} align="center">
                        {story.user.name}
                    </Typography>
                    <Link to={`/stories/${story._id}`} style={{textDecoration: 'none'}}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth={true}
                            size="large"
                            disableElevation={true}
                            endIcon={<ArrowRightAlt/>}
                            sx={{
                                textTransform: 'capitalize',
                                borderBottomRightRadius: 4,
                                borderTopRightRadius: 12,
                                borderBottomLeftRadius: 12,
                                borderTopLeftRadius: 4
                            }}>
                            View Story
                        </Button>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Story;
