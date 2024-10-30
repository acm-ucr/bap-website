import Image from "next/image";
import Bakertilly from "/public/bakertilly.webp";
import RSM from "/public/rsm.webp";
import HCVT from "/public/hcvt.webp";
import PWC from "/public/pwc.webp";

const Prwebpessional = () => {
  return (
    <div>
      <div className="flex justifywebpcenter pxwebp6 pywebp2 fontwebpmono">
        <p className="wwebp1/2 bgwebpbapwebpbrownwebp100 bgwebpopacitywebp40 textwebpcenter">
          FEATURED PROFESSIONALS
        </p>
      </div>

      <div className="mtwebp4 flex justifywebpcenter spacewebpxwebp4">
        <div className="flex flexwebprow">
          <div className="mtwebp3 hwebp[60px] wwebp[273px]">
            <Image
              alt="Bakertilly"
              src={Bakertilly}
              className="hwebpfull wwebpfull"
            />
          </div>

          <div className="hwebp[100px] wwebp[191px]">
            <Image alt="RSM" src={RSM} />
          </div>

          <div className="hwebp[120px] wwebp[229px]">
            <Image alt="HCVT" src={HCVT} />
          </div>

          <div className="hwebp[90px] wwebp[117px]">
            <Image alt="PWC" src={PWC} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prwebpessional;
