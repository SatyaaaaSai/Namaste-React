import { useDispatch } from "react-redux";
import { IMG_URL, LOGO_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestroitemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  console.log("item list ", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="py-2 w-9/12">
            <span>{item.card.info.name}</span>
            <span className="flex flex-col">
              ₹
              {item.card.info.price / 100 ||
                item.card.info.defaultprice / 100 ||
                488}
            </span>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="p-2  w-3/12">
            <div className="absolute">
              <button
                className=" bg-white p-1 m-8   text-green-600 rounded-lg "
                onClick={() => handleClick(item)}
              >
                Add+
              </button>
            </div>
            <div>
              <img
                src={IMG_URL + item.card.info.imageId || LOGO_URL}
                className="w-28 m-8"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroitemList;
