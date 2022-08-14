import {Button, Card, CardContent, CardMedia, Link, Stack, Typography} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";

const Story = ({story}) => {
    return (
        <Card
            sx={{
                padding: 4,
                borderBottomRightRadius: 4,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 4,
                position: 'relative',
                borderBottomWidth: 5,
                borderBottomColor: 'colors.red',
                borderBottomStyle: 'solid'
            }}>
            <CardContent>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <CardMedia
                        className="media"
                        src={story.image}
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
                        {story.name}
                    </Typography>
                    <Link to={story.link} style={{textDecoration: 'none'}}>
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
