import Title from "@/components/Title";
import AboutUs from "@/components/about/Aboutus";
import Purpose from "@/components/about/Purpose";
import Mission from "@/components/home/Mission";

const About = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title />
      <AboutUs />
      <Mission />

      <Purpose />
    </div>
  );
};
export default About;
