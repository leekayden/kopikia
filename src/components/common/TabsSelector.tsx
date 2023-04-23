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
import { Button, IconButton, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const defineTypes = ["", "Kopi-O", "Kopi", "Kopi-C"];
const defineThickness = ["", "Po", "Gau", "Di Lo", "Normal"];
const defineSugar = ["", "Gah Dai", "Siew Dai", "Kosong", "Normal"];
const defineTemp = ["", "Hot", "Peng", "Lukewarm"];

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

interface TabsSelectorProps {
  verbose?: boolean;
}

export default function TabsSelector({ verbose = true }: TabsSelectorProps) {
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
  >("Normal");
  const [sugar, setSugar] = useState<
    "" | "Gah Dai" | "Siew Dai" | "Kosong" | "Normal"
  >("Normal");
  const [temp, setTemp] = useState<"" | "Hot" | "Peng" | "Lukewarm">("Hot");

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
    setTemp(event.target.value as "" | "Hot" | "Peng" | "Lukewarm");
  };

  const rows = [
    createData(
      <Typography color={type === "Kopi-O" ? "secondary" : undefined}>
        Kopi-O
      </Typography>,
      <Typography color={thickness === "Po" ? "secondary" : undefined}>
        Po
      </Typography>,
      <Typography color={sugar === "Gah Dai" ? "secondary" : undefined}>
        Gah Dai
      </Typography>,
      <Typography color={temp === "Hot" ? "secondary" : undefined}>
        Hot
      </Typography>
    ),
    createData(
      <Typography color={type === "Kopi" ? "secondary" : undefined}>
        Kopi
      </Typography>,
      <Typography color={thickness === "Gau" ? "secondary" : undefined}>
        Gau
      </Typography>,
      <Typography color={sugar === "Siew Dai" ? "secondary" : undefined}>
        Siew Dai
      </Typography>,
      <Typography color={temp === "Peng" ? "secondary" : undefined}>
        Peng
      </Typography>
    ),
    createData(
      <Typography color={type === "Kopi-C" ? "secondary" : undefined}>
        Kopi-C
      </Typography>,
      <Typography color={thickness === "Di Lo" ? "secondary" : undefined}>
        Di Lo
      </Typography>,
      <Typography color={sugar === "Kosong" ? "secondary" : undefined}>
        Kosong
      </Typography>,
      <Typography color={temp === "Lukewarm" ? "secondary" : undefined}>
        Lukewarm
      </Typography>
    ),
    createData(
      null,
      <Typography color={thickness === "Normal" ? "secondary" : undefined}>
        Normal
      </Typography>,
      <Typography color={sugar === "Normal" ? "secondary" : undefined}>
        Normal
      </Typography>,
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
        <MenuItem value="" disabled selected>
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
        <MenuItem value="" disabled selected>
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
        <MenuItem value="" disabled selected>
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
        <MenuItem value="" disabled selected>
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

  interface orderListType {
    type: string;
    thickness: string;
    sugar: string;
    temp: string;
  }

  const [orderList, setOrderList] = useState<orderListType[]>([]);

  const [error, setError] = useState("");

  function createItem() {
    if (type !== "" && thickness !== "" && sugar !== "" && temp !== "") {
      setError("");
      setOrderList([
        ...orderList,
        {
          type: type.toString(),
          thickness: thickness.toString(),
          sugar: sugar.toString(),
          temp: temp.toString(),
        },
      ]);
      setType("");
      setThickness("Normal");
      setSugar("Normal");
      setTemp("Hot");
      console.log(orderList);
    } else {
      let unfilled = [];
      if (type === "") {
        unfilled.push("Types");
      }
      if (thickness === "") {
        unfilled.push("Thickness Level");
      }
      if (sugar === "") {
        unfilled.push("Sugar Level");
      }
      if (temp === "") {
        unfilled.push("Temperature");
      }
      setError(`Please fill up the following fields: ${unfilled.join(", ")}`);
    }
  }

  const combinedOrderList = orderList.reduce((acc, curr) => {
    const foundIndex = acc.findIndex(
      (item) =>
        item.type === curr.type &&
        item.thickness === curr.thickness &&
        item.sugar === curr.sugar &&
        item.temp === curr.temp
    );
    if (foundIndex === -1) {
      // If order not found, add it with count 1
      acc.push({ ...curr, count: 1 });
    } else {
      // If order found, increase its count
      acc[foundIndex].count++;
    }
    return acc;
  }, [] as Array<orderListType & { count: number }>);

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      {verbose ? (
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, overflowX: "scroll" }}
              aria-label="simple table"
            >
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
          <br />
          <div>
            <Button
              sx={{
                display: "flex",
                margin: "auto",
              }}
              variant="contained"
              size="large"
              startIcon={<Add />}
              onClick={createItem}
            >
              Add Item
            </Button>
            <Typography
              color="error"
              sx={{ textAlign: "center", marginTop: 1.5 }}
            >
              {error}
            </Typography>
          </div>
        </div>
      ) : (
        <div style={{ display: "block" }}>
          <TextField
            select
            label={"Types"}
            value={type}
            onChange={handleTypeChange}
            variant="filled"
            sx={{ width: 250 }}
          >
            <MenuItem value="" disabled selected>
              <em>Select</em>
            </MenuItem>
            {defineTypes
              .filter((item) => item !== "")
              ?.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
          </TextField>
          <TextField
            select
            label={"Thickness Level"}
            value={thickness}
            onChange={handleThicknessChange}
            variant="filled"
            sx={{ width: 250 }}
          >
            <MenuItem value="" disabled selected>
              <em>Select</em>
            </MenuItem>
            {defineThickness
              .filter((item) => item !== "")
              ?.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
          </TextField>
          <TextField
            select
            label={"Sugar Level"}
            value={sugar}
            onChange={handleSugarChange}
            variant="filled"
            sx={{ width: 250 }}
          >
            <MenuItem value="" disabled selected>
              <em>Select</em>
            </MenuItem>
            {defineSugar
              .filter((item) => item !== "")
              ?.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
          </TextField>
          <TextField
            select
            label={"Temperature"}
            value={temp}
            onChange={handleTempChange}
            variant="filled"
            sx={{ width: 250 }}
          >
            <MenuItem value="" disabled selected>
              <em>Select</em>
            </MenuItem>
            {defineTemp
              .filter((item) => item !== "")
              ?.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
          </TextField>
          <div>
            <Button
              sx={{ marginTop: 1.5 }}
              variant="contained"
              size="large"
              startIcon={<Add />}
              onClick={createItem}
            >
              Add Item
            </Button>
            <Typography sx={{ marginTop: 1.5 }} color="error">
              {error}
            </Typography>
          </div>
        </div>
      )}
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
            {combinedOrderList.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton
                  onClick={() => {
                    setType(item.type as "" | "Kopi-O" | "Kopi" | "Kopi-C");
                    setThickness(
                      item.thickness as "" | "Po" | "Gau" | "Di Lo" | "Normal"
                    );
                    setSugar(
                      item.sugar as
                        | ""
                        | "Gah Dai"
                        | "Siew Dai"
                        | "Kosong"
                        | "Normal"
                    );
                    setTemp(item.temp as "" | "Hot" | "Peng" | "Lukewarm");
                    setError("");
                    console.log(type, thickness, sugar, temp)
                    createItem();
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>{" "}
                {item.type}{" "}
                {item.thickness === "Normal" ? null : item.thickness}{" "}
                {item.sugar === "Normal" ? null : item.sugar} {item.temp}{" "}
                <Typography sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}>
                  x{item.count}
                </Typography>
              </Typography>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
