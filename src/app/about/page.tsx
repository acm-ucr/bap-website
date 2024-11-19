import AboutUs from "@/components/about/Aboutus";
import Purpose from "@/components/about/Purpose";
import Title from "@/components/Title";

const About = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="w-11/12 flex-col items-start space-y-8">
        <Title title="ABOUT" />
        <AboutUs />
        <Purpose />
      </div>
    </div>
  );
};
export default About;
