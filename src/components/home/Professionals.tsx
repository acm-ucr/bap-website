import Image from 'next/image';
import Bakertilly from '/public/bakertilly.webp'
import RSM  from '/public/rsm.webp'
import HCVT from '/public/hcvt.webp'
import PWC from '/public/pwc.webp'

const Professional = () => {
  return (
    <div>
      <div className="font-mono flex justify-center  px-6 py-2">
      <p className="text-center w-1/2 bg-opacity-40 bg-bap-brown-100">FEATURED PROFESSIONALS</p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <div className="flex flex-row">


          <div className="h-[60px] w-[273px] mt-3">
            <Image alt="Bakertilly" src={Bakertilly} className="w-full h-full"/>
          </div>
          
          <div className="h-[100px] w-[191px] ">

            <Image alt="RSM" src={RSM}/>

          </div>



          <div className="h-[120px] w-[229px]">
            <Image alt="HCVT" src={HCVT}/>

          </div>


          <div className="h-[90px] w-[117px]"> 
            <Image alt="PWC" src={PWC} />
          </div>

          
        </div>
      </div>
    </div>

  );
};

export default Professional;
