import AuthLayout from "../../components/layout/auth-layout";
import {Box, Container, Step, Stepper} from "@mui/material";
import CheckoutShipping from "../../components/shared/checkout-shipping";
import CheckoutSummary from "../../components/shared/checkout-summary";
import CheckoutPayment from "../../components/shared/checkout-payment";
import CheckoutAcknowledgment from "../../components/shared/checkout-acknowledgment";
import {useSelector} from "react-redux";
import {selectCheckout} from "../../redux/features/checkout/checkout-slice";

const CheckoutPage = () => {
    const renderStep = step => {
        switch (step) {
            case 1:
                return <CheckoutShipping/>;
            case 2:
                return <CheckoutSummary/>;
            case 3:
                return <CheckoutPayment/>;
            case 4:
                return <CheckoutAcknowledgment/>;
            default:
                return <CheckoutShipping/>;
        }
    }

    const steps = [
        {stage: 1, label: 'Shipping'},
        {stage: 2, label: 'Summary'},
        {stage: 3, label: 'Payment'},
        {stage: 4, label: 'Acknowledgment'}
    ]

    const {activeStep} = useSelector(selectCheckout);

    return (
        <AuthLayout>
            <Box>
                <Container>
                    <Stepper>
                    {steps.map(step => {
                        return (
                            <Step key={step.stage}>

                            </Step>
                        )
                    })}
                    </Stepper>
                </Container>
            </Box>
        </AuthLayout>
    )
}
export default CheckoutPage;
