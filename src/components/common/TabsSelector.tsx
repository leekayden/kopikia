import React, { ChangeEvent, ReactNode, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Radio,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from "@mui/material";
import { Add, Remove, RestartAlt } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import { isMobileDevice } from "../global/data";
import { pink } from "@mui/material/colors";

const defineTypes = ["", "Kopi-O", "Kopi", "Kopi-C"];
const defineThickness = ["", "Po", "Gau", "Di Lo", "Normal"];
const defineSugar = ["", "Gah Dai", "Siew Dai", "Kosong", "Normal"];
const defineTemp = ["", "Hot", "Peng", "Lukewarm"];

const defineTehTypes = ["", "Teh-O", "Teh", "Teh-C"];
const defineTehThickness = ["", "Po", "Gau", "Di Lo", "Normal"];
const defineTehSugar = ["", "Gah Dai", "Siew Dai", "Kosong", "Normal"];
const defineTehTemp = ["", "Hot", "Peng", "Lukewarm"];

const houseDrinks = [
  "Milo",
  "Milo Peng",
  "Milo Kosong",
  "Milo Kosong Peng",
  "Chinese Tea",
  "Lemon Tea",
  "Barley",
  "Lime Juice",
  "Bandung",
  "Water Chestnut",
];

const cannedDrinks = [
  "Coke",
  "Pepsi",
  "Sprite",
  "100 Plus",
  "Mineral Water",
  "Chrysanthemum Tea",
  "Kickapoo",
  "China Apple",
  "Jia Jia",
  "Mountain Dew",
  "Fanta",
];

const otherDrinks = [
  "Red Bull",
  "Green Tea",
  "Oolong Tea",
  "Pineapple",
  "Qoo",
  "Coconut",
  "Root Beer",
];

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

function createTehData(
  tehTypes: JSX.Element | null,
  tehThicknessLvl: JSX.Element | null,
  tehSugarLvl: JSX.Element | null,
  tehTemp: JSX.Element | null
) {
  return { tehTypes, tehThicknessLvl, tehSugarLvl, tehTemp };
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

  const [selectedHouseDrink, setSelectedHouseDrink] = useState<string | null>(
    null
  );

  const [selectedCannedDrink, setSelectedCannedDrink] = useState<string | null>(
    null
  );

  const [selectedOtherDrink, setSelectedOtherDrink] = useState<string | null>(
    null
  );

  const handleSelect = (
    event: SelectChangeEvent<string | null>,
    value: ReactNode
  ) => {
    setSelectedHouseDrink(event.target.value);
  };

  const handleCannedDrinkSelect = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setSelectedCannedDrink(value);
  };

  const handleOtherDrinkSelect = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setSelectedOtherDrink(value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

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

  const [tehType, setTehType] = useState<"" | "Teh-O" | "Teh" | "Teh-C">("");
  const [tehThickness, setTehThickness] = useState<
    "" | "Po" | "Gau" | "Di Lo" | "Normal"
  >("Normal");
  const [tehSugar, setTehSugar] = useState<
    "" | "Gah Dai" | "Siew Dai" | "Kosong" | "Normal"
  >("Normal");
  const [tehTemp, setTehTemp] = useState<"" | "Hot" | "Peng" | "Lukewarm">(
    "Hot"
  );

  const handleTehTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTehType(event.target.value as "" | "Teh-O" | "Teh" | "Teh-C");
    console.log(tehType);
  };
  const handleTehThicknessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTehThickness(
      event.target.value as "" | "Po" | "Gau" | "Di Lo" | "Normal"
    );
  };
  const handleTehSugarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTehSugar(
      event.target.value as "" | "Gah Dai" | "Siew Dai" | "Kosong" | "Normal"
    );
  };
  const handleTehTempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTehTemp(event.target.value as "" | "Hot" | "Peng" | "Lukewarm");
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
        color="secondary"
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
        color="secondary"
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
        color="secondary"
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
        color="secondary"
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

  const tehRows = [
    createTehData(
      <Typography color={tehType === "Teh-O" ? "secondary" : undefined}>
        Teh-O
      </Typography>,
      <Typography color={tehThickness === "Po" ? "secondary" : undefined}>
        Po
      </Typography>,
      <Typography color={tehSugar === "Gah Dai" ? "secondary" : undefined}>
        Gah Dai
      </Typography>,
      <Typography color={tehTemp === "Hot" ? "secondary" : undefined}>
        Hot
      </Typography>
    ),
    createTehData(
      <Typography color={tehType === "Teh" ? "secondary" : undefined}>
        Teh
      </Typography>,
      <Typography color={tehThickness === "Gau" ? "secondary" : undefined}>
        Gau
      </Typography>,
      <Typography color={tehSugar === "Siew Dai" ? "secondary" : undefined}>
        Siew Dai
      </Typography>,
      <Typography color={tehTemp === "Peng" ? "secondary" : undefined}>
        Peng
      </Typography>
    ),
    createTehData(
      <Typography color={tehType === "Teh-C" ? "secondary" : undefined}>
        Teh-C
      </Typography>,
      <Typography color={tehThickness === "Di Lo" ? "secondary" : undefined}>
        Di Lo
      </Typography>,
      <Typography color={tehSugar === "Kosong" ? "secondary" : undefined}>
        Kosong
      </Typography>,
      <Typography color={tehTemp === "Lukewarm" ? "secondary" : undefined}>
        Lukewarm
      </Typography>
    ),
    createTehData(
      null,
      <Typography color={tehThickness === "Normal" ? "secondary" : undefined}>
        Normal
      </Typography>,
      <Typography color={tehSugar === "Normal" ? "secondary" : undefined}>
        Normal
      </Typography>,
      null
    ),
    createTehData(
      <TextField
        select
        label={"Types"}
        value={tehType}
        onChange={handleTehTypeChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem value="" disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineTehTypes
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>,
      <TextField
        select
        label={"Thickness Level"}
        value={tehThickness}
        onChange={handleTehThicknessChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem value="" disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineTehThickness
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>,
      <TextField
        select
        label={"Sugar Level"}
        value={tehSugar}
        onChange={handleTehSugarChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem value="" disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineTehSugar
          .filter((item) => item !== "")
          ?.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
      </TextField>,
      <TextField
        select
        label={"Temperature"}
        value={tehTemp}
        onChange={handleTehTempChange}
        variant="filled"
        sx={{ width: 250 }}
      >
        <MenuItem value="" disabled selected>
          <em>Select</em>
        </MenuItem>
        {defineTehTemp
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
  const [tehOrderList, setTehOrderList] = useState<orderListType[]>([]);
  const [houseOrderList, setHouseOrderList] = useState<string[]>([]);
  const [cannedOrderList, setCannedOrderList] = useState<string[]>([]);
  const [otherOrderList, setOtherOrderList] = useState<string[]>([]);

  const [error, setError] = useState("");
  const [tehError, setTehError] = useState("");
  const [houseDrinkError, setHouseDrinkError] = useState("");
  const [cannedDrinkError, setCannedDrinkError] = useState("");
  const [otherDrinkError, setOtherDrinkError] = useState("");

  const [selectedHouseDrinkRadio, setSelectedHouseDrinkRadio] = useState<
    string | null
  >(null);

  const [selectedCannedDrinkRadio, setSelectedCannedDrinkRadio] = useState<
    string | null
  >(null);

  const handleHouseDrinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedHouseDrinkRadio(event.target.value);
  };

  const handleCannedDrinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCannedDrinkRadio(event.target.value);
  };

  function createHouseItem() {
    if (selectedHouseDrinkRadio !== null) {
      setHouseDrinkError("");
      setHouseOrderList([...houseOrderList, selectedHouseDrinkRadio]);
      setSelectedHouseDrinkRadio(null);
    } else if (selectedHouseDrinkRadio === null) {
      setHouseDrinkError("Please select a house drink.");
    }
  }

  function createCannedItem() {
    if (selectedCannedDrinkRadio !== null) {
      setCannedDrinkError("");
      setCannedOrderList([...cannedOrderList, selectedCannedDrinkRadio]);
      setSelectedCannedDrinkRadio(null);
    } else if (selectedCannedDrinkRadio === null) {
      setCannedDrinkError("Please select a canned drink.");
    }
  }

  function createOtherItem() {
    if (selectedOtherDrink !== null) {
      setOtherDrinkError("");
      setOtherOrderList([...otherOrderList, selectedOtherDrink]);
      setSelectedOtherDrink(null);
    } else if (selectedOtherDrink === null) {
      setOtherDrinkError("Please select a drink.");
    }
  }

  function createItem() {
    if (type !== "" && thickness !== "" && sugar !== "" && temp !== "") {
      setError("");
      setOrderList([
        ...orderList,
        {
          type: type,
          thickness: thickness,
          sugar: sugar,
          temp: temp,
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
      setError(`Please fill up the following field(s): ${unfilled.join(", ")}`);
    }
  }

  function addNewSameItem(item: orderListType & { count: number }) {
    console.log(item.type, item.thickness, item.sugar, item.temp);
    setOrderList([
      ...orderList,
      {
        type: item.type,
        thickness: item.thickness,
        sugar: item.sugar,
        temp: item.temp,
      },
    ]);
    setType("");
    setThickness("Normal");
    setSugar("Normal");
    setTemp("Hot");
  }

  function createTehItem() {
    if (
      tehType !== "" &&
      tehThickness !== "" &&
      tehSugar !== "" &&
      tehTemp !== ""
    ) {
      setTehError("");
      setTehOrderList([
        ...tehOrderList,
        {
          type: tehType,
          thickness: tehThickness,
          sugar: tehSugar,
          temp: tehTemp,
        },
      ]);
      setTehType("");
      setTehThickness("Normal");
      setTehSugar("Normal");
      setTehTemp("Hot");
      console.log(tehOrderList);
    } else {
      let unfilledTeh = [];
      if (type === "") {
        unfilledTeh.push("Types");
      }
      if (thickness === "") {
        unfilledTeh.push("Thickness Level");
      }
      if (sugar === "") {
        unfilledTeh.push("Sugar Level");
      }
      if (temp === "") {
        unfilledTeh.push("Temperature");
      }
      setTehError(
        `Please fill up the following field(s): ${unfilledTeh.join(", ")}`
      );
    }
  }

  function addNewSameTehItem(item: orderListType & { count: number }) {
    console.log(item.type, item.thickness, item.sugar, item.temp);
    setTehOrderList([
      ...tehOrderList,
      {
        type: item.type,
        thickness: item.thickness,
        sugar: item.sugar,
        temp: item.temp,
      },
    ]);
    setTehType("");
    setTehThickness("Normal");
    setTehSugar("Normal");
    setTehTemp("Hot");
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

  const combinedTehOrderList = tehOrderList.reduce((acc, curr) => {
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

  const houseOrderDrinkCount: { [key: string]: number } = {};
  houseOrderList.forEach((item) => {
    if (houseOrderDrinkCount[item]) {
      houseOrderDrinkCount[item]++;
    } else {
      houseOrderDrinkCount[item] = 1;
    }
  });

  const houseOrderDrinkUnique: { name: string; count: number }[] = [];
  Object.entries(houseOrderDrinkCount).forEach(([name, count]) => {
    houseOrderDrinkUnique.push({ name, count });
  });

  const cannedOrderDrinkCount: { [key: string]: number } = {};
  cannedOrderList.forEach((item) => {
    if (cannedOrderDrinkCount[item]) {
      cannedOrderDrinkCount[item]++;
    } else {
      cannedOrderDrinkCount[item] = 1;
    }
  });

  const cannedOrderDrinkUnique: { name: string; count: number }[] = [];
  Object.entries(cannedOrderDrinkCount).forEach(([name, count]) => {
    cannedOrderDrinkUnique.push({ name, count });
  });

  const otherOrderDrinkCount: { [key: string]: number } = {};
  otherOrderList.forEach((item) => {
    if (otherOrderDrinkCount[item]) {
      otherOrderDrinkCount[item]++;
    } else {
      otherOrderDrinkCount[item] = 1;
    }
  });

  const otherOrderDrinkUnique: { name: string; count: number }[] = [];
  Object.entries(otherOrderDrinkCount).forEach(([name, count]) => {
    otherOrderDrinkUnique.push({ name, count });
  });

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant={isMobileDevice() ? "scrollable" : "fullWidth"}
            aria-label="Drink Selector"
            visibleScrollbar
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            <Tab label="Kopi" {...a11yProps(0)} />
            <Tab label="Teh" {...a11yProps(1)} />
            <Tab label="House" {...a11yProps(2)} />
            <Tab label="Canned" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
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
                        <StyledTableCell align="center">
                          Sugar Level
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Hot/Cold
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
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
                          <StyledTableCell align="center">
                            {row.temp}
                          </StyledTableCell>
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
                    color="secondary"
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
                  color="secondary"
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
                  color="secondary"
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
                  color="secondary"
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
                  color="secondary"
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
                    color="secondary"
                  >
                    Add Item
                  </Button>
                  <Typography sx={{ marginTop: 1.5 }} color="error">
                    {error}
                  </Typography>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
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
                        <StyledTableCell align="center">
                          Sugar Level
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Hot/Cold
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tehRows.map((row) => (
                        <StyledTableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <StyledTableCell align="center">
                            {row.tehTypes}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.tehThicknessLvl}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.tehSugarLvl}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.tehTemp}
                          </StyledTableCell>
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
                    onClick={createTehItem}
                    color="secondary"
                  >
                    Add Item
                  </Button>
                  <Typography
                    color="error"
                    sx={{ textAlign: "center", marginTop: 1.5 }}
                  >
                    {tehError}
                  </Typography>
                </div>
              </div>
            ) : (
              <div style={{ display: "block" }}>
                <TextField
                  select
                  label={"Types"}
                  value={tehType}
                  onChange={handleTehTypeChange}
                  variant="filled"
                  sx={{ width: 250 }}
                  color="secondary"
                >
                  <MenuItem value="" disabled selected>
                    <em>Select</em>
                  </MenuItem>
                  {defineTehTypes
                    .filter((item) => item !== "")
                    ?.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                  select
                  label={"Thickness Level"}
                  value={tehThickness}
                  onChange={handleTehThicknessChange}
                  variant="filled"
                  sx={{ width: 250 }}
                  color="secondary"
                >
                  <MenuItem value="" disabled selected>
                    <em>Select</em>
                  </MenuItem>
                  {defineTehThickness
                    .filter((item) => item !== "")
                    ?.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                  select
                  label={"Sugar Level"}
                  value={tehSugar}
                  onChange={handleTehSugarChange}
                  variant="filled"
                  sx={{ width: 250 }}
                  color="secondary"
                >
                  <MenuItem value="" disabled selected>
                    <em>Select</em>
                  </MenuItem>
                  {defineTehSugar
                    .filter((item) => item !== "")
                    ?.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                  select
                  label={"Temperature"}
                  value={tehTemp}
                  onChange={handleTehTempChange}
                  variant="filled"
                  sx={{ width: 250 }}
                  color="secondary"
                >
                  <MenuItem value="" disabled selected>
                    <em>Select</em>
                  </MenuItem>
                  {defineTehTemp
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
                    onClick={createTehItem}
                    color="secondary"
                  >
                    Add Item
                  </Button>
                  <Typography sx={{ marginTop: 1.5 }} color="error">
                    {tehError}
                  </Typography>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid container spacing={2}>
              {houseDrinks.map((option, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <FormControlLabel
                    value={option}
                    control={
                      <Radio
                        checked={selectedHouseDrinkRadio === option}
                        onChange={handleHouseDrinkChange}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label={option}
                    color="secondary"
                  />
                </Grid>
              ))}
            </Grid>
            <hr/>
            <Button
              variant="contained"
              size="large"
              startIcon={<Add />}
              onClick={createHouseItem}
              color="secondary"
              sx={{ marginBottom: 2 }}
            >
              Add Item
            </Button>
            {houseDrinkError && (
              <Typography color="error" sx={{ marginBottom: 2 }}>
                {houseDrinkError}
              </Typography>
            )}
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            <Grid container spacing={2}>
              {cannedDrinks.map((option, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <FormControlLabel
                    value={option}
                    control={
                      <Radio
                        checked={selectedCannedDrinkRadio === option}
                        onChange={handleCannedDrinkChange}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label={option}
                    color="secondary"
                  />
                </Grid>
              ))}
            </Grid>
            <hr/>
            <Button
              sx={{ marginTop: 1.5 }}
              variant="contained"
              size="large"
              startIcon={<Add />}
              onClick={createCannedItem}
              color="secondary"
            >
              Add Item
            </Button>
            <Typography sx={{ marginTop: 1.5 }} color="error">
              {cannedDrinkError}
            </Typography>
          </TabPanel>
        </SwipeableViews>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handlePanelChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Generated Order</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {combinedOrderList.length > 0
              ? combinedOrderList.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Tooltip title="Increase Amount">
                      <IconButton
                        onClick={() => {
                          addNewSameItem(item);
                        }}
                      >
                        <Add />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Decrease Amount">
                      <IconButton
                        onClick={() => {
                          let orderListCopy = [...orderList];
                          orderListCopy.splice(index, 1);
                          setOrderList(orderListCopy);
                        }}
                      >
                        <Remove />
                      </IconButton>
                    </Tooltip>{" "}
                    {item.type}{" "}
                    {item.thickness === "Normal" ? null : item.thickness}{" "}
                    {item.sugar === "Normal" ? null : item.sugar} {item.temp}{" "}
                    <Typography
                      sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}
                    >
                      x{item.count}
                    </Typography>
                  </Typography>
                ))
              : null}
          </Typography>
          <Typography>
            {houseOrderDrinkUnique.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Tooltip title="Increase Amount">
                  <IconButton
                    onClick={() => {
                      setHouseOrderList([...houseOrderList, item.name]);
                    }}
                  >
                    <Add />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Decrease Amount">
                  <IconButton
                    onClick={() => {
                      const index = houseOrderList.indexOf(item.name);
                      if (index !== -1) {
                        setHouseOrderList(
                          houseOrderList
                            .slice(0, index)
                            .concat(houseOrderList.slice(index + 1))
                        );
                      }
                    }}
                  >
                    <Remove />
                  </IconButton>
                </Tooltip>{" "}
                {item.name}
                <Typography sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}>
                  x{item.count}
                </Typography>
              </Typography>
            ))}
          </Typography>
          <Typography>
            {cannedOrderDrinkUnique.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Tooltip title="Increase Amount">
                  <IconButton
                    onClick={() => {
                      setCannedOrderList([...cannedOrderList, item.name]);
                    }}
                  >
                    <Add />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Decrease Amount">
                  <IconButton
                    onClick={() => {
                      const index = cannedOrderList.indexOf(item.name);
                      if (index !== -1) {
                        setCannedOrderList(
                          cannedOrderList
                            .slice(0, index)
                            .concat(cannedOrderList.slice(index + 1))
                        );
                      }
                    }}
                  >
                    <Remove />
                  </IconButton>
                </Tooltip>{" "}
                {item.name}
                <Typography sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}>
                  x{item.count}
                </Typography>
              </Typography>
            ))}
          </Typography>
          <Typography>
            {otherOrderDrinkUnique.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Tooltip title="Increase Amount">
                  <IconButton
                    onClick={() => {
                      setOtherOrderList([...otherOrderList, item.name]);
                    }}
                  >
                    <Add />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Decrease Amount">
                  <IconButton
                    onClick={() => {
                      const index = otherOrderList.indexOf(item.name);
                      if (index !== -1) {
                        setOtherOrderList(
                          otherOrderList
                            .slice(0, index)
                            .concat(otherOrderList.slice(index + 1))
                        );
                      }
                    }}
                  >
                    <Remove />
                  </IconButton>
                </Tooltip>{" "}
                {item.name}
                <Typography sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}>
                  x{item.count}
                </Typography>
              </Typography>
            ))}
          </Typography>
          <Typography>
            {combinedTehOrderList.length > 0 ? (
              combinedTehOrderList.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Tooltip title="Increase Amount">
                    <IconButton
                      onClick={() => {
                        addNewSameTehItem(item);
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Decrease Amount">
                    <IconButton
                      onClick={() => {
                        let tehOrderListCopy = [...tehOrderList];
                        tehOrderListCopy.splice(index, 1);
                        setTehOrderList(tehOrderListCopy);
                      }}
                    >
                      <Remove />
                    </IconButton>
                  </Tooltip>{" "}
                  {item.type}{" "}
                  {item.thickness === "Normal" ? null : item.thickness}{" "}
                  {item.sugar === "Normal" ? null : item.sugar} {item.temp}{" "}
                  <Typography
                    sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}
                  >
                    x{item.count}
                  </Typography>
                </Typography>
              ))
            ) : orderList.length +
                tehOrderList.length +
                houseOrderList.length +
                cannedOrderList.length +
                otherOrderList.length ===
              0 ? (
              <div>Nothing here yet...</div>
            ) : null}
            <hr />
            <Typography sx={{ fontStyle: "italic", marginLeft: "0.5rem" }}>
              {`${
                orderList.length +
                  tehOrderList.length +
                  houseOrderList.length +
                  cannedOrderList.length +
                  otherOrderList.length ===
                0
                  ? "No"
                  : orderList.length +
                    tehOrderList.length +
                    houseOrderList.length +
                    cannedOrderList.length +
                    otherOrderList.length
              } order${
                orderList.length +
                  tehOrderList.length +
                  houseOrderList.length +
                  cannedOrderList.length +
                  otherOrderList.length ===
                1
                  ? ""
                  : "s"
              }${
                orderList.length +
                  tehOrderList.length +
                  houseOrderList.length +
                  cannedOrderList.length +
                  otherOrderList.length ===
                0
                  ? " yet..."
                  : ""
              }`}
            </Typography>
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<RestartAlt />}
            onClick={() => {
              setOrderList([]);
              setTehOrderList([]);
              setHouseOrderList([]);
              setCannedOrderList([]);
            }}
          >
            Reset
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
