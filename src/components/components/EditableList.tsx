import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InputBase from "@mui/material/InputBase";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { FormControl } from "@mui/material";

type ItemParams = {
  value: string;
  index: number;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onDelete: () => void;
  type: string;
};

const Item = ({ value, index, onChange, onDelete, type }: ItemParams) => {
  const singularForm = type.slice(0, -1); // assuming that the singular form of a type is simply the type without the last character "s"

  return (
    <ListItem key={index} disableGutters sx={{ display: "flex" }}>
      <IconButton aria-label="close" onClick={onDelete}>
        <CloseIcon />
      </IconButton>
      <FormControl>
        <InputBase
          sx={{ ml: 1, flex: 1, width: "50vw" }}
          placeholder={`Insert ${singularForm}`}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </ListItem>
  );
};

type EditableListProps = {
  list: string[];
  type: string;
};

const EditableList = ({ list, type }: EditableListProps) => {
  const [items, setItems] = useState<string[]>(list);
  const [rendered, setRendered] = useState<React.ReactElement[]>([]);
  const [current, setCurrent] = useState<string>("");

  const updateNthItem = (value: string, index: number) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const deleteNthItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const addItem = (value: string) => {
    setItems([...items, value]);
  };

  useEffect(() => {
    const toRender = items.map((value, index) => {
      return (
        <Item
          key={index}
          index={index}
          value={value}
          onChange={(e) => updateNthItem(e.target.value, index)}
          onDelete={() => deleteNthItem(index)}
          type={type}
        />
      );
    });
    setRendered(toRender);
  }, [items, type]);

  return (
    <div>
      <Typography variant="h6" component="h5">
        {type}
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {rendered}
      </List>
      <Box sx={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}>
        <IconButton
          aria-label="delete"
          onClick={() => {
            addItem(current);
            setCurrent("");
          }}
        >
          <AddIcon />
        </IconButton>
        <TextField
          id={`standard-basic-${type.toLowerCase()}`}
          label={type}
          variant="filled"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          sx={{ flex: 1 }}
        />
      </Box>
    </div>
  );
};

export default EditableList;
