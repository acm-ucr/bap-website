import Button from "@/components/membership/Button";
import MembershipParagraph from "@/components/membership/MembershipParagraph";

const Membership = () => {
  return (
    <div className="flex w-screen flex-col items-center pb-5">
      <MembershipParagraph />
      <Button />
    </div>
  );
};

export default Membership;
