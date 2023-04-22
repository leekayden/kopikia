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
import PlusMinusDropdown from "../components/DropdownOptions";

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

  const [kopioHot, setKopioHot] = useState(0);
  const [kopiOCold, setKopiOCold] = useState(0);
  const [kopiOGauHot, setKopiOGauHot] = useState(0);
  const [kopiOGauPeng, setKopiOGauPeng] = useState(0);
  const [kopiOPoHot, setKopiOPoHot] = useState(0);
  const [kopiOPoCold, setKopiOPoCold] = useState(0);
  const [kopiOSiewDaiHot, setKopiOSiewDaiHot] = useState(0);
  const [kopiOSiewDaiCold, setKopiOSiewDaiCold] = useState(0);
  const [kopiOGahDaiHot, setKopiOGahDaiHot] = useState(0);
  const [kopiOGahDaiCold, setKopiOGahDaiCold] = useState(0);
  const [kopiOCHot, setKopiOCHot] = useState(0);
  const [kopiOCCold, setKopiOCCold] = useState(0);
  const [kopiOKosongHot, setKopiOKosongHot] = useState(0);
  const [kopiOKosongCold, setKopiOKosongCold] = useState(0);
  const [kopiOGauKosongHot, setKopiOGauKosongHot] = useState(0);
  const [kopiOGauKosongCold, setKopiOGauKosongCold] = useState(0);
  const [tehOHHot, setTehOHHot] = useState(0);
  const [tehOHCold, setTehOHCold] = useState(0);
  const [tehOSiewDaiHot, setTehOSiewDaiHot] = useState(0);
  const [tehOSiewDaiCold, setTehOSiewDaiCold] = useState(0);
  const [tehOGahDaiHot, setTehOGahDaiHot] = useState(0);
  const [tehOGahDaiCold, setTehOGahDaiCold] = useState(0);
  const [tehOCHot, setTehOCHot] = useState(0);
  const [tehOCold, setTehOCold] = useState(0);
  const [tehOGauHot, setTehOGauHot] = useState(0);
  const [tehOGauCold, setTehOGauCold] = useState(0);

  // new states
  const [type, setType] = useState<"" | "Kopi-O" | "Kopi" | "Kopi-C">("");
  const [thickness, setThickness] = useState<"" | "Kopi-O" | "Kopi" | "Kopi-C">(
    ""
  );
  const [sugar, setSugar] = useState<"" | "Kopi-O" | "Kopi" | "Kopi-C">("");
  const [temp, setTemp] = useState<"" | "Kopi-O" | "Kopi" | "Kopi-C">("");

  const data = [
    { name: "Kopi-O (Hot)", value: kopioHot },
    { name: "Kopi-O (Cold)", value: kopiOCold },
    { name: "Kopi-O Gau (Hot)", value: kopiOGauHot },
    { name: "Kopi-O Gau (Peng)", value: kopiOGauPeng },
    { name: "Kopi-O Po (Hot)", value: kopiOPoHot },
    { name: "Kopi-O Po (Cold)", value: kopiOPoCold },
    { name: "Kopi-O Siew Dai (Hot)", value: kopiOSiewDaiHot },
    { name: "Kopi-O Siew Dai (Cold)", value: kopiOSiewDaiCold },
    { name: "Kopi-O Gah Dai (Hot)", value: kopiOGahDaiHot },
    { name: "Kopi-O Gah Dai (Cold)", value: kopiOGahDaiCold },
    { name: "Kopi-C (Hot)", value: kopiOCHot },
    { name: "Kopi-C (Cold)", value: kopiOCCold },
    { name: "Kopi-O Kosong (Hot)", value: kopiOKosongHot },
    { name: "Kopi-O Kosong (Cold)", value: kopiOKosongCold },
    { name: "Kopi-O Gau Kosong (Hot)", value: kopiOGauKosongHot },
    { name: "Kopi-O Gau Kosong (Cold)", value: kopiOGauKosongCold },
    { name: "Teh-O (Hot)", value: tehOHHot },
    { name: "Teh-O (Cold)", value: tehOHCold },
    { name: "Teh-O Siew Dai (Hot)", value: tehOSiewDaiHot },
    { name: "Teh-O Siew Dai (Cold)", value: tehOSiewDaiCold },
    { name: "Teh-O Gah Dai (Hot)", value: tehOGahDaiHot },
    { name: "Teh-O Gah Dai (Cold)", value: tehOGahDaiCold },
    { name: "Teh-C (Hot)", value: tehOCHot },
    { name: "Teh-C (Cold)", value: tehOCold },
    { name: "Teh-O Gau (Hot)", value: tehOGauHot },
    { name: "Teh-O Gau (Cold)", value: tehOGauCold },
  ];

  const rows = [
    createData(<p>Kopi-O</p>, <p>Po</p>, <p>Gah Dai</p>, <p>Hot</p>),
    createData(<p>Kopi</p>, <p>Gau</p>, <p>Siew Dai</p>, <p>Peng</p>),
    createData(<p>Kopi-C</p>, <p>Di Lo</p>, <p>Kosong</p>, <p>Half</p>),
    createData(null, <em>Normal</em>, <em>Normal</em>, null),
    createData(
      <PlusMinusDropdown
        label="Type"
        value={type}
        setState={setType}
        type="types"
      />,
      <PlusMinusDropdown
        label="Thickness Level"
        value={type}
        setState={setType}
        type="thickness"
      />,
      <PlusMinusDropdown
        label="Sugar Level"
        value={type}
        setState={setType}
        type="sugar"
      />,
      <PlusMinusDropdown
        label="Temperature"
        value={type}
        setState={setType}
        type="temp"
      />
    ),
  ];

  const hasNonZeroValue = data.some((item) => item.value !== 0);

  const displayItems = hasNonZeroValue
    ? data.map((item) =>
        item.value !== 0 ? `${item.name} [${item.value}]` : null
      )
    : [
        "Nothing here yet, adjust the amounts away from zero, then it will show here :D",
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-O (Hot)"
              count={tehOHHot}
              setState={setTehOHHot}
            />
            <PlusMinusTextField
              label="Teh-O (Ice)"
              count={tehOHCold}
              setState={setTehOHCold}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-O Siew Dai (Hot)"
              count={tehOSiewDaiHot}
              setState={setTehOSiewDaiHot}
            />
            <PlusMinusTextField
              label="Teh-O Siew Dai (Ice)"
              count={tehOSiewDaiCold}
              setState={setTehOSiewDaiCold}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-O Gah Dai (Hot)"
              count={tehOGahDaiHot}
              setState={setTehOGahDaiHot}
            />
            <PlusMinusTextField
              label="Teh-O Gah Dai (Ice)"
              count={tehOGahDaiCold}
              setState={setTehOGahDaiCold}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-C (Hot)"
              count={tehOCHot}
              setState={setTehOCHot}
            />
            <PlusMinusTextField
              label="Teh-C (Ice)"
              count={tehOCold}
              setState={setTehOCold}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlusMinusTextField
              label="Teh-O Gau (Hot)"
              count={tehOGauHot}
              setState={setTehOGauHot}
            />
            <PlusMinusTextField
              label="Teh-O Gau (Ice)"
              count={tehOGauCold}
              setState={setTehOGauCold}
            />
          </div>
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
            {displayItems.map(
              (item, index) => item && <div key={index}>{item}</div>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
