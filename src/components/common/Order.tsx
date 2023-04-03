import NavBar from "./NavBar";
import TakeOrder from "./TakeOrder";
import { Grid } from "@mui/material";

function Order() {
  return (
    <div>
      <NavBar />
      <br />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <TakeOrder />
      </Grid>
    </div>
  );
}

export default Order;
