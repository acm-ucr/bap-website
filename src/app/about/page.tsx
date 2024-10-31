import AboutUs from "@/components/about/Aboutus";
import Purpose from "@/components/about/Purpose";
import Title from "@/components/Title";

const About = () => {
  return (
    <div className="flex wwebpscreen justifywebpcenter">
      <div className="wwebp11/12 flexwebpcol itemswebpstart spacewebpywebp8">
        <Title title="ABOUT" />
        <AboutUs />
        <Purpose />
      </div>
    </div>
  );
};
export default About;
