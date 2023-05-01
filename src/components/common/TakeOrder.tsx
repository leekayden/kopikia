import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import { TransitionProps } from "@mui/material/transitions";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { isMobileDevice, orderAutoname } from "../global/data";
import TabsSelector from "./TabsSelector";
import { useLocation } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TakeOrder() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let predefinedOrderName = undefined;
  let predefinedLoc = undefined;

  if (queryParams.get("name")) {
    predefinedOrderName = queryParams.get("name");
  }

  if (queryParams.get("location")) {
    predefinedLoc = queryParams.get("location");
  }

  const getCurrentDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  };

  const currentDate = getCurrentDate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [verboseEnabled, setVerboseEnabled] = useState(!isMobileDevice());
  const [orderName, setOrderName] = useState<string>(
    predefinedOrderName
      ? predefinedOrderName
      : orderAutoname
      ? `Order ${currentDate}`
      : ""
  );

  const [loc, setLoc] = useState<string>(predefinedLoc ? predefinedLoc : "");

  const handleVerboseToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerboseEnabled(event.target.checked);
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderName(event.target.value);
  };

  const handleLocChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoc(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleClickOpen}>
        Take new order
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Take Order
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container sx={{ p: 3 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={verboseEnabled}
                  onChange={handleVerboseToggle}
                />
              }
              label={verboseEnabled ? "Verbose Mode" : "Minimalistic Mode"}
            />
          </FormGroup>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="order-name"
              margin="dense"
              label="Order Name"
              variant="filled"
              value={orderName}
              onChange={handleOrderChange}
              helperText={
                orderAutoname
                  ? "This autofills as autonaming of orders is on. Please visit the settings page to turn off."
                  : undefined
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="location"
              margin="dense"
              label="Location"
              variant="filled"
              value={loc}
              onChange={handleLocChange}
              helperText="This can be anywhere, it's for your own reference :D"
            />
          </Grid>
          <Grid item xs={12}>
            <TabsSelector verbose={verboseEnabled} />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
