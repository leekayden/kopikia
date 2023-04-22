import React from "react";
import { TextField, MenuItem } from "@mui/material";

interface Props {
  label: string;
  value: string;
  setState: React.Dispatch<React.SetStateAction<any>>;
  lineBreakAfter?: boolean;
  type: "types" | "thickness" | "sugar" | "temp";
}

const PlusMinusDropdown: React.FC<Props> = ({
  label,
  value,
  setState,
  lineBreakAfter = true,
  type,
}) => {
  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const types = ["", "Kopi-O", "Kopi", "Kopi-C"];
  const thickness = ["", "Po", "Gau", "Di Lo", "Normal"];
  const sugar = ["", "Gah Dai", "Siew Dai", "Kosong", "Normal"];
  const temp = ["", "Hot", "Peng", "Half"];

  let values;

  if (type === "types") {
    values = types.filter((item) => item !== "");
  } else if (type === "thickness") {
    values = thickness;
  } else if (type === "sugar") {
    values = sugar;
  } else if (type === "temp") {
    values = temp;
  }

  return (
    <div>
      <TextField
        select
        label={label}
        value={value}
        onChange={handleCountChange}
        variant="filled"
        sx={{ width: "80%" }}
      >
        <MenuItem disabled selected><em>Select</em></MenuItem>
        {values?.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default PlusMinusDropdown;
