import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

let images = [
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Breakfast",
    width: "40%",
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Burgers",
    width: "30%",
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Camera",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

interface ButtonBasesProps {
  imgLs?: { url: string; title: string; width: string }[];
}

export default function ButtonBases({ imgLs }: ButtonBasesProps) {
  if (imgLs) {
    images = imgLs;
  }

  const handleImageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => handleImageClick(image.url)} // Add onClick handler
        >
          {/* <ImageSrc style={{ backgroundImage: url(${image.url}) }} /> */}
          <Image style={{ zIndex: 1 }}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                fontSize: "1.5rem",
                fontWeight: "bold",
                pl: 1,
                pr: 1,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
          <ImageBackdrop className="MuiImageBackdrop-root" />
        </ImageButton>
      ))}
    </Box>
  );
}
