import Banner from "@/components/Banner";
import Products from "@/components/Products";
import RigDesign from "@/components/RigDesign";
import About from "@/components/About";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <main>
      <Banner />
      <Products />
      <RigDesign />
      <About />
      <Contact />
    </main>
  );
};

export default page;
