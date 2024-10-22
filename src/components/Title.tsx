type props = {
  title: string;
};
const Title = ({ title }: props) => {
  return (
    <div className="flex flex-col">
      <div className="">{title}</div>
      <div className="bg-bap-red-200 pt-0.5"></div>
    </div>
  );
};
export default Title;
