import AuthLayout from "../../components/layout/auth-layout";
import {Container, Typography} from "@mui/material";

const DashboardPage = () => {
    return (
        <AuthLayout>
            <Container>
                <Typography variant="h4" align="center">Dashboard Page</Typography>
            </Container>
        </AuthLayout>
    )
}

export default DashboardPage;
