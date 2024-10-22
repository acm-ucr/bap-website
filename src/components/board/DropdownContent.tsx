const DropDownContent = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-bap-brown-100 bg-opacity-40 pb-4 pl-12 pr-8 pt-4">
      <div>
        <p className="font-bold"> Faculty Advisor </p>
        <p> Professor John Doe </p>{" "}
      </div>
      <div>
        <p className="font-bold"> President</p> <p>Jane Doe</p>
      </div>
      <div>
        <p className="font-bold">
          {" "}
          Executive Vice <br /> President
        </p>{" "}
        <p>Jane Doe</p>
      </div>{" "}
      <div>
        <p className="font-bold">
          {" "}
          Vice President <br /> of Marketing{" "}
        </p>
        <p> Professor John Doe </p>{" "}
      </div>
      <div>
        <p className="font-bold">
          {" "}
          Vice President <br /> of Correspondence{" "}
        </p>{" "}
        <p>Jane Doe</p>
      </div>
      <div>
        <p className="font-bold">
          {" "}
          Vice President <br /> of Membership{" "}
        </p>{" "}
        <p>Jane Doe</p>
      </div>
      <div>
        <p className="font-bold">
          {" "}
          Vice President of <br /> External Affairs{" "}
        </p>
        <p> John Doe </p>{" "}
      </div>
      <div>
        <p className="font-bold">
          {" "}
          Vice President <br /> of Finance{" "}
        </p>{" "}
        <p>Jane Doe</p>
      </div>
      <div>
        <p className="font-bold">
          {" "}
          Vice President of <br /> International Affairs
        </p>{" "}
        <p>Jane Doe</p>
      </div>
    </div>
  );
};
export default DropDownContent;
