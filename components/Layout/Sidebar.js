import React from "react";
import Link from "next/link";

const Sidebar = ({ data }) => {
  return (
    <div className="flex flex-col px-12 md:mb-[50px] md:px-0">
      <h1 className="uppercase text-[#979797] text-xl font-Lato mb-[15px]">
        Shipment List
      </h1>
      <div className="overflow-y-auto">
        <ul>
          {data.map((item) => (
            <li className="sidebar-item mt-3 cursor-pointer py-1" key={item.id}>
              <Link
                key={item.id}
                href={{
                  pathname: `/ships/${item.id}`,
                }}
              >
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
