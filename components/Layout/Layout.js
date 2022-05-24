import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

export default function Layout({ data, children }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState();

  React.useEffect(() => {
    setIsOpen(false);
  }, [router.query.id]);

  return (
    <div className="h-screen">
      <div className="h-[15%]">
        <Header setValue={(e) => setIsOpen(e)} />
      </div>
      <div className="flex h-[85%] pb-[50px] pr-[50px] md:px-[20px] md:flex-col md:pb-[30px]">
        {isOpen && <Sidebar data={data} />}
        <div className="md:hidden flex">
          <Sidebar data={data} />
        </div>
        {children}
      </div>
    </div>
  );
}
