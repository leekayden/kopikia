import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";

interface Props {
  text: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const PlusMinusTextField: React.FC<Props> = ({ text, state, setState }) => {
  const handleDecrement = () => {
    setState((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setState((prev) => prev + 1);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleDecrement}>
        <RemoveIcon />
      </IconButton>
      <TextField label={text} value={state} />
      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default PlusMinusTextField;
