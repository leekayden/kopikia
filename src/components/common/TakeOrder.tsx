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
import EditableList from "../components/EditableList";
import StepperComponent from "./ChooseOrder";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TakeOrder() {
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

  const [ordersEnabled, setOrdersEnabled] = useState(true);
  const [budgetEnabled, setBudgetEnabled] = useState(false);

  const handleOrdersToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrdersEnabled(event.target.checked);
  };

  const handleBudgetToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetEnabled(event.target.checked);
  };

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleClickOpen}>
        Take an order
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
              {"Take a new order (Order #)"}
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              startIcon={<SaveIcon />}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container sx={{ p: 3 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={ordersEnabled} onChange={handleOrdersToggle} />
              }
              label={ordersEnabled ? "Orders Enabled" : "Orders Disabled"}
            />
            <FormControlLabel
              control={
                <Switch checked={budgetEnabled} onChange={handleBudgetToggle} disabled />
              }
              label={budgetEnabled ? "Budget Enabled" : "Budget Disabled"}
            />
          </FormGroup>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="order-name"
              margin="dense"
              label="Order Name"
              variant="filled"
              defaultValue={`Order ${currentDate}`}
              helperText="Feel free to change this"
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ pr: 2 }}>
            <TextField
              fullWidth
              id="first-name"
              margin="dense"
              label="Number of orders"
              variant="filled"
              helperText={
                ordersEnabled
                  ? "How many people are eating together?"
                  : "You've disabled orders."
              }
              disabled={!ordersEnabled}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ pl: 2 }}>
            <TextField
              fullWidth
              id="last-name"
              margin="dense"
              label="Budget"
              variant="filled"
              helperText={
                budgetEnabled
                  ? "Set a spending limit. Currently not available."
                  : "Set a spending limit. Currently not available."
                  // : "You've disabled budgets."
              }
              disabled={!budgetEnabled}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="location"
              margin="dense"
              label="Location"
              variant="filled"
              helperText="This can be anywhere, it's for your own reference :D"
            />
          </Grid>
          <EditableList list={["item1"]} type="Orders" />
          <StepperComponent />
        </Grid>
      </Dialog>
    </div>
  );
}
