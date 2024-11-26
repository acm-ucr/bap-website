import Button from "@/components/membership/Button";
import Title from "@/components/Title";
import MembershipParagraph from "@/components/membership/MembershipParagraph";

const Membership = () => {
  return (
    <div className="flex w-screen animate-fade-down flex-col items-center animate-once">
      <div className="mb-10 w-11/12 flex-col justify-start space-y-8">
        <Title title="MEMBERSHIP" />
        <MembershipParagraph />
        <Button />
      </div>
    </div>
  );
};

export default Membership;
