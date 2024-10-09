import Link from "next/link";
import Logo from "./Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";
import MobileMenu from "./MobileMenu/MobileMenu";

export default function NavBar() {
  return (
    <>
      <div
        className="flex items-center justify-between w-[1270px] mx-auto h-[100px] z-10 px-[0px]
        max-[1440px]:w-[1000px] max-[1100px]:w-full"
      >
        <div
          className="w-[100px] mt-[50px] max-[1100px]:ml-10 max-[600px]:ml-6 max-[360px]:ml-4
        max-[1100px]:mt-[10px]"
        >
          <Link href="/" id="logo-navbar-desktop">
            <Logo />
          </Link>
        </div>
        <div className="max-[1100px]:hidden">
          <NavLinks />
        </div>
        <MobileMenu />
      </div>
    </>
  );
}
