import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <ul
          className="flex items-center gap-2 max-[750px]:flex-col max-[1440px]:mx-auto
        max-[1450px]:gap-1 max-[1440px]:gap-2 max-[750px]:pb-[50px]"
        >
          <li>
            <Link href="/">
              <div className="hover:text-[#139a48] duration-300">
                &copy; 2024 Buro Creatixx
              </div>
            </Link>
          </li>
          <span className="max-[750px]:hidden">|</span>
          <li>
            <Link href="/">
              <div className="hover:text-[#f37e79] duration-300">
                Website: Buro Creatixx
              </div>
            </Link>
          </li>
          <span className="max-[750px]:hidden">|</span>
          <li>
            <Link href="/privacy">
              <div className="hover:text-[#d23f27] duration-300">
                Privacyverklaring
              </div>
            </Link>
          </li>
          <span className="max-[750px]:hidden">|</span>
          <li>
            <Link href="/algemene-voorwaarden">
              <div className="hover:text-[#139a48] duration-300">
                Algemene voorwaarden
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}