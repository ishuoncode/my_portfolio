
import { TitleText} from './CustomText';
import OpenTable from './Opentable';
import Voyage from './Voyage';

export default function Work() {
  return (
    <>
      <div className="mt-[50px] " id="work">
        {/* <div className=" absolute right-[70%] top-[1000px] z-0 h-[110vh] min-h-screen w-[214px] rotate-[-53.13deg] bg-[#2d4898bf] blur-[200px]"></div> */}

        <TitleText
          title={
            <>
              <p className="item-centre mb-[160px] text-center  text-indigo-300">
                <span className="h-[20px] w-[20px] text-gray-800">&quot;</span>
                Think the Design
                <br />
                Design the Thinking
                <span className="text-[#1E293B]">&quot;</span>
              </p>
            </>
          }
        />
        <Voyage/>
        <OpenTable/>
      </div>
    </>
  );
}
