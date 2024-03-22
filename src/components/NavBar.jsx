import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function NavBar() {
  return (
    <header className="flex w-full shrink-0 items-center px-4 md:px-6">
      <Link className="my-0.5" href="/">
        <Image
          src={logo}
          className="w-32 h-32"
          alt="Word(le) Finder"
          priority
        />
      </Link>
    </header>
  );
}
