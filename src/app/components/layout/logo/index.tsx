import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={getImgPath("/images/logo/kunalLogo.jpg")}
          alt="logo"
          width={120}
          height={90}
        />
      </Link>
    </>
  );
};

export default Logo;
