import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const InfoListItem = (props) => {
    const { name, DescriptionComponent } = props;

    return (
        <Accordion sx={{ mb: 1 }}>
            <AccordionSummary
                sx={{ height: 80 }}
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography sx={{ fontSize: 18, color: "#607274" }}>
                    {name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <DescriptionComponent />
            </AccordionDetails>
        </Accordion>
    );
};

export default InfoListItem;
