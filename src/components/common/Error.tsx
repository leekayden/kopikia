import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Error.css";
import { Home } from "@mui/icons-material";
import NavBar from "./NavBar";

export interface ErrorProps {
  errorCode: number;
  message?: string;
}

export default function Error(props: ErrorProps) {
  const { errorCode, message } = props;
  const handleHomeClick = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">{errorCode}</Typography>
              <Typography variant="h6">
                {errorCode === 404
                  ? "The page you’re looking for doesn’t exist."
                  : message
                  ? message
                  : "An unknown error occurred, we will get to it as soon as possible."}
              </Typography>
              <Button
                sx={{ marginTop: 2 }}
                size="large"
                color="secondary"
                variant="contained"
                startIcon={<Home />}
                onClick={handleHomeClick}
              >
                Back Home
              </Button>
            </Grid>
            {errorCode === 404 ? (
              <Grid xs={6}>
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                  alt=""
                  width={500}
                  height={250}
                />
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
