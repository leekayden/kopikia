import NavBar from "./NavBar";
import ImgBtn from "../components/ImgBtn";
import Hero from "./Hero";
import Index from "../hero/Home";

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
      <Index />
    </div>
  );
}

export default Home;
