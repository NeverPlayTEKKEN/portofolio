import { Carousel } from "@/components/carousel/Carousel";
import { Header } from "@/components/header/Header";

export default function Home() {

  return (
    <div>
      <Header tittle="Naoki's Portofolio"/>
      <h2>Components</h2>
      <Carousel />
      <h2>Sample Site</h2>
      <h2>About Me</h2>
    </div>
  );
}