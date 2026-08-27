import Cards from "../../components/cards";
import Execution from "../../components/execution";
import Hero from "../../components/hero";
import HomeCta from "../../components/homeCta";
import MethodSection from "../../components/methodSection";
import ProductEcosystem from "../../components/productEcosystem";
import ProjectGrid from "../../components/projectGrid";
import Stats from "../../components/stat";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductEcosystem />
      <Cards />
      <Execution />
      <ProjectGrid />
      <MethodSection />
      <HomeCta/>
    </>
  );
}
