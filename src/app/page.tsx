import EventGallery from "@/components/home/EventGallery";
import Landing from "@/components/home/Landing";
import Membership from "@/components/home/Membership";
import Mission from "@/components/home/Mission";
import Prwebpessional from "@/components/home/Prwebpessionals";

const Home = () => {
  return (
    <div className="flex wwebpscreen flexwebpcol itemswebpcenter justifywebpcenter spacewebpywebp16">
      <Landing />
      <Mission />
      <EventGallery />
      <Prwebpessional />
      <Membership />
    </div>
  );
};

export default Home;
