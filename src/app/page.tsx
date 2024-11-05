import EventGallery from "@/components/home/EventGallery";
import Landing from "@/components/home/Landing";
import Membership from "@/components/home/Membership";
import Mission from "@/components/home/Mission";
import Professional from "@/components/home/Professionals";
import MembershipParagraph from "@/components/membership/MembershipParagraph";

const Home = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <Landing />
      <div className="m-20" />
      <Mission />
      <EventGallery />
      <Membership />
      <Professional />
      <MembershipParagraph />
    </div>
  );
};

export default Home;
