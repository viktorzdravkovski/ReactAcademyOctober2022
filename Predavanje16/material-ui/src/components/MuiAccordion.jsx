import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
  Container,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  const handleAccordion = (isExpanded, accordionName) => {
    setActiveAccordion(isExpanded ? accordionName : "");
  };

  return (
    <Container>
      <Stack>
        <Accordion
          expanded={activeAccordion === "accordion1"}
          onChange={(event, isExpanded) =>
            handleAccordion(isExpanded, "accordion1")
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              debitis deserunt ea error eum exercitationem facilis hic, iure,
              magni minus necessitatibus, nemo officia possimus quidem
              recusandae rem reprehenderit soluta vel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={activeAccordion === "accordion2"}
          onChange={(event, isExpanded) =>
            handleAccordion(isExpanded, "accordion2")
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              debitis deserunt ea error eum exercitationem facilis hic, iure,
              magni minus necessitatibus, nemo officia possimus quidem
              recusandae rem reprehenderit soluta vel.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={activeAccordion === "accordion3"}
          onChange={(event, isExpanded) =>
            handleAccordion(isExpanded, "accordion3")
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              debitis deserunt ea error eum exercitationem facilis hic, iure,
              magni minus necessitatibus, nemo officia possimus quidem
              recusandae rem reprehenderit soluta vel.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Container>
  );
};

export default MuiAccordion;
