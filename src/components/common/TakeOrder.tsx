import React, { useEffect, useState } from "react";
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
import {
  budgetEnabledByDefault,
  getNextOrderId,
  isMobileDevice,
  isOnlySpaces,
  orderAutoname,
  ordersEnabledByDefault,
} from "../global/data";
import TabsSelector from "./TabsSelector";

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

  // const isMobile = isMobileDevice();
  // setVerboseEnabled(!isMobile)

  const [verboseEnabled, setVerboseEnabled] = useState(!isMobileDevice());
  const [ordersEnabled, setOrdersEnabled] = useState(ordersEnabledByDefault);
  const [budgetEnabled, setBudgetEnabled] = useState(budgetEnabledByDefault);
  const [orderName, setOrderName] = useState(
    orderAutoname ? `Order ${currentDate}` : ""
  );
  const [orderValue, setOrderValue] = useState(ordersEnabled ? 1 : Number);

  const handleVerboseToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerboseEnabled(event.target.checked);
  };

  const handleOrdersToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrdersEnabled(event.target.checked);
  };

  const handleBudgetToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetEnabled(event.target.checked);
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderName(event.target.value);
  };

  const handleOrderValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setOrderValue(value);
  };

  const orderError = orderValue > 20;

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (!orderName || !orderValue) {
      event.preventDefault();
      event.returnValue =
        "You have unsaved changes. Are you sure you want to leave?";
    }
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
              {`${
                verboseEnabled
                  ? `Take a new order (Order #${getNextOrderId()})`
                  : ""
              } ${
                orderName && !isOnlySpaces(orderName)
                  ? `${verboseEnabled ? " | " : ""}${orderName}`
                  : ""
              }`}
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleClose}
              startIcon={<SaveIcon />}
              disabled={orderError}
            >
              save
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
              label={verboseEnabled ? "Desktop Mode" : "Mobile Mode"}
            />
            <FormControlLabel
              control={
                <Switch checked={ordersEnabled} onChange={handleOrdersToggle} />
              }
              label={ordersEnabled ? "Orders Enabled" : "Orders Disabled"}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={budgetEnabled}
                  onChange={handleBudgetToggle}
                  disabled
                />
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
              value={orderName}
              onChange={handleOrderChange}
              helperText={
                orderAutoname
                  ? "This autofills as autonaming of orders is on. Please visit the settings page to turn off."
                  : undefined
              }
            />
          </Grid>
          {verboseEnabled ? (
            <>
              <Grid item xs={12} sm={6} sx={{ pr: 2 }}>
                <TextField
                  error={orderError}
                  fullWidth
                  id="order-value"
                  margin="dense"
                  label="Number of orders"
                  variant="filled"
                  type="number" // set type to "number"
                  inputProps={{ min: 0 }} // set minimum value to 0
                  value={!ordersEnabled ? 1 : orderValue}
                  onChange={!ordersEnabled ? undefined : handleOrderValueChange}
                  helperText={
                    orderError
                      ? "We have an order limit of 20, sorry :("
                      : ordersEnabled
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
                      ? "Set a budget. Currently not available."
                      : "Set a budget. Currently not available."
                    // : "You've disabled budgets."
                  }
                  disabled={!budgetEnabled}
                />
              </Grid>
            </>
          ) : null}
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
          {/* <EditableList list={["item1"]} type="Orders" /> */}
          {/* <StepperComponent /> */}
          <Grid item xs={12} sx={{ pl: 2 }}>
            <TabsSelector verbose={verboseEnabled} />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
