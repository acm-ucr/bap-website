import Title from "@/components/Title";
import AboutUs from "@/components/about/Aboutus";
import Purpose from "@/components/about/Purpose";

const About = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title />
      <AboutUs />

      <Purpose />
    </div>
  );
};
export default About;
