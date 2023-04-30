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
