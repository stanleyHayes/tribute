import {Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";

const CartItem = ({item}) => {

    return (
        <Card
            sx={{
                borderBottomRightRadius: 4,
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderTopLeftRadius: 4
            }} elevation={0}>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12} md={2}>
                    <CardMedia
                        component="img"
                        src={item.image}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderBottomRightRadius: 4,
                            borderTopRightRadius: 8,
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 4
                        }}
                    />
                </Grid>
                <Grid item={true} xs={12} md={10}>
                    <CardContent>
                        <Stack direction="column" spacing={1}>
                            <Typography variant="h6" sx={{color: 'text.primary'}}>
                                {item.name}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CartItem;
