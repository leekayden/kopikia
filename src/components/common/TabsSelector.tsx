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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

const defineTypes = ["", "Kopi-O", "Kopi", "Kopi-C"];
const defineThickness = ["", "Po", "Gau", "Di Lo", "Normal"];
const defineSugar = ["", "Gah Dai", "Siew Dai", "Kosong", "Normal"];
const defineTemp = ["", "Hot", "Peng", "Half"];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  types: JSX.Element | null,
  thicknessLvl: JSX.Element | null,
  sugarLvl: JSX.Element | null,
  temp: JSX.Element | null
) {
  return { types, thicknessLvl, sugarLvl, temp };
}

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

  // new states
  const [type, setType] = useState<"" | "Kopi-O" | "Kopi" | "Kopi-C">("");
  const [thickness, setThickness] = useState<
    "" | "Po" | "Gau" | "Di Lo" | "Normal"
  >("");
  const [sugar, setSugar] = useState<
    "" | "Gah Dai" | "Siew Dai" | "Kosong" | "Normal"
  >("");
  const [temp, setTemp] = useState<"" | "Hot" | "Peng" | "Half">("");

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as "" | "Kopi-O" | "Kopi" | "Kopi-C");
  };
  const handleThicknessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setThickness(event.target.value as "" | "Po" | "Gau" | "Di Lo" | "Normal");
  };
  const handleSugarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSugar(
      event.target.value as "" | "Gah Dai" | "Siew Dai" | "Kosong" | "Normal"
    );
  };
  const handleTempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(event.target.value as "" | "Hot" | "Peng" | "Half");
  };

  const rows = [
    createData(
      <Typography>Kopi-O</Typography>,
      <Typography>Po</Typography>,
      <Typography>Gah Dai</Typography>,
      <Typography>Hot</Typography>
    ),
    createData(
      <Typography>Kopi</Typography>,
      <Typography>Gau</Typography>,
      <Typography>Siew Dai</Typography>,
      <Typography>Peng</Typography>
    ),
    createData(
      <Typography>Kopi-C</Typography>,
      <Typography>Di Lo</Typography>,
      <Typography>Kosong</Typography>,
      <Typography>Half</Typography>
    ),
    createData(
      null,
      <Typography>Normal</Typography>,
      <Typography>Normal</Typography>,
      null
    ),
    createData(
      <TextField
        select
        label={"Types"}
        value={type}
        onChange={handleTypeChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineTypes
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>,
      <TextField
        select
        label={"Thickness Level"}
        value={thickness}
        onChange={handleThicknessChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineThickness
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>,
      <TextField
        select
        label={"Sugar Level"}
        value={sugar}
        onChange={handleSugarChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineSugar
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>,
      <TextField
        select
        label={"Temperature"}
        value={temp}
        onChange={handleTempChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineTemp
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>
    ),
  ];

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          scrollButtons
          aria-label="full width tabs example"
        >
          <Tab label="Kopi" {...a11yProps(0)} />
          <Tab label="Teh" {...a11yProps(1)} />
          <Tab label="Milo" {...a11yProps(2)} />
          <Tab label="House" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Types</StyledTableCell>
                  <StyledTableCell align="center">
                    Thickness Level
                  </StyledTableCell>
                  <StyledTableCell align="center">Sugar Level</StyledTableCell>
                  <StyledTableCell align="center">Hot/Cold</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell align="center">
                      {row.types}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.thicknessLvl}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.sugarLvl}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.temp}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          null
        </TabPanel>
      </SwipeableViews>
      <br />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handlePanelChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Generated Order</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* {displayItems.map(
              (item, index) => item && <div key={index}>{item}</div>
            )} */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
