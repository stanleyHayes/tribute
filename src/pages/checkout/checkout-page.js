import AuthLayout from "../../components/layout/auth-layout";
import {Box, Container, Step, StepIcon, StepLabel, Stepper} from "@mui/material";
import CheckoutShipping from "../../components/shared/checkout-shipping";
import CheckoutSummary from "../../components/shared/checkout-summary";
import CheckoutPayment from "../../components/shared/checkout-payment";
import CheckoutAcknowledgment from "../../components/shared/checkout-acknowledgment";
import {useSelector} from "react-redux";
import {selectCheckout} from "../../redux/features/checkout/checkout-slice";
import {DoneOutline, LocalShippingOutlined, PaymentOutlined, SummarizeOutlined} from "@mui/icons-material";

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
        {stage: 1, label: 'Shipping', icon: <LocalShippingOutlined/>},
        {stage: 2, label: 'Summary', icon: <SummarizeOutlined/>},
        {stage: 3, label: 'Payment', icon: <PaymentOutlined/>},
        {stage: 4, label: 'Acknowledgment', icon: <DoneOutline/>}
    ]

    const {activeStep} = useSelector(selectCheckout);

    return (
        <AuthLayout>
            <Box>
                <Container>
                    <Stepper orientation="vertical" activeStep={activeStep}>
                        {steps.map(step => {
                            return (
                                <Step
                                    completed={activeStep > step.stage}
                                    active={activeStep === step.stage}
                                    key={step.stage}>
                                    <StepLabel>{step.label}</StepLabel>
                                    <StepIcon icon={step.icon}/>
                                </Step>
                            )
                        })}
                    </Stepper>

                    <Box>
                        {renderStep(activeStep)}
                    </Box>

                </Container>
            </Box>
        </AuthLayout>
    )
}
export default CheckoutPage;
