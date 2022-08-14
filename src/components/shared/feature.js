import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Feature = ({feature}) => {
    return (
        <Box sx={{position: 'relative', height: '100%'}}>
            <Card
                sx={{
                    padding: 4,
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopLeftRadius: 4,
                    height: '100%'
                }}>
                <CardMedia
                    className="media"
                    src={feature.image}
                    sx={{
                        height: 100,
                        objectFit: 'cover',
                        objectPosition: 'top',
                        position: 'absolute',
                        transform: 'translate(-50%, -80%)',
                        transition: 'transform 300ms ease-in-out',
                        zIndex: 1000,
                        left: '50%',
                        width: '80%',
                        borderRadius: '100%'
                    }}
                    component="img"
                />
                <CardContent>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h6" sx={{color: 'text.primary'}} align="center">
                            {feature.name}
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}} align="center">
                            {feature.description}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Feature;
