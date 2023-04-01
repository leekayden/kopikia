import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { isLoggedIn, initials } from "../global/data";
import { AppName } from "../global/definitions";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFF",
    },
  },
});

class Page {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  constructor(
    name: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  ) {
    this.name = name;
    this.onClick = onClick;
  }
}

const page1 = new Page(
  "hello",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("hello");
  }
);

const page2 = new Page(
  "hello2",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("hello2");
  }
);

const pgClasses = [page1, page2];

class Setting {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  constructor(
    name: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  ) {
    this.name = name;
    this.onClick = onClick;
  }
}

const setting1 = new Setting(
  "hello",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("hello");
  }
);

const setting2 = new Setting(
  "hello2",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("hello2");
  }
);

const settings = [setting1, setting2];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <EmojiFoodBeverageIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {AppName}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pgClasses.map((page) => (
                  <MenuItem
                    component="button"
                    key={page.name}
                    onClick={page.onClick}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <EmojiFoodBeverageIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {AppName}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pgClasses.map((page) => (
                <Button
                  key={page.name}
                  // onClick={handleCloseNavMenu}
                  onClick={page.onClick}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {isLoggedIn ? null : (
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<VpnKeyIcon />}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PersonAddIcon />}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
              {isLoggedIn ? (
                <Tooltip title="Open settings" placement="bottom">
                  <div>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={initials}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem
                          component="button"
                          key={setting.name}
                          onClick={setting.onClick}
                        >
                          <Typography textAlign="center">
                            {setting.name}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </Tooltip>
              ) : null}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
