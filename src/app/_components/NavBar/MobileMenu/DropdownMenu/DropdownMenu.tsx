import Link from "next/link";

interface DropdownMenuProps {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  setOtherOpen: (open: boolean) => void;
  links: { href: string; label: string }[];
}

export default function DropdownMenu({
  title,
  open,
  setOpen,
  setOtherOpen,
  links,
}: DropdownMenuProps) {
  return (
    <li>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
          setOtherOpen(false);
        }}
      >
        {title} <span className="text-sm text-orange-600">&#9660;</span>
      </button>
      {open && (
        <ul className="pl-4 mt-2 text-xl leading-8 pb-4 max-[400px]:text-lg">
          {links.map((link) => (
            <li key={link.href} className="hover:text-orange-600">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
