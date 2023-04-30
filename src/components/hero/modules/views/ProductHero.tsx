import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import coffeeImg from "../../banner.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${coffeeImg})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={coffeeImg}
        alt="increase priority"
      />
      <Typography
        sx={{ fontFamily: "'Kalam', cursive;" }}
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
      >
        Order Taking App
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Taking orders with friends made easy
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/order"
        sx={{ minWidth: 200 }}
      >
        Start Now
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        All services are free for now as we are in a developing stage
      </Typography>
    </ProductHeroLayout>
  );
}
