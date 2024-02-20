import { IMG_URL } from "../utils/constants";

const RestroitemList = ({ items }) => {
  console.log("item list ",items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div>
            <div className="py-2 w-9/12">
              <span>{item.card.info.name}</span>
              <span className="flex flex-col">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultprice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className=" p-2  w-3/12 ">
            <div className="absolute">
              <button className=" bg-white p-1 mx-6  text-green-600 rounded-lg ">
                Add+
              </button>
            </div>
            <div>
              <img src={IMG_URL + item.card.info.imageId}  />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroitemList;
