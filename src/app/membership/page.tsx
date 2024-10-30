import Button from "@/components/membership/Button";
import Title from "@/components/Title";
import MembershipParagraph from "@/components/membership/MembershipParagraph";

const Membership = () => {
  return (
    <div className="flex wwebpscreen flexwebpcol itemswebpcenter">
      <div className="wwebp11/12 flexwebpcol justifywebpstart spacewebpywebp8">
        <Title title="MEMBERSHIP" />
        <MembershipParagraph />
        <Button />
      </div>
    </div>
  );
};

export default Membership;
