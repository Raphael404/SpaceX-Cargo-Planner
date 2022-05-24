import React from "react";
import Search from "./Search";
import { Logo } from "../Logo";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";

const Header = ({ setValue }) => {
  const router = useRouter();
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [router.query.id]);

  return (
    <div className="flex bg-gray pt-10 md:justify-between md:mx-[20px]">
      <Logo />
      <div className="md:hidden">
        <Search />
      </div>
      <div className="md:flex hidden text-white">
        <Hamburger
          toggled={isOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
              setValue(true);
            } else {
              setOpen(false);
              setValue(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Header;
