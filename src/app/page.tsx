import EventGallery from "@/components/home/EventGallery";
import Landing from "@/components/home/Landing";
import Membership from "@/components/home/Membership";
import Mission from "@/components/home/Mission";
import Professional from "@/components/home/Professionals";

const Home = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center space-y-16">
      <div className="m-3" />
      <Landing />
      <div className="m-20" />
      <Mission />
      <EventGallery />
      <Professional />
      <Membership />
    </div>
  );
};

export default Home;
