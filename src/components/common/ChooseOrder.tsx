import React, { useState } from "react";
import {
  Autocomplete,
  Step,
  StepButton,
  Stepper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface Drink {
  name: string;
  variations: string[];
}

interface Food {
  name: string;
  variations?: string[];
}

const drinks: Drink[] = [
  { name: "Coffee", variations: ["Kopi O", "Kopi C", "Kopi"] },
  { name: "Tea", variations: ["Tea with milk", "Tea with lemon"] },
  { name: "Milo", variations: ["Milo Dinosaur", "Milo Godzilla"] },
];

const foods: Food[] = [
  { name: "Nasi Lemak", variations: ["With Chicken", "With Beef", "Vegetarian"] },
  { name: "Hainanese Chicken Rice", variations: ["Steamed Chicken", "Roasted Chicken"] },
  {
    name: "Roti Prata",
    variations: ["Plain Prata", "Egg Prata", "Cheese Prata"],
  },
  { name: "Laksa", variations: ["With Prawn", "With Chicken", "Vegetarian"] },
  { name: "Nasi Goreng", variations: ["With Chicken", "With Beef", "Vegetarian"] },
  { name: "Mee Goreng", variations: ["With Chicken", "With Beef", "Vegetarian"] },
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [selectedVariation, setSelectedVariation] = useState<string | null>(
    null
  );

  const handleDrinkChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Drink | Food | null
  ) => {
    if (value?.variations === undefined) {
      setSelectedVariation(null);
    }
    setSelectedDrink(value as Drink);
  };

  const handleFoodChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Drink | Food | null
  ) => {
    if (value?.variations === undefined) {
      setSelectedVariation(null);
    }
    setSelectedFood(value as Food);
  };

  const handleVariationChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setSelectedVariation(value);
  };

  const steps = ["Select drink or food", "Select variation"];

  const getVariations = (): string[] => {
    if (selectedDrink) {
      return selectedDrink.variations ?? [];
    }
    if (selectedFood) {
      return selectedFood.variations ?? [];
    }
    return [];
  };

  const isVariationStepDisabled = (): boolean => {
    const variations = getVariations();
    return !variations || variations.length === 0;
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

const handleReset = () => {
setActiveStep(0);
setSelectedDrink(null);
setSelectedFood(null);
setSelectedVariation(null);
};

return (
<Box sx={{ width: "100%" }}>
<Stepper activeStep={activeStep} alternativeLabel>
{steps.map((label) => (
<Step key={label}>
<StepButton onClick={handleStep(steps.indexOf(label))}>
{label}
</StepButton>
</Step>
))}
</Stepper>
{activeStep === 0 && (
<Box sx={{ mt: 2 }}>
<Autocomplete
options={[...drinks, ...foods]}
getOptionLabel={(option) => option.name}
renderInput={(params) => (
<TextField {...params} label="Select drink or food" />
)}
onChange={
selectedDrink?.variations === undefined
? handleFoodChange
: handleDrinkChange
}
value={selectedDrink ?? selectedFood}
/>
<Box sx={{ mt: 2 }}>
<Button variant="contained" onClick={handleNext}>
Next
</Button>
</Box>
</Box>
)}
{activeStep === 1 && (
<Box sx={{ mt: 2 }}>
<Typography>Select variation</Typography>
<Autocomplete
options={getVariations()}
getOptionLabel={(option) => option}
renderInput={(params) => (
<TextField {...params} label="Select variation" />
)}
onChange={handleVariationChange}
value={selectedVariation}
/>
<Box sx={{ mt: 2 }}>
<Button variant="contained" onClick={handleBack}>
Back
</Button>
<Button
variant="contained"
onClick={handleReset}
sx={{ ml: 2 }}
>
Reset
</Button>
<Button
variant="contained"
onClick={handleNext}
disabled={!selectedVariation && isVariationStepDisabled()}
sx={{ ml: 2 }}
>
Finish
</Button>
</Box>
</Box>
)}
</Box>
);
};

export default StepperComponent;
