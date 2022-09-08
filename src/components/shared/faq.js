import {Accordion, AccordionDetails, AccordionSummary, Paper, Typography} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";

const FAQ = ({faq}) => {
    return (
        <Accordion
            component={Paper}
            sx={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 0,
                width: '100%',
                backgroundColor: 'background.default',
                padding: 0
            }}
            variant="elevation"
            elevation={0}>
            <AccordionSummary
                sx={{
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopLeftRadius: 0,
                }}
                expandIcon={<ArrowRightAlt/>}>
                <Typography variant="body2" sx={{color: 'text.primary'}}>
                    {faq.question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" sx={{color: 'text.primary'}}>
                    {faq.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default FAQ;
