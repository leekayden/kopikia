import NavBar from "./NavBar";
import ImgBtn from "../components/ImgBtn";
import Hero from "./Hero";

let images = [
  {
    url: "/order",
    title: "Take Orders",
    width: "100%",
    bgUrl: "",
  },
  // {
  //   url: "",
  //   title: "Use previous orders",
  //   width: "25%",
  //   bgUrl: "",
  // },
  // {
  //   url: "",
  //   title: "Find good deals",
  //   width: "25%",
  //   bgUrl: "",
  // },
  // {
  //   url: "",
  //   title: "Take orders with friends",
  //   width: "25%",
  //   bgUrl: "",
  // },
];

function Home() {
  return (
    <div>
      <NavBar />
      <ImgBtn imgLs={images} />
      <Hero/>
    </div>
  );
}

export default Home;
