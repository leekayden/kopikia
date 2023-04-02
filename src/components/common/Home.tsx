import NavBar from "./NavBar";
import ImgBtn from "../components/ImgBtn";

let images = [
  {
    url: "",
    title: "Take Orders",
    width: "25%",
  },
  {
    url: "",
    title: "Use previous orders",
    width: "25%",
  },
  {
    url: "",
    title: "Find good deals",
    width: "25%",
  },
  {
    url: "",
    title: "Take orders with friends",
    width: "25%",
  },
];

function Home() {
  return (
    <div>
      <NavBar />
      <ImgBtn imgLs={images} />
    </div>
  );
}

export default Home;
