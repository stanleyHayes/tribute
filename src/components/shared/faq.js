import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";

const FAQ = ({faq}) => {
    return (
        <Accordion
            sx={{width: '100%', backgroundColor: 'background.default', padding: 0}}
            variant="elevation"
            elevation={0}>
            <AccordionSummary expandIcon={<ArrowRightAlt />}>
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
