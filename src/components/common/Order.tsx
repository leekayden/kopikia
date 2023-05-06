import { isMobileDevice } from "../global/data";
import NavBar from "./NavBar";
import TabsSelector from "./TabsSelector";
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
        <Grid container sx={{ p: 3 }} xs={12}>
          <TabsSelector verbose={!isMobileDevice()} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
