import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import { defaultDecrement, defaultIncrement } from "../global/data";

interface Props {
  label: string;
  count: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  lineBreakAfter?: boolean;
}

const PlusMinusTextField: React.FC<Props> = ({
  label,
  count,
  setState,
  lineBreakAfter = true,
}) => {
  const handleDecrement = () => {
    setState((prev) => prev - defaultDecrement);
  };

  const handleIncrement = () => {
    setState((prev) => prev + defaultIncrement);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: lineBreakAfter ? "1rem" : 0,
      }}
    >
      <IconButton onClick={handleDecrement} disabled={count <= 0}>
        <RemoveIcon />
      </IconButton>
      <TextField label={label} value={count} variant="filled" />
      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default PlusMinusTextField;
