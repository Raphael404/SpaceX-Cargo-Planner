import React from "react";
import { useRouter } from "next/router";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const Search = () => {
  const router = useRouter();
  const [input, setInput] = React.useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      router.replace({
        query: { ...router.query, keyword: input },
      });
    }
  };

  return (
    <div className="flex bg-white rounded-xl w-[320px] pl-[20px] md:w-full md:mb-[30px] items-center">
      <div
        className="cursor-pointer"
        onClick={(e) => {
          router.replace({
            query: { ...router.query, keyword: input },
          });
        }}
      >
        <SearchOutlined />
      </div>
      <input
        className="py-3 placeholder-[#000000] bg-transparent ml-4"
        placeholder="Search"
        onInput={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
