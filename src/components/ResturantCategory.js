import { useState } from "react";
import RestroitemList from "./RestroitemsList";

const ResturantCategory = ({ data }) => {
  // console.log(data);
  const [showindex, setshowindex] = useState(false);

  const clickbtn = () => {
    setshowindex(!showindex);
  };
  return (
    <div>
      {/* {header} */}
      <div
        className="w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow cursor-pointer"
        onClick={clickbtn}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showindex && <RestroitemList items={data?.itemCards} />}
      </div>
    </div>
  );
};


export default ResturantCategory;


