import InvestmentsCard from "../components/Common/InvestmentsCard";
import { FaVectorSquare } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

function InvestorDashBoard() {
  return (
    <>
      <div className="bg-green-950 space-x-4">
        <div className="left text-white">
          <div className="text-xl ">Welcome Back</div>
          <div className="text-3xl">Elon Musk</div>
          <div>elonmmusk@gmail.com</div>
        </div>
        <div className="right-0 text-white">Total Companies:2</div>
      </div>
      <div className="bg-primary-200 h-[800px] w-[300px] ">
        <div>
          <FaVectorSquare />
          Companies
        </div>
        <div>
          <IoSettingsOutline />
          Settings
        </div>
              <p className="h-px my-8 bg-black border-0 dark:bg-gray-700"/>
              <div>
              <CiFilter />
                Filter
              </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <InvestmentsCard equity="30" />
      </div>
      <div className="bg-primary-200 h-[800px] w-[300px] p-3">
        <span className=" flex bg-black text-white p-3 rounded-lg w-[200px] h-[100px]">
          <div> $124533 </div>
          <div> Investment</div>
        </span>
        <span className=" flex bg-black text-white p-3 rounded-lg w-[200px] h-[100px]">
          <div> 45 </div>
          <div className="flex right-0 bottom-0"> Companies</div>
        </span>
      </div>
    </>
  );
}
export default InvestorDashBoard;
