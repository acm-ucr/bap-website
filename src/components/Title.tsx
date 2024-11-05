type props = {
  title: string;
};
const Title = ({ title }: props) => {
  return (
    <div className="flex max-w-fit flex-col text-3xl">
      <div className="">{title}</div>
      <div className="mt-1 bg-bap-red-200 pt-1"></div>
    </div>
  );
};
export default Title;
