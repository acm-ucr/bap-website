import Button from "@/components/membership/Button";
import Title from "@/components/Title";
import MembershipParagraph from "@/components/membership/MembershipParagraph";

const Membership = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <div className="w-11/12 flex-col justify-start space-y-8">
        <Title title="MEMBERSHIP" />
        <MembershipParagraph />
        <Button />
      </div>
    </div>
  );
};

export default Membership;
