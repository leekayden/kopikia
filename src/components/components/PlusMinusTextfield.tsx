import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";

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
    setState((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setState((prev) => prev + 1);
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
      <IconButton onClick={handleDecrement}>
        <RemoveIcon />
      </IconButton>
      <TextField label={label} value={count} />
      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default PlusMinusTextField;
