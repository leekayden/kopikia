import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlusMinusTextField from "../components/PlusMinusTextfield";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabsSelector() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handlePanelChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const [kopiohot, setKopiohot] = useState(0);
  const [kopiocold, setKopiocold] = useState(0);
  const [kopiosdhot, setKopiosdhot] = useState(0);
  const [kopiosdcold, setKopiosdcold] = useState(0);
  const [tehohot, setTehohot] = useState(0);
  const [tehocold, setTehocold] = useState(0);
  const [tehosdhot, setTehosdhot] = useState(0);
  const [tehosdcold, setTehosdcold] = useState(0);

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          //   variant="scrollable"
          scrollButtons
          aria-label="full width tabs example"
        >
          <Tab label="Kopi" {...a11yProps(0)} />
          <Tab label="Teh" {...a11yProps(1)} />
          <Tab label="Milo" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Kopi-O (Hot)"
              count={kopiohot}
              setState={setKopiohot}
            />
            <PlusMinusTextField
              label="Kopi-O (Ice)"
              count={kopiocold}
              setState={setKopiocold}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Kopi-O Siew Dai (Hot)"
              count={kopiosdhot}
              setState={setKopiosdhot}
            />
            <PlusMinusTextField
              label="Kopi-O Siew Dai (Ice)"
              count={kopiosdcold}
              setState={setKopiosdcold}
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-O (Hot)"
              count={tehohot}
              setState={setTehohot}
            />
            <PlusMinusTextField
              label="Teh-O (Ice)"
              count={tehocold}
              setState={setTehocold}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-O Siew Dai (Hot)"
              count={tehosdhot}
              setState={setTehosdhot}
            />
            <PlusMinusTextField
              label="Teh-O Siew Dai (Ice)"
              count={tehosdcold}
              setState={setTehosdcold}
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handlePanelChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Generated Order</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {kopiohot !== 0 && <p>Kopi-O Hot: [{kopiohot}]</p>}
            {kopiocold !== 0 && <p>Kopi-O Cold: [{kopiocold}]</p>}
            {kopiosdhot !== 0 && <p>Kopi-O Siew Dai Hot: [{kopiosdhot}]</p>}
            {kopiosdcold !== 0 && <p>Kopi-O Siew Dai Cold: [{kopiosdcold}]</p>}
            {tehohot !== 0 && <p>Teh-O Hot: [{tehohot}]</p>}
            {tehocold !== 0 && <p>Teh-O Cold: [{tehocold}]</p>}
            {tehosdhot !== 0 && <p>Teh-O Siew Dai Hot: [{tehosdhot}]</p>}
            {tehosdcold !== 0 && <p>Teh-O Siew Dai Cold: [{tehosdcold}]</p>}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
