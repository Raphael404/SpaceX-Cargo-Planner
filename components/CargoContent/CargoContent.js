import React, { useState, useEffect } from "react";

const countCargoBays = (cargoBays) => {
  let baysRequired = 1;
  let currentBaySize = 0;

  const orderArray = cargoBays.split(",");
  const countItems = orderArray.length;

  for (let i = 0; i < countItems; i++) {
    var currentItem = parseFloat(orderArray[i]);
    if (currentBaySize + currentItem > 10) {
      baysRequired++;
      currentBaySize = currentItem;
    } else currentBaySize += currentItem;
  }
  return baysRequired;
};

const CargoContent = ({ ship }) => {
  const [inputCargoBays, setInputCargoBays] = useState("");

  useEffect(() => {
    if (ship) setInputCargoBays(ship.boxes ? ship.boxes : "");
  }, [ship]);

  return (
    <>
      <h1 className="text-white text-[64px] md:text-[28px]">{ship.name}</h1>
      <p className="text-[#979797] text-base">{ship.email}</p>
      <div className="flex flex-col mt-8">
        <p className="uppercase text-base text-[#979797] mb-[10px]">
          Cargo Boxes
        </p>
        <input
          className="max-w-[320px] rounded-lg py-[13px] pl-[20px] md:min-w-full"
          onInput={(e) => {
            setInputCargoBays(e.target.value);
          }}
          value={inputCargoBays}
        />
      </div>

      <div>
        <h1 className="text-[#979797] text-4xl mt-[30px] md:text-[18px] md:text-center">
          Number of required cargo bays
        </h1>
        {ship.boxes && (
          <h2 className="text-white text-[56px] md:text-[34px] md:text-center">
            {inputCargoBays ? (
              countCargoBays(inputCargoBays)
            ) : (
              <span className="text-[#979797] text-2xl">
                There is no outgoing cargo for that company
              </span>
            )}
          </h2>
        )}
      </div>
    </>
  );
};

export default CargoContent;
