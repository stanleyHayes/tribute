import AuthLayout from "../../components/layout/auth-layout";
import {Container, Typography} from "@mui/material";

const OrdersPage = () => {
    return (
        <AuthLayout>
            <Container>
                <Typography variant="h4" align="center">Orders Page</Typography>
            </Container>
        </AuthLayout>
    )
}

export default OrdersPage;
