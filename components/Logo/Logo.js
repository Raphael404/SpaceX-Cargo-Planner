import Image from "next/image";
import logo from "../../public/Logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={{
        pathname: `/ships`,
      }}
    >
      <a className="ml-10 mr-[50px] md:ml-0 md:mr-0">
        <Image src={logo} alt="Logo" />
      </a>
    </Link>
  );
};

export default Logo;
