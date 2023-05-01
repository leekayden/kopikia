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
import MenuItem from "@mui/material/MenuItem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { isLoggedIn, initials, ownerId } from "../global/data";
import { AppName } from "../global/definitions";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

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

class Deal {
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
  "Take Order",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    window.location.replace("/order");
  }
);

const setting1 = new Setting(
  "Settings",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    window.location.pathname = "settings";
  }
);

const setting2 = new Setting(
  "Logout",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    window.location.pathname = `logout?uid=${ownerId}`;
  }
);

const deal1 = new Deal(
  "Close to me",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    window.location.href = "/deals/close-to-me";
  }
);

const deal2 = new Deal(
  "Michelin Star",
  (event: React.MouseEvent<HTMLButtonElement>): void => {
    window.location.replace("/deals/michelin-star");
  }
);

const pgClasses = [page1];
const settings = [setting1, setting2];
const deals = [deal1, deal2];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElNav2, setAnchorElNav2] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser2, setAnchorElUser2] = React.useState<null | HTMLElement>(
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

  const handleOpenNavMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav2(event.currentTarget);
  };
  const handleOpenUserMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseNavMenu2 = () => {
    setAnchorElNav2(null);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  console.log(window.location.pathname);

  return (
    <div>
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
                {window.location.pathname.toString() === "/" ? null : (
                  <MenuItem
                    component="button"
                    onClick={() => (window.location.href = "/")}
                  >
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                )}
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
              href="/"
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Tooltip title={"Not available yet"}>
                <Button
                  // onClick={handleOpenUserMenu2}
                  color={prefersDarkMode ? "secondary" : undefined}
                  sx={prefersDarkMode ? { color: "grey" } : { color: "grey" }}
                  disableElevation
                  disableFocusRipple
                  disableTouchRipple
                  disableRipple
                  aria-disabled
                >
                  Good Deals
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser2)}
                onClose={handleCloseUserMenu2}
              >
                {deals.map((deal) => (
                  <MenuItem
                    component="button"
                    key={deal.name}
                    onClick={deal.onClick}
                  >
                    <Typography textAlign="center">{deal.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              {pgClasses.map((page) => (
                <Button
                  key={page.name}
                  onClick={page.onClick}
                  color={prefersDarkMode ? "secondary" : undefined}
                  sx={prefersDarkMode ? undefined : { color: "white" }}
                >
                  {page.name}
                </Button>
              ))}
              <div style={{ width: 15 }}></div>
              {isLoggedIn ? null : (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<VpnKeyIcon />}
                  >
                    Login
                  </Button>
                  <div style={{ width: 10 }}></div>
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
                <div>
                  <Tooltip title="Not available yet">
                    <IconButton
                      aria-disabled
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      // onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      {/* <Avatar alt={initials} src="/static/images/avatar/2.jpg" /> */}
                      <AccountCircle
                        fontSize="large"
                        color={prefersDarkMode ? "secondary" : undefined}
                      />
                    </IconButton>
                  </Tooltip>
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
              ) : null}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
