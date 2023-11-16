import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface LabelStepperProps {
  stepNum: number;
  title: string;
}

const LabelStepper: React.FC<LabelStepperProps> = ({ stepNum, title }) => {
  const steps = [
    { title },
    "View Information",
    "Payment Information",
    "Confirm Payment",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepNum} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              {typeof label === "string" ? label : label.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default LabelStepper;
